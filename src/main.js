//引入vue
import Vue from "vue";
//引入页面vue
import App from "./app.vue";
//vue实例                       
new Vue({
    el:'#app',
    render: h => h(App)
});