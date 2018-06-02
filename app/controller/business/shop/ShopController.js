Ext.define('app.controller.platform.system.MainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.main',
    //factory tab items
    addTab:function(node,event){
        if(event.data.leaf == true){
            var text     = event.data.text;
            var id       = event.data.id;
            var tabPanel =  this.lookupReference('view-tabs');
            tab  = Ext.create({
            	xtype     : 'panel',
                title     : text,
                iconCls   : 'icon-qrcode',
                closable  : true,
                handle    : '',

            });
            tabPanel.add([tab]);
       		tabPanel.setActiveItem(tab);
        }
    },

});
