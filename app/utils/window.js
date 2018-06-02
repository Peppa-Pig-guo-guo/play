Ext.define('app.utils.window',{
    extend: 'Ext.window.Window',
    xtype: 'basic-window',
    reference:'basic-window',

    width:800,
    height: 750,
    autoHeigth:true,
    title: '',
    border:false,
    scrollable: true,
    bodyPadding: 10,
    constrain: true,
    closable: false,
    labelAlign : 'left',
    items   : [{
        xtype      : 'button',
        text       : '提交',
        handler    : 'onedit'
    },{
        xtype      : 'button',
        text       : '关闭',
        handler    : function(){this.up().hide();}
    }]

});