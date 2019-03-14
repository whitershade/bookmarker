import { connect } from 'react-redux';
import Component from './component';
import {loadItem as loadUser} from "../../features/user/actions";


const mapStateToProps = (state: any) => ({
    isLoading: state.user.isLoading,
    isAuthenticated: state.user.isAuthenticated
});

const mapDispatchToProps = {
    loadUser
};


export default connect(mapStateToProps, mapDispatchToProps)(Component);