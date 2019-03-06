import { connect } from 'react-redux';
import Component from './component';
import { loadItems } from './actions';

const mapStateToProps = (state:any) => ({
  data: state.articles.list.data,
  isLoading: state.articles.list.isLoading
});

const mapDispatchToProps = {
  loadItems
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);