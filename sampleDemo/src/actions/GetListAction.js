 import react from 'react';
 import axios from 'axios';
 import GET_LIST from './actionType'
 export const GetListAction = ()=>{
     return function(dispatch){
        axios.get('https://jsonplaceholder.typicode.com/posts').then((listData=>{
            dispatch({})
        },error=>{
            console.log(error)
        }))
     }
 }