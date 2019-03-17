const state = {
    token: "123",            //token字符串
    id: 0,                //用户id
    username: "",         //用户名
    nickname: ""          //昵称
};

const getters = {
    token: function() {
        return state.token;
    }
};

const mutations = {
    setToken: function(state,token) {
        state.token = token;
    },
    setUser: function(state,user) {
        state.id = user.id;
        state.username = user.username;
        state.nickname = user.nickname;
    }
};

const actions = {

};



export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}