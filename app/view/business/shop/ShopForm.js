Ext.define('app.view.business.shop.ShopForm', { 
    extend: 'Ext.window.Window',
    xtype: 'shopform',

    reference: 'ShopForm',

    frame: true,
    title: '',
    bodyPadding: 0,
    border:false,
    scrollable:true,
    width: 550,
    style:'border-width:0 0 0 0;',
    autoHeigth:true,

    fieldDefaults: {
        labelAlign: 'right',
        labelWidth: 115,
        msgTarget: 'side'
    },

    items: [{
        xtype: 'fieldset',
        title: '商品描述',
        defaultType: 'textfield',
        defaults: {
            anchor: '100%'
        },

        items: [
            { allowBlank:false, fieldLabel: 'SPU', name: 'user', emptyText: 'SPU',},
            { allowBlank:false, fieldLabel: '商品名称', name: 'shopname', emptyText: '商品名称'},
            { allowBlank:false, fieldLabel: '所属分类', name: 'category', emptyText: '所属分类'}
        ]
    }, {
        xtype: 'fieldset',
        title: '商品详情',

        defaultType: 'textfield',
        defaults: {
            anchor: '100%'
        },

        items: [{
            fieldLabel: '商品名称',
            emptyText: '商品名称',
            name: 'first'
        }, {
            fieldLabel: '商品规格',
            emptyText: '商品规格',
            name: 'last'
        }, {
            fieldLabel: '商品属性',
            name: 'company'
        }, {
            fieldLabel: '其他信息',
            name: 'email',
            vtype: 'email'
        }, {
            xtype: 'combobox',
            fieldLabel: '产品分类',
            name: 'shoptype',
            store : new Ext.data.Store({
                    autoLoad : true,
                    fields : [ "id", "type_name" ],
                    proxy : {
                        type : 'ajax',
                        url : 'shoptype/index',
                        reader : {
                            type : 'json',
                            rootProperty : 'data'
                        }
                    }
                }),
            valueField: 'type_name',
            displayField: 'type_name',
            typeAhead: true,
            queryMode: 'shop',
            emptyText: '请选择产品分类'
        }, {
            xtype: 'datefield',
            fieldLabel: 'Date of Birth',
            name: 'dob',
            allowBlank: false,
            maxValue: new Date()
        }]
    }]
});