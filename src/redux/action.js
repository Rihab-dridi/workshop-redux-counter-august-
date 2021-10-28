import { INCREMENT,DECREMENT, RESET } from "./action-types"


export const incrementHandler=()=>{
    return{
        type:INCREMENT
    }
}

export const decrementHandler=()=>{
    return {
        type:DECREMENT
    }
}

export const resetHandler=()=>{
    return{
        type:RESET
    }
}