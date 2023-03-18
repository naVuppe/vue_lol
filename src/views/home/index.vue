<script setup>
import router from './../../router';
const deleteLocalStorage = () => {
    localStorage.removeItem('vue_lol');
};
</script>

<template>
    <div>
        home
        <button @click="()=>{
            router.push('/login')
        }">回去</button>
        <button @click="deleteLocalStorage">退出登录</button>
    </div>
</template>