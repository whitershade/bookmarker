import { connect } from 'react-redux';
import Component from './component';


const mapStateToProps = (state: any) => ({
    isAuthenticated: state.user.isAuthenticated,
});


export default connect(mapStateToProps)(Component);