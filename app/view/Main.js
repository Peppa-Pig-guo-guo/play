Ext.define('app.view.Main', {
    extend   : 'Ext.panel.Panel',
    xtype    : 'app-main',
    requires : [
        'Ext.layout.container.Border',
        'app.controller.platform.system.MainController',
        'app.model.platform.system.MainModel',
        'app.view.platform.system.Tree',
        'app.view.platform.system.Tabs',
    ],
    initComponent:function(){
        Ext.setGlyphFontFamily('FontAwesome'); //glyph图标字体设置
        this.callParent();
    },
    plugins: 'viewport', //添加插件 login 2018-5-29
    controller : 'main',
    viewModel  : 'main',
    layout     : 'border',
    bodyBorder : false,
    defaults   : {
        collapsible : true,
        split       : true,
        bodyPadding : 0
    },
    items: [
        {
            title     : '',
            region    : 'west',
            floatable : false,
            xtype     : 'view-tree'
        },{
            title       : '',
            collapsible : false,
            region      : 'center',
          
            items:[
                {
                    xtype:'view-tabs'
                }
            ]
        }
    ]

});