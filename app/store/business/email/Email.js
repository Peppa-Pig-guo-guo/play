Ext.namespace('htd');

Ext.define('app.store.business.email.Email', {
    extend: 'Ext.data.Store',
    alias: 'store.email',
    model: 'app.model.business.email.Email',

    autoLoad: true,
    pageSize: null,

    proxy: {
        type : 'ajax',
        url :  Myapp.host + 'email',

        reader: {
            type: 'json',
            rootProperty: 'data',
            implicitIncludes: false
        }
    }
});