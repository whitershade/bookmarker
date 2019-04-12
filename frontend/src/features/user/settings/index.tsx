import uuid from 'uuid';
import { connect } from 'react-redux';
import Component from './component';
import { deleteItem } from './actions';
import { openModal } from '../../layout/modals/actions';

const mapDispatchToProps = (dispatch: Function) => ({
  openModal: () => dispatch(openModal({
    id: uuid.v4(),
    type: 'confirmation',
    text: 'Are you sure to do this?',
    onClose: () => console.log('fire at closing event'),
    onConfirm: () => {
      dispatch(deleteItem());
    },
  })),
});

export default connect(null, mapDispatchToProps)(Component);
