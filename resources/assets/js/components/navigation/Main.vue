<template>
    <nav class="navbar navbar-light bg-faded nav-margin">
        <a class="navbar-brand" href="#">
            <img src="https://avatars1.githubusercontent.com/u/13013698?v=3&s=200"
            width="30" height="30" class="d-inline-block align-top" alt="">
            RefahiAPI
        </a>
        <div class="nav navbar-nav">
            <slot>
            </slot>
        </div>
    </nav>
</template>

<style scoped>
.nav-margin {
    margin-bottom: 10px;
}
</style>
