/**
 * Created by shuai on 2018/9/5.
 */

import{setToken,getToken,setUser,getUser,removeToken,removeUser} from '@/utils/auth';

const user = {
    state:{
        token:getToken(),
        userinfo:getUser()
    },
    mutations:{
        SET_TOKEN:(state,token)=>{
            state.token = token;
            setToken(token);
        },
        SET_USERINFO:(state,userinfo)=>{
            state.userinfo = userinfo;
            setUser(userinfo);
        },
        logout(state,vm){
            state.token='';
            state.userinfo='';
            removeToken();
            removeUser();
        }

    }
};

export default user;
