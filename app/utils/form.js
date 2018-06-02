Ext.define('app.utils.form',{
    extend: 'Ext.form.Panel',
    xtype: 'basic-form',

    title: 'Login',
    frame:true,
    width: 320,
    bodyPadding: 10,

    defaultType: 'textfield',

    items: [{
        allowBlank: false,
        fieldLabel: 'User ID',
        name: 'user',
        emptyText: 'user id',
        msgTarget: 'under'
    }, {
        allowBlank: false,
        fieldLabel: 'Password',
        name: 'pass',
        emptyText: 'password',
        inputType: 'password'
    }, {
        xtype:'checkbox',
        fieldLabel: 'Remember me',
        name: 'remember'
    }],

    buttons: [
        { text:'Register' },
        { text:'Login' }
    ],

    defaults: {
        anchor: '100%',
        labelWidth: 120
    }
});