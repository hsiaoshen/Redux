function reducer(state = {
  text: '共计单击 0 次',
  number: 0
}, action){
  const count = state.number;
  console.log(state.number);
  console.log(count);
  switch (action.type){
    case 'change':
    return {
      number: count + 1,
      text: '共计单击 ' + number + ' 次'
    }
    default:
      return state
  }
}

export default reducer;
