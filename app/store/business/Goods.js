Ext.define('app.store.Personnel', {
    extend: 'Ext.data.Store',

    alias: 'store.goods',

    model: 'app.model.Goods',

    proxy: {
        type: 'ajax',
        reader: {
            type: 'json'
        },
        url: '/admin/goods'
    },
});
