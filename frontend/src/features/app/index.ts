import { connect } from 'react-redux';
import Component from './component';
import { loadItem as loadUser } from '../user/actions';

const mapDispatchToProps = {
    loadUser
};

export default connect(null, mapDispatchToProps)(Component);