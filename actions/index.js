export const add = () => {
    return {
        type: 'QUEUE_ADD'
    }
}

export const sub = () => {
    return {
        type: 'QUEUE_SUB'
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