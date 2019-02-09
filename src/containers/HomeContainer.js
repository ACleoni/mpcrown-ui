import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom'

// import {signUp, signIn} from '../actions/userActions';
import Home from '../components/Home';


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
        // signIn: (user) => {
        //     dispatch(signIn(user))
        // }
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));