Ext.namespace('htd');

Ext.define('app.store.Country.Country', {
    extend: 'Ext.data.Store',
    alias: 'store.Country.Country',
    model: 'app.model.Country.Country',

    autoLoad: true,
    pageSize: null,

    proxy: {
        type : 'ajax',
        url :  Myapp.host + 'country',

        reader: {
            type: 'json',
            rootProperty: 'data',
            implicitIncludes: false
        }
    }
});