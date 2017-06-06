//
// IncrementCounter container component

import { connect } from 'react-redux';
import { increment, decrement } from '../../actions';
import Counter from '../../components/Counter';

// return state
const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  onIncClick: () => {
    dispatch(increment());
  },
  onDecClick: () => {
    dispatch(decrement());
  }
});

const IncrementCounter = connect(mapStateToProps, mapDispatchToProps)(Counter);

export default IncrementCounter;
