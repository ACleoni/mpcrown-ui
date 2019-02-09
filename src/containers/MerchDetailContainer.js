import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom'

import {addToCart, changeItemColor} from '../actions/userActions';
import MerchDetail from '../components/MerchDetail';


const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (itemCartObject) => {
            dispatch(addToCart(itemCartObject))
        },
        changeItemColor: (id) => {
            dispatch(changeItemColor(id))
        }
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MerchDetail));