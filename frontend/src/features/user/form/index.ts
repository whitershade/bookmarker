import { connect } from 'react-redux';
import Component from './component/index';
import { login as onSubmit } from '../actions';

const mapDispatchToProps = {
    onSubmit
};

export default connect(null, mapDispatchToProps)(Component);