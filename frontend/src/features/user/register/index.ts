import { connect } from 'react-redux';
import Component from './component';
import { register as onSubmit } from './actions';

const mapDispatchToProps = {
  onSubmit,
};

export default connect(null, mapDispatchToProps)(Component);
