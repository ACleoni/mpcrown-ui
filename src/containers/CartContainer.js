import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom'

import {removeFromCart,  storeGrandTotal} from '../actions/userActions';
import Cart from '../components/Cart';


const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeFromCart: (index) => {
            dispatch(removeFromCart(index))
        },
        storeGrandTotal: (grandTotal) => {
            dispatch(storeGrandTotal(grandTotal))
        }
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Cart));