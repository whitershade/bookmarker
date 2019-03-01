import { connect } from 'react-redux';
import Component from './component';
import { loadItems } from './actions';

type StateProps = {
  articles: {
    list: {
      data: Object;
      isLoading: boolean;
    };
  };
}

const mapStateToProps = (state: StateProps) => ({
  data: state.articles.list.data,
  isLoading: state.articles.list.isLoading
});

const mapDispatchToProps = {
  loadItems
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);