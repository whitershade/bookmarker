import { connect } from 'react-redux';
import Component from './component/list';
import { closeModal } from './actions';

const mapStateToProps = (state: any) => ({
  modals: state.layout.modal.data,
});

const mapDispatchToProps = {
  closeModal,
};


export default connect(mapStateToProps, mapDispatchToProps)(Component);
