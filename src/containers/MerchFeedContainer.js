import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom'

import {renderSetItem, renderAllItems, renderFilteredItems} from '../actions/userActions';
import MerchFeed from '../components/MerchFeed';


const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        // signUp: (user) => {
        //     dispatch(signUp(user))
        // },
        renderAllItems: (user) => {
            dispatch(renderAllItems(user))
        },
        renderSetItem: (item) => {
            dispatch(renderSetItem(item))
        },
        renderFilteredItems: (option) => {
            dispatch(renderFilteredItems(option))
        }
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MerchFeed));