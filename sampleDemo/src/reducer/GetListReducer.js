import GET_LIST from '../actions/actionType'
const INTIAL_STATE = {List:[]}
export const GetListReducer=(state=INTIAL_STATE,payload)=>{
    switch(payload.type){
        case GET_LIST : {
            return [...state.List,...payload.List]
        };
        default : INTIAL_STATE
    } 
}