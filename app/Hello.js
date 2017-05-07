import { connect } from 'react-redux';
import Myclick from './myClick';
function mapStateToProps(state) {
  return {
    number: state.number + 1
  };
}
function mapDispatchToProps(dispatch){
  return {
    onClick: (e) => dispatch({
      type: 'change'
    })
  }
}

const Hello = connect(
  mapStateToProps,
  mapDispatchToProps
)(Myclick);
export default Hello;
