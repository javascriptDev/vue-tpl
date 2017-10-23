<template>
    <div id="app">
        <transition name="el-change">
            <router-view/>
        </transition>
    </div>
</template>

<script>
export default {
    name: 'app'
}
</script>
