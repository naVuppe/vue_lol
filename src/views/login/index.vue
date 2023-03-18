<script setup>
import { ref, reactive } from 'vue';
import { login } from './../../api/login.js';
import router from './../../router';

import Vuex3 from './../../store/index.jsx';
const Vue1 = Vuex3();

// 引入jsx文件
// import UseClientWidth from './clientWidth.jsx';
// const useClientWidth = UseClientWidth();

const form = reactive({
    username: '',
    password: ''
});
const open = () => {
    form.username = '18384518552';
    form.password = '990223';
};
// 定义表单ref
const rulesRef = ref(null);

const onSubmit = async () => {
    // console.log(rulesRef.value);
    rulesRef.value.validate(async (valid) => {
        if (valid) {
            // 前端不能直接判断，要给后端发送请求（mock），判断是否正确
            // if (form.username == '18384518552' && form.password == '990223') {
            //     localStorage.setItem('vue_lol', JSON.stringify(form));
            //     ElMessage.success('登录成功');
            //     const res = await login({ username: form.username, password: form.password });

            //     console.log(res);
            //     // 跳转到首页
            //     await nextTick();
            //     // window.open('https://www.douyu.com/42666', '_self');

            // } else {
            //     ElMessage.error('登录失败');
            //     console.log('登录失败');
            // }
            const res = await login({ username: form.username, password: form.password });
            console.log('mock返回数据', res.data);
            if (res.data.code === 200) {
                console.log(res.data.message);
                // localStorage.setItem('vue_lol', JSON.stringify(form));
                // 跳转到首页
                // router.push('/home');
                router.replace('/home');

                // 用用全局状态管理
                Vue1.mutations.increment(Vue1.state, res.data.token);
            } else {
                console.log(res.data.message);
            }
        } else {
            return false;
        }
    });
};
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

// 获取视口的宽高
// const wh = reactive({
//     width: 0,
//     height: 0
// });
// setInterval(() => {
//     wh.width = useClientWidth.getClientWidth().clientWidth;
//     wh.height = useClientWidth.getClientWidth().clientHeight;
//     console.log(wh);
// },1000);
// q: background-size: cover;是什么意思?
// a: 背景图像将被拉伸以填充元素的整个内容区域。如果图像的宽高比与元素的宽高比不同，那么图像将被拉伸并且看起来可能会失真。
</script>

<template>
    <div class="content">
        <!-- <div class="bgi">
            <img src="./../../assets/水调歌头.jpg" alt="">
        </div> -->
        <!-- <video id="v1" autoplay loop muted>
                    <source src="suen.mp4"
                        type="video/mp4" />
                </video> -->
        <el-card class="el-card" header="">
            <div>
                <h3>登录吧</h3>
            </div>
            <el-form :model="form" label-width="120px" :rules="rules" ref="rulesRef">
                <el-form-item label="用户名：" prop="username" label-width="80px">
                    <el-input v-model="form.username" placeholder="请输入用户名" />
                </el-form-item>
                <el-form-item label="密码：" prop="password" label-width="80px">
                    <el-input v-model="form.password" placeholder="请输入密码" show-password />
                </el-form-item>
                <el-button @click="open">注入</el-button>
                <el-button size="medium" type="primary" @click="onSubmit"
                    style="margin-left: 38%;width: 50%;">登录</el-button>
            </el-form>
        </el-card>
    </div>
</template>

<style scoped lang="scss">
video {
    position: fixed;
    top: 0;
    left: 0;
    min-width: 100%;
    min-height: 100%;
}

h3 {
    margin-bottom: 35px;
}

.content {
    width: 100%;
    height: 100%;
    background: url(./../../assets/水调歌头.jpg) no-repeat;
    // background-size: v-bind(wh + 'px') v-bind(wh + 'px');
    // q: background-size: cover;是什么意思?
    // a: 背景图像将被拉伸以填充元素的整个内容区域。如果图像的宽高比与元素的宽高比不同，那么图像将被拉伸并且看起来可能会失真。
    background-size: cover;
    // position: relative;
    // .bgi{
    //     position: fixed;
    //     top: 0;
    //     left: 0;
    //     width: 100%;
    //     height: 100%;
    //     img{
    //         width: 100%;
    //         height: 100%;
    //         min-width: 1920px;
    //         min-height: 1080px;
    //     }
    // }
}

.el-card {
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    min-width: 550px;
    min-height: 300px;
    max-width: 550px;
    max-height: 300px;
    margin-top: 280px;
    background-color: rgba(137, 207, 235, 0.96);
    border: 0;
    padding: 0 20px;
    font-size: 24px;

    .el-card__header {
        border-bottom: 0px solid red;
    }
}
</style>