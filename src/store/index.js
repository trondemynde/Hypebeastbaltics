import { createStore } from 'vuex';

export default createStore({
  state: {
    isAuthenticated: false,
    user: null,
  },
  mutations: {
    SET_AUTH(state, payload) {
      state.isAuthenticated = payload.isAuthenticated;
      state.user = payload.user;
    },
  },
  actions: {
    authenticateUser({ commit }, token) {
      commit('SET_AUTH', { isAuthenticated: true, user: { token } });
    },
    logout({ commit }) {
      commit('SET_AUTH', { isAuthenticated: false, user: null });
      localStorage.removeItem('token');
    },
  },
});