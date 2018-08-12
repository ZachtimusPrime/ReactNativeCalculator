const initialState = {
  total: 0
}

const calculator = (state = initialState, action) => {
    let newState;

    switch(action.type){
        case 'ADD':
            newState = {
                total: state.total + action.value
            };
            return newState;
        case 'SUB':
            newState = {
                total: state.total - action.value
            }
            return newState;
        case 'APPEND':
            newState = {
                total: Number.parseInt(state.total.toString(10) + action.value.toString(10))
            }
            return newState;
        case 'CLEAR':
            return initialState;
        default:
            return state;
    }
}

export default calculator;