<template>
<div>

    <div v-for="(item, index) in numberarray">

        <h2>{{item}}{{index}}</h2>
        <div class="example">Vue{{ msg }}</div>
    </div>
</div>
</template>

<script>
// import Vue from "vue";
export default ({
    data() {
        return {
            numberarray: Array(1).fill("test"),
            msg: 'Hello world!'
        }
    }
})
</script>


