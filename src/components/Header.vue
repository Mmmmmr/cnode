<template>
    <div>
        <img src="../assets/cnodejs_light.svg" alt="">
        <ul>
            <li><a href="#">首页</a></li>
            <li><a href="#">新手入门</a></li>
            <li><a href="#">API</a></li>
            <li><a href="#">关于</a></li>
            <li><a href="#">注册</a></li>
            <li><a href="#">登录</a></li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
div {
    background-color: #333;
    height: 50px;
}
img {
    max-width: 120px;
    margin-left: 10px;
    margin-top: 10px;
}
ul {
    float: right;
    margin-top: 10px;
    list-style: none;
}
li {
    display: inline-block;
}
a {
    text-decoration: none;
    color: #ccc;
    margin: 10px 15px;
    font-size: 14px;
}
</style>
