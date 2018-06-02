/*
**要使用GridPanel，首先要定义Store，而在创建Store的时候必须要有Model，因此我们首先来定义Model：
*/
Ext.define('app.store.business.shop.Shoptype', {
    extend   : 'Ext.data.Store',
    alias    : 'store.shoptype',
    model    : 'app.model.business.shop.Shoptype',
    autoLoad : true,
    proxy    : {
        type   : 'ajax',
        url    : Myapp.host + 'shoptype/index',
        reader : {
            type: 'json',
            rootProperty: 'data',
            implicitIncludes: false
        }
    }
});