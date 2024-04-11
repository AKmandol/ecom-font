import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
  state: {
    RightCartSlide: false,
    count: 0,
    modelLogin: false,
    modelRegister: false,
    left: false,
    right: false
  },

  mutations: {
    OPEN_SIDE_CART(state,data){
      state.RightCartSlide = true
    },

    CLOSE_SIDE_CART(state,data){
      state.RightCartSlide = false
    },

    TOGGLE_SIDE_CART(state,data){
      state.RightCartSlide = !state.RightCartSlide
    },

    TOGGLE_LEFT(state,data){
      state.left = !state.left
    },

    TOGGLE_RIGHT(state,data){
      state.right = !state.right
    },

    TOGGLE_REGISTER_MODAL(state,data){
      state.modelRegister = !state.modelRegister
    },
    
    TOGGLE_LOGIN_MODAL(state,data){
      state.modelLogin = !state.modelLogin
    },
  },

  actions: {
    closeSideCart({commit},data){
      commit("CLOSE_SIDE_CART",data)
    },

    openSideCart({commit},data){
      commit("OPEN_SIDE_CART",data)
    },

    toggleSideCart({commit},data){
      commit("TOGGLE_SIDE_CART",data)
    },

    toggleLeft({commit},data){
      commit("TOGGLE_LEFT",data)
    },

    toggleRight({commit},data){
      commit("TOGGLE_RIGHT",data)
    },

    toggleRegisterModal({commit},data){
      commit("TOGGLE_REGISTER_MODAL",data)
    },

    toggleLoginModal({commit},data){
      commit("TOGGLE_LOGIN_MODAL",data)
    },
  }
})

export default store