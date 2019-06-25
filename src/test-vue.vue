<template>
<div>

    <div v-for="(item, index) in numberarray">

        <h1>{{index}}</h1>
        <h2>{{item}}</h2>
        <div class="example">Vue{{ msg }}</div>
    </div>
</div>
</template>

<script>
// import Vue from "vue";
export default ({
    data() {
        return {
            numberarray: Array(3).fill("test"),
            msg: 'Hello world!'
        }
    }
})
</script>

<style>
/* .example {
  color: red;
} */
</style>
