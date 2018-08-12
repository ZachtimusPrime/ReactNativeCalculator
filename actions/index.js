export const add = (number) => {
    return {
        type: 'ADD',
        value: number
    }
}

export const sub = (number) => {
    return {
        type: 'SUB',
        value: number
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