export const add = () => {
    return {
        type: 'QUEUE_ADD'
    }
}

export const subtract = () => {
    return {
        type: 'QUEUE_SUB'
    }
}

export const multiply = () => {
    return {
        type: 'QUEUE_MUL'
    }
}

export const divide = () => {
    return {
        type: 'QUEUE_DIV'
    }
}

export const append = (number) => {
    return {
        type: 'APPEND',
        value: number
    }
}

export const clear = () => {
    return {
        type: 'CLEAR'
    }
}

export const calculate = () => {
    return {
        type: 'CALCULATE'
    }
}