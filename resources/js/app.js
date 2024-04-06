require('./bootstrap');


import { createApp } from 'vue';
import { BootstrapIconsPlugin } from 'bootstrap-icons-vue';

import ViewUIPlus from 'view-ui-plus';
import 'view-ui-plus/dist/styles/viewuiplus.css';

import common from './common.js'

import router from './router';
import mainapp from './components/mainapp.vue';
import store from './store';







const app = createApp({
    components: {
        mainapp,
    }
})

app.use(ViewUIPlus)
.mixin(common)
.use(BootstrapIconsPlugin)
.use(router)
.use(store)
.mount('#app')