// 1. 引入mockjs
import Mock from "mockjs";
Mock.setup({
    timeout: '300-400'  // 设置相应时间
});
// 2. 引入mock数据
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
