Ext.define('app.view.platform.system.Menuform', {
	extend:'Ext.window.Window',
    controller: 'menu',
    reference:'menuwindow',
    xtype: 'menuwindow',
    title   : '模块资料',
    layout  : 'hbox',
    width   : 420,
    height  : 160,
    padding : '30 0 10 0',
    anchor  : '100%',
    defaults: {
        margins : '0 0 0 10'
    },
    viewModel: {
        data: {
            id: '',
            text: ''
        }
    },
    items   : [{ 
        xtype: 'form',
        scope:this,
        reference  : 'formmodule', 
        style:'border-width:0 0 0 0;',
        //frame: true,
        title: '',
        layout: 'hbox',


        items:[{
            xtype: 'textfield',
            name: 'modulename',
            fieldLabel : '模块名称',
            labelAlign : 'right',
            style      : 'position:relative;top:2px;',
            bind       : {value:'{text}'}
        },{
            xtype: 'hiddenfield',
            name: 'idd',
            allowBlank: false,
            bind: {value:'{id}'}
        },{
            xtype:'button',
            text:'提交',
            handler: function(){
                var me = this;
                var form = me.up('form');
                if (!form.isValid()) return false;
                var mv = form.getValues();
                var ajax = new app.controller.platform.system.MenuController();
                ajax.onsubmit(mv);
            }
        },{
            xtype:'button',
            text:'关闭',
            handler:'onFormCancel'
        }]
    }]
});