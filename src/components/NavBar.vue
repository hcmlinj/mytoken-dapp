<template>
    <nav class="navbar navbar-default navbar-fixed-top">
        <div class="container-fluid">
            <div class="navbar-header">
                <router-link class="navbar-brand" exact to="/">My Token DApp</router-link>
            </div>
            <div class="container">
                <router-link class="btn btn-default btn-lg" exact to="/info">Info</router-link>
                <router-link class="btn btn-default btn-lg" exact to="/token-factory">TokenFactory</router-link>
                <router-link class="btn btn-default btn-lg" to="/my-token">MyToken</router-link>
            </div>
        </div>
    </nav>
</template>