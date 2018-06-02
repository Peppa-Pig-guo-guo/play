Ext.define('app.view.platform.system.login', {
    extend: 'Ext.window.Window',
    xtype: 'login',
    draggable: false,

    requires: [
        'Ext.form.Panel',
        'app.controller.platform.system.loginController'
    ],

    controller:'login',

    bodyPadding: 10,
    title:'用户登录',

    closable:false,
    autoShow:true,

    items: {
        xtype:'form',
        reference: 'form',
        items: [{
            xtype:'textfield',
            name: 'username',
            fieldLabel: '用户名',
            allowBlank: false
        },{
            xtype:'textfield',
            name: 'password',
            fieldLabel: '密码',
            allowBlank: false
        }],
        buttons: [{
            text:'登录',
            formBind: true,
            listeners:{
                click: 'onLoginClick'
            }
        }]
    }
});
