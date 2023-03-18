import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import './styles/index.scss';
import 'element-plus/dist/index.css';
// 引入路由守卫
import "./router/permission";
import router from './router';
// 引入mock
import "./mock";

createApp(App).use(router).mount('#app');

console.log( [
    '    __     __',
    ' __/ __\\  / __\\__   ____   _____   _____',
    '/ __/  /\\/ /  /___\\/ ____\\/ _____\\/ _____\\',
    '\\/_   __/ /   _   / /  __/ / __  / / __  /_   __   _____',
    '/ /  / / /  / /  / /  / / /  ___/ /  ___/\\ _\\/ __\\/ _____\\',
    '\\/__/  \\/__/\\/__/\\/__/  \\/_____/\\/_____/\\/__/ /  / /  ___/',
    '                                         / __/  /  \\__  \\',
    '                                         \\/____/\\/_____/'
].join( '\n' ) );