var redux = require('redux');
var dfState = {mang:['Androd', 'Ios', 'NodeJS'],varStr:true};

var reducer = (state=dfState, action)=>{

    switch(action.type){
        case 'ADD':
            return {...state, mang: [...state.mang,action.item]};
            //return state;
        case 'DELETE':
            return {...state, mang: state.mang.filter((e,i)=> i!=action.index)}
        default:
            return state;
    }
    return state;
}
var store=redux.createStore(reducer);
// store.subscribe(()=>{
//     var str = store.getState();
// });

console.log(store.getState());

export default store;