import { reactive } from "vue";

export default function Vuex3() {
  const state = reactive({
    token: null
  });

  const mutations = {
    increment(state, payload) {
      state.token = payload;
      console.log("state => count：", state.token);
    },
  };

  return {
    state,
    mutations,
  };
}
