import { connect } from 'react-redux';
import { Filter as Component } from '../../components/TodoApp/components/Filter/Filter';
import { setVisibilityFilter } from '../../actions/actionCreators';

const mapStateToProps = state => ({
  filter: state.visibilityFilter,
});

const mapDispatchToProps = dispatch => ({
  onSetVisibilityFilter: filter => dispatch(setVisibilityFilter(filter)),
});

export const Filter = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Component);
