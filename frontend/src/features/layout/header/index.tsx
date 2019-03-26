import { connect } from 'react-redux';
import Component from './component';
import { logout } from '../../user/actions';

const mapStateToProps = (state: any) => ({
  isAuthenticated: state.user.isAuthenticated,
});

const mapDispatchToProps = {
  logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);
