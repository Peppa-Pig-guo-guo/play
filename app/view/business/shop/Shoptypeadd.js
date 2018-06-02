Ext.define('app.view.business.shop.Shoptypeadd', { 
    extend: 'Ext.window.Window',
    xtype: 'Shoptypeadd',
    required: ['app.controller.business.shop.ShoptypeGridController'],
    reference: 'Shoptypeadd',

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
            { allowBlank:false, fieldLabel: '类型名称', name: 'type_name', emptyText: '类型名称',},
            { allowBlank:false, fieldLabel: '排序', name: 'type_order', emptyText: '排序'},
            {
            xtype: 'radiogroup',
            layout: {
                autoFlex: false
            },
            defaults: {
                name: 'ccType',
                margin: '0 15 0 0'
            },
            items: [{
	            xtype: 'radiogroup',
	            layout: {
	                autoFlex: false
	            },
	            fieldLabel: '状态', 
	            defaults: {
	                name: 'ccType',
	                margin: '0 15 0 0'
	            },
	            items: [{
	                boxLabel: '开启',
	                inputValue: '1',
	                checked: true
	            }, {
	                boxLabel: '关闭',
	                inputValue: '0'
	            }, ]
            },
            {
		        xtype      : 'button',
		        text       : '提交',
		        handler    : 'onedit',
		    },{
		        xtype      : 'button',
		        text       : '关闭',
		        handler    : function(){this.up().up().up().hide();}
		    }
            ]
        },      
        ],

    }]

});