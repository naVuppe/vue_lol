// export default {
//     namespaced: true,
//     state: {
//         // 1. 定义一个变量，用来存储token
//         token: localStorage.getItem("vue_lol") || "",
//     },
//     mutations: {
//         // 3. 定义一个方法，用来修改token
//         setToken (state, token) {
//             state.token = token;
//             localStorage.setItem("vue_lol", token);
//         }
//     },
//     actions: {
//         // 4. 定义一个方法，用来修改token
//         setToken ({ commit }, token) {
//             commit("setToken", token);
//         }
//     },
//     getters: {
//         // 5. 定义一个方法，用来获取token
//     }
// };