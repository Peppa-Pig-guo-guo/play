/*
**要使用GridPanel，首先要定义Store，而在创建Store的时候必须要有Model，因此我们首先来定义Model：
*/
Ext.define('app.store.platform.system.Menu', {
    extend   : 'Ext.data.Store',
    alias    : 'store.menu',
    model    : 'app.model.platform.system.Menu',
    autoLoad : true,
    pageSize : 10,
    proxy    : {
        type   : 'ajax',
        url    : Myapp.host + 'menu/list/2',
        reader : {
            type: 'json',
            rootProperty: 'data',
            totalProperty: 'totalCount',
            implicitIncludes: false
        }
    }
});