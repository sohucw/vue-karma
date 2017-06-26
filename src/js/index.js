/**
 * @file
 * @author cjw
 * Created by cjw on 17/6/26.
 */

import Vue from 'vue';

import app from '../app.vue';

new Vue({
    el: '#app',
    render(h) {
        return h(app);
    }
});