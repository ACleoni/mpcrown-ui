import React, {Component} from 'react';
import styles from './styles.module.css';
import {Link} from 'react-router-dom';
import shoppingCart from '../../assets/shoppingCart.svg';
import Checkout from './checkout';


export default class Feed extends Component {
	constructor(props){
		super(props);
		this.state = {
			cartSubtotal: 0,
			grandTotal: 0,
			cartTax: 0
		}
		this._handleRemoveItem = this._handleRemoveItem.bind(this);
		this._handleRecalculateTotal= this._handleRecalculateTotal.bind(this);
		this._handleGrandTotal = this._handleGrandTotal.bind(this);
	}


	_handleRecalculateTotal() {
		const myCart = this.props.user.cartContainer

		const _handleCart = (myCart) => {
			return myCart.itemPrice * myCart.itemQuantity
		}

		const _handleSum = (prev, next) => {
			return prev + next;
		}

		if (this.props.user.cartContainer.length !== 0) {
			this.setState({cartSubtotal: parseFloat(myCart.map(_handleCart).reduce(_handleSum), 10).toFixed(2)});
		
		setTimeout(() => {
			this.setState({shipping: parseFloat(5, 10).toFixed(2)})
		},100)
		
		setTimeout(() => {
			this.setState({cartTax: parseFloat(this.state.cartSubtotal * 0.05, 10).toFixed(2)})
		},100)

		setTimeout(() => {
			const grandTotalArray = [(this.state.cartSubtotal * 1), (this.state.cartTax * 1), (this.state.shipping * 1)]
			this.setState({grandTotal: (grandTotalArray.reduce(_handleSum))})	
		},100)

		setTimeout(() => {
			console.log(this.state)
		}, 1000)

		} else {
			this.setState({cartSubtotal: 0, grandTotal: 0, shipping: 0, cartTax: 0})
		}
	}

	
	_handleGrandTotal() {
		this.props.storeGrandTotal(this.state.grandTotal)
	}


	_handleRemoveItem(event) {
		event.preventDefault()

		const index = event.target.value


		setTimeout(() => {
			this.props.user.cartContainer.splice(index, 1)
			this.props.removeFromCart(index)
			this._handleRecalculateTotal()
		}, 100)
	}


	componentDidMount() {
		this.setState({paid: false})
		if (this.props.user.cartContainer.length !== 0) {
			this._handleRecalculateTotal()
		}
	}


	render(){
		return(
			<React.Fragment>
				<div className={styles.mainContainer}>
					<header id={styles.header}>
						<div className={styles.logo}>
						
						</div>
						<nav className={styles.mainNav}>
							<ul className={styles.mainNavList}>
								<li><a className={styles.nav} href='/'>Home</a></li>
                            	<li><a className={styles.nav} href='/music'>Music</a></li>
                            	<li><a className={styles.nav} href='/'>Tour</a></li>
                            	<li><a className={styles.nav} href='/store'>Merch</a></li>
							</ul>
						</nav>
						<nav>
                        <div id={styles.menuToggle}>
                            <input type="checkbox" />
                            <span></span>
                            <span></span>
                            <span></span>
                            <ul id={styles.barMenu}>
                                <a href='/'><li>Home</li></a>
                                <a href='/music'><li>Music</li></a>
                                <a href='/'><li>Tour</li></a>
                                <a href='/store'><li>Merch</li></a>
                            </ul>
                        </div>
                    </nav>
					</header>
				
					<section className={styles.cartComponent} onChange={this._handleRecalculateTotal}>
						<div className={[styles.wrap, styles.cf].join(' ')}>
							<div className={[styles.heading, styles.cf].join(' ')}>
								<h2>My Stuff</h2>
								<a href='/store' className={styles.continue}>Continue Shopping</a>
							</div>
							<div className={styles.cart}>
								<ul className={styles.cartWrap}>
									{this.props.user.cartContainer.map((cart, index) => {
										return (
											<li className={styles.items} key={index}>
												<div className={styles.infoWrap}>
													<div className={styles.cartSection}>
														<img className={styles.itemImg} src={require(`${cart.name}`)} alt={cart.itemDescription} draggable={false}/>
														<p class={styles.itemNumber}>#QUE-007544-002</p>
														<h3>{cart.itemDescription} - {cart.itemColor} - {cart.itemSize}</h3>
														<p>
															<input type="text" className={styles.qty} value={cart.itemQuantity} />
														</p>
													</div>
													<div className={[styles.prodTotal, styles.cartSection].join(' ')}>
														<p>${cart.itemPrice}</p>
													</div>
													<div className={[styles.cartSection, styles.removeWrap].join(' ')}>
														<a href="#" className={styles.remove} onClick={this._handleRemoveItem}>x</a>
													</div>
												</div>
											</li>
										)}
									)}
								</ul>
							</div>
							<div className={styles.promoCode}>
								<label for="promo">Have A Promo Code?</label>
								<input type="text" name="promo" placeholder="Enter Code" />
								<a href="#" className={styles.btn}></a>
							</div>
							<div className={[styles.subtotal, styles.cf].join(' ')}>
								<ul>
									<li className={styles.totalRow}>
										<span className={styles.label}>Subtotal</span>
										<span className={styles.value}>
											${parseFloat(this.state.cartSubtotal).toFixed(2)}
										</span>
									</li>
									<li className={styles.totalRow}>
										<span className={styles.label}>Shipping</span>
										<span className={styles.value}>
											${parseFloat(this.state.shipping).toFixed(2)}
										</span>
									</li>
									<li className={styles.totalRow}>
										<span className={styles.label}>Tax</span>
										<span className={styles.value}>
											${parseFloat(this.state.cartTax).toFixed(2)}
										</span>
									</li>
									<li className={[styles.totalRow, styles.final].join(' ')}>
										<span className={styles.label}>Total</span>
										<span className={styles.value}>
											${parseFloat(this.state.grandTotal).toFixed(2)}
										</span>
									</li>
									<li className={styles.totalRow}>
									<Checkout cartContainer={this.props.user.cartContainer} 
												amount={parseInt(this.state.grandTotal * 100, 10)} 
									/>
									</li>
								</ul>
							</div>
						</div>
					</section>
				</div>
			</React.Fragment>
		)
	}
}
