import { connect } from 'react-redux';
import uuid from 'uuid';
import Component from './component';
import { loadItems, deleteItem } from './actions';
import { openModal } from '../../layout/modals/actions';

const mapStateToProps = (state: any) => ({
  data: state.articles.list.data,
  isLoading: state.articles.list.isLoading,
});


const mapDispatchToProps = (dispatch: Function) => ({
  loadItems: () => dispatch(loadItems()),
  openModal: (id: string) => () => dispatch(openModal({
    id: uuid.v4(),
    type: 'confirmation',
    text: 'Are you sure to do this?',
    onClose: () => console.log('fire at closing event'),
    // @ts-ignore
    onConfirm: () => {
      console.log('onConfirm');
      dispatch(deleteItem(id));
    },
  })),
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);
