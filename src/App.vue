<template>
    <div id="app">
        <div id="nav">
            <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link>
        </div>
        <router-view />
    </div>
</template>

<style lang="scss">
body {
    background-color: #343a40;
    color: fff;

    a {
        color: inherit;
        text-decoration: none;

        &:active,
        &:visited {
            color: inherit;
        }
    }
}

#app {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    color: #788694;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    text-align: center;
}

#nav {
    padding: 30px;

    a {
        color: #788694;
        font-weight: bold;

        &.router-link-exact-active {
            color: #42b983;
        }
    }
}
</style>
