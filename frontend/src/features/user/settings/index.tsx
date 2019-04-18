import uuid from 'uuid';
import { connect } from 'react-redux';
import Component from './component';
import { deleteItem, patchItem } from './actions';
import { openModal } from '../../layout/modals/actions';

const mapStateToProps = (state: any) => ({
  initialValues: state.user.data,
});

const mapDispatchToProps = (dispatch: Function) => ({
  openModal: () => dispatch(openModal({
    id: uuid.v4(),
    type: 'confirmation',
    text: 'Are you sure to do this?',
    onClose: () => console.log('fire at closing event'),
    onConfirm: () => dispatch(deleteItem()),
  })),
  patchItem: (e: any) => dispatch(patchItem(e)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);
