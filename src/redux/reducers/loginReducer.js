
const initialState = {
    actionType: 'ACTION_TYPE',
    infoGot:{}
};

export default (state = initialState, action)=>{
   
    
    switch (action.type) {
        case 'USER_LOGIN':
          return  { ...state, actionType:'USER_LOGIN',infoGot:action.payload };
          
          default:
          return state;
    }
};
