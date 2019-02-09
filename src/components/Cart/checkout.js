import React, {Component} from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import styles from './styles.module.css'
import { API_DEV, API_PROD, STRIPE_KEY_DEV, STRIPE_KEY_PROD } from '../../private';


export default class Checkout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            paid: false,
            customerName: '' ,
            customerEmail: '' ,
            addressLine: '',
            addressCity: '',
            addressState: '',
            addressCountry: '',
            addressZip: ''
        }
        this._handleUserInfo = this._handleUserInfo.bind(this);

    }

    _handleUserInfo() {
        const USER_STATEMENT = { Statement: { 
                                    data: {...this.state}, 
                                    items: {...this.props.cartContainer}
                                    }
                                }

        console.log(USER_STATEMENT)

        axios.post(`${API_PROD}/mailer`, USER_STATEMENT)
        .then(res => res.json(res))
        .catch(error => { 
            console.log(error)
        })
    }

    onToken = (amount) => token =>
        axios.post(`${API_PROD}/stripe`, {
            amount,
            merchItems: this.props.cartContainer,
            token
        })
        .then(res => {
            if (res.data.paid === true) {
                this.setState({paid: true, 
                                customerName: token.card.name,
                                customerEmail: res.data.receipt_email,
                                addressLine: token.card.address_line1,
                                addressCity: token.card.address_city,
                                addressState: token.card.address_state,
                                addressCountry: token.card.address_country,
                                addressZip: token.card.address_zip
                            })
                setTimeout(() => {
                    alert('Payment in the amount of ' + this.props.amount + ' to mpcrown.com was successfully received. You will receive a confirmation email shortly regarding the details of your payment.')
                    this._handleUserInfo()
                }, 1000)
            } else {
                setTimeout(() => {
                    alert('We were unable to process your payment in the amount of ' + this.props.amount + '. Please try again.')
                    this._handleUserInfo()
                }, 1000)
            }
        })
        .catch(err => console.log(err));

    
    render() {
        return (
            <React.Fragment>
                    <StripeCheckout token={this.onToken(this.props.amount)}
                                    name={'Crown Family Inc.'}
                                    stripeKey={STRIPE_KEY_PROD}
                                    amount={(this.props.amount)}
                                    billingAddress={true}
                                    shippingAddress={true}
                                    zipCode={true}
                                    image={require('../../images/cfi.png')}> 
                                    <a className={styles.checkout} style={{padding: '1em 3em', fontSize: '1em'}}>
                                        Checkout
                                    </a>
                    </StripeCheckout>
            </React.Fragment>
        )      
    }
}
