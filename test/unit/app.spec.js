// 引用vue
import Vue from 'vue';

// 引用要测试的组件
import app from '../../src/App.vue';

// 描述要测试的内容
describe('test app.vue', () => {

    // 描述要测试的最小单元
    it('设置message为『你好世界』', () => {

        // 这里将app生成vue实例，并使用 $mount() 模拟挂载状态
        let vm = new Vue(app).$mount();

        // 执行setMessage方法
        vm.setMessage('你好世界');

        // 断言组件的message是否变为了'你好世界'
        expect(vm.message).toEqual('你好世界');
    });
});