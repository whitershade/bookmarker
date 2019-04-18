import { connect } from 'react-redux';
import uuid from 'uuid';
import { push } from 'connected-react-router';
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
    onConfirm: () => dispatch(deleteItem(id)),
  })),
  push: (link: any) => dispatch(push(link)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);
