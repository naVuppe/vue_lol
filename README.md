# Vue 3 + Vite

做一个

## Setup

### eslint配置

```jsx
npm install --save-install eslint
npx eslint --init
```

### 使用element Plus

```jsx
// NPM
npm install element-plus --save
// Yarn
yarn add element-plus
// pnpm
pnpm install element-plus
// 使用
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
.use(ElementPlus)
```

### npm ERR

```jsx
// 这意味着你有依赖冲突。因此，请尝试一一运行以下选项。
// 1. 删除node_modules然后package-lock.json运行
npm install
// 2. 或者尝试清除 npm 缓存
npm cache clean --force
// 3. --legacy-peer-deps或者使用选项运行命令
npm install --legacy-peer-deps
// 4. --force或者使用选项运行命令
npm install --force
```

### 使用scss

```jsx
npm install sass --save-dev
```

### 路由配置

```jsx

```

### 创建登录页面

```jsx
// views/login/index.vue
// 生成表单，进行表单验证
const rules = reactive({
    username: [
        { required: true, message: '请输入用户名', trigger: 'blur' },
        { min: 11, max: 11, message: '用户名为18384518552', trigger: 'blur' },
    ],
    password: [
        { required: true, message: '请输入密码', trigger: 'blur', },
        { min: 6, max: 6, message: '密码为990223', trigger: 'blur' }
    ]
});

// 创建request.js 请求相应器/请求拦截器，导出
// 设置相应的
// 创建登录的api，导入request，设置登录接口

// 发现没有接口，自己mock登录接口
// 1、安装mockjs
// 2、在mock.js 引入mock
import Mock from "mockjs";
Mock.setup({
    timeout: '300-400'  // 设置相应时间
});
// 直接导出一个 Mock.mock() ，有两个参数，第一个是url，用来匹配请求baseUrl和请求中的uel => baseUrl+url
// 第二个参数是回调，它能够拿到请求传过来的值，这个值是一个JSON对象。在回调里面可以做一些操作，然后return一个数据回去，这个请求就可以拿到这个数据了
export default Mock.mock('http://localhost:10500/api/login', ({body }) => {
    const res = JSON.parse(body);
    if (res.username === '18384518552' && res.password === '990223') {
        return {
            code: 200,
            message: '登录成功'
        };
    } else {
        return {
            code: 400,
            message: '用户名或密码错误'
        };
    }
});

// 在接口处
import { login } from './../../api/login.js';
const res = await login({ username: form.username, password: form.password });
// 做登录判断
```
