import AuthApi from '~/api/auth/AuthApi';
const authApi = new AuthApi();
const actions = {
  async login ({ commit }) {
    await authApi.login().then((res) => {
      commit('SET_TOKEN', res.data);
    }).catch((error) => {

    }).finally((e) => {
      
    });
  }
};
export default actions;
