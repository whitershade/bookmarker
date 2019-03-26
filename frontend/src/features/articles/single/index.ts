import { connect } from 'react-redux';
import Component from './component';
import { loadItem } from './actions';

const mapStateToProps = (state: any) => ({
  data: state.articles.single.data,
  isLoading: state.articles.single.isLoading,
});

const mapDispatchToProps = {
  loadItem,
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);
