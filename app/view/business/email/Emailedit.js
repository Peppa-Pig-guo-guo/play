Ext.define('app.view.business.email.Emailedit', {
    extend:'Ext.window.Window',
    reference: 'emailedit',
    title: 'Login',
    frame:true,
    width: 320,
    bodyPadding: 10,
     
   
    defaultType: 'textfield',
    items: [{
        allowBlank: false,
        fieldLabel: '邮箱',
        name: 'user',
        emptyText: 'email',
        inputType: 'text'
    },{
            xtype: 'combobox',
            fieldLabel: '国家',
            name: 'country_id',
            store : new Ext.data.Store({
                    autoLoad : true,
                    fields : [ "id", "zh_name" ],
                    proxy : {
                        type : 'ajax',
                        url : 'email/country',
                        reader : {
                            type : 'json',
                            rootProperty : 'data'
                        }
                    }
                }),
            valueField: 'id',
            displayField: 'zh_name',
            typeAhead: true,
            queryMode: 'local',
            emptyText: '--请选择--'
        },{
        allowBlank: false,
        fieldLabel: '排序',
        name: 'pass',
        emptyText: 'sort',
        inputType: 'text'
    },{
        xtype      : 'button',
        text       : '提交',
        handler    : 'onedit'
    },{
        xtype      : 'button',
        text       : '关闭',
        handler    : 'onFormCancel'
    }]
});