<template>
    <div>
        <div class="header">
            <app-header></app-header>
        </div>
        <div class="content">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import AppHeader from './AppHeader'
    import routes from '../router'

    export default {
        name: "home",
        routes,
        components: {
           appHeader: AppHeader
        },
        data: function() {
            return {
                
            }
        },
        methods: {
            
        }
    }
</script>

<style scoped>

</style>