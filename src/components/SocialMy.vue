<template>
    <div class="fixed-bottom d-flex justify-content-between p-4">
        <div class="social-links">
            <a href="//codepen.io/renatosoares" target="_blank">codepen&nbsp;</a>
            <a href="//codesandbox.io/u/renatosoares" target="_blank">codesandbox&nbsp;</a>
            <a href="//github.com/renatosoares" target="_blank">github&nbsp;</a>
            <a href="//hub.docker.com/u/renatosoarespro/starred" target="_blank">docker&nbsp;</a>
            <a href="//jsfiddle.net/user/renatosoarespro" target="_blank">jsfiddle&nbsp;</a>
            <a href="//linkedin.com/in/renatosoarespro" target="_blank">linkedin&nbsp;</a>
            <a href="//repl.it/@renatosoarespro" target="_blank">repl&nbsp;</a>
            <a href="//twitter.com/renatosoarespro" target="_blank">twitter&nbsp;</a>
        </div>
        <div>
            <h1>Systems Developer</h1>
            <span>Renato Soares </span><i class="fas fa-coffee"></i>
            <i class="fas fa-desktop"></i> $_
        </div>
    </div>
</template>

<script lang="ts" src="./SocialMy.vue.ts"></script>

<style lang="scss" scoped>
.social-links {
    word-break: break-all;
    word-spacing: 5px;

    a {
        &:hover {
            color: rgb(86, 111, 131);
        }
    }
}
</style>
