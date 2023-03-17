<script setup>
import router from './../../router';
</script>

<template>
    <div>
        home
        <button @click="()=>{
            router.push('/login')
        }">回去</button>
    </div>
</template>