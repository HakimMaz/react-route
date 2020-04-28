const initState={
    posts:[
    {id:1,title:"introduction to react",body:"react is javascript library"},
    {id:2,title:"getting started with react",body:"first, you have to install create-react-app"},
    {id:3,title:"using redux",body:"redux is global, central store of data state"}
    ]
    
}

const rootReducer =(state=initState,action)=>{
   return state;
}
export default rootReducer;