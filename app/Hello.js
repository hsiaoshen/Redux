import { connect } from 'react-redux';
import Myclick from './myClick';
function mapStateToProps(state) {
  return {
    text: state.text,
    number: state.number
  };
}
function mapDispatchToProps(dispatch){
  return {
    handleClick: () => dispatch({
      type: 'change'
    })
  }
}

const Hello = connect(
  mapStateToProps,
  mapDispatchToProps
)(Myclick);
export default Hello;
