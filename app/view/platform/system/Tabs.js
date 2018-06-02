Ext.define('app.view.platform.system.Tabs', {
    extend: 'Ext.tab.Panel',
    xtype: 'view-tabs',
    reference:'view-tabs',
    deferredRender:false,
    layout: 'fit',
    viewModel: true,
    requires:[
        'app.view.platform.system.Menu',
        'app.view.business.shop.Shop',
        'app.view.business.shop.Shoptype',
        'app.view.business.shop.Review',
        'app.view.business.domain.Domain',
        'app.view.business.email.Email'
        //'app.view.business.country.Country'
    ],
    tabBar: {
        items: [{
            xtype: 'tbfill'
        },{
            xtype:'button',
            text:'我的任务',
            iconCls:'fa fa-car',
            handler:'onstack'
        },{
            xtype:'button',
            text:'今日销量',
            iconCls:'fa fa-bar-chart',
            handler:'onDaysale'
        },{
            xtype:'button',
            text:'注销锁屏',
            iconCls:'fa fa-lock',
            handler:'onClickButton'
        }]
    },

    items: [{
        title:'主页',
        iconCls:'fa fa-home',
        html:'<h1>Welcome !</h1>'
    }],
    listeners:{
        // tabchange:'onTabChange', 在viewController设置一个全局变量，当切换的时候 给这个变量赋值
        buffer:300
    }
});