function reducer(state = {
  text: '共计单击 0 次',
  number: 0
}, action){
  switch(action.type){
    case 'change':
    return {
      text: '共计单击 ' + action.payload + ' 次',
      number: action.payload
    };
    default:
      return state;
  }
}

export default reducer;
