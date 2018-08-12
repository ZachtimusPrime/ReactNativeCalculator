const initialState = {
  total: 0
}

const calculator = (state = initialState, action) => {
    let newState;
    let previousValue;

    switch(action.type){
        case 'QUEUE_ADD':
            if (state.previousValue) {
                state = calculator(state, { type: state.action })
            }
            previousValue = state.total;
            newState = { 
                total: 0,
                action: "ADD",
                previousValue: previousValue
            }
            return newState;
        case 'QUEUE_SUB':
            if (state.previousValue) {
                state = calculator(state, { type: state.action })
            }
            previousValue = state.total;
            newState = {
                total: 0,
                action: "SUB",
                previousValue: previousValue
            }
            return newState;
        case 'APPEND':
            newState = {
                ...state,
                total: Number.parseInt(state.total.toString(10) + action.value.toString(10))
            }
            return newState;
        case 'ADD':
            console.log(state.total);
            console.log(state.previousValue);
            newState = {
                total: state.total + state.previousValue
            }
            return newState;
        case 'SUB':
            console.log(state.total);
            console.log(state.previousValue);
            newState = {
                total: state.previousValue - state.total
            }
            return newState;
        case 'CALCULATE':
            return calculator(state, { type: state.action });
        case 'CLEAR':
            return initialState;
        default:
            return state;
    }
}

export default calculator;