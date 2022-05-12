import { createStore } from 'vuex'

export default createStore({
    state: {
        id: '123',
        sessionData :[]
      },
    mutations: {
        UPDATE_USERID(state,userId){
            state.id =userId
        },
        UPDATE_SESSION(state,sessionData){
        state.sessionData=sessionData;
        }
    },
    actions: {
        addUserId(context,userId) {
            context.commit('UPDATE_USERID', userId)
          }
    },
    getters: {
      userId: function (state){
          return `${state.id}`
      },
      sessionData:function(state){
          return `${state.sessionData}`
      }
    }
    
})