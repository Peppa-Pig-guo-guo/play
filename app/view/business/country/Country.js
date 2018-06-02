Ext.define('app.view.Country.Country', {
    extend: 'Ext.grid.Panel',
    xtype: 'Country',
    
    requires: [
        'Ext.Action',
        'app.store.Country.Country'
    ],

    title: 'Grid with Numbered Rows',
    width: 1500,
    height: 300,

    columnLines: true,
    store: {
    	type:'Country.Country'
    	
    },

    columns: [ {
        text: "ID",
        width: 120,
        sortable: true,
        dataIndex: 'id'
    }, {
        text: "国家中文",
        width: 120,
        sortable: true,
        dataIndex: 'zh_name'
    }, {
        text: "国家外文",
        width: 120,
        sortable: true,
        dataIndex: 'foreign_title'
    }, {
        text: "国家英文",
        width: 120,
        sortable: true,
        dataIndex: 'en_name'
    }, {
        text: "国家简码",
        width: 120,
        sortable: true,
        dataIndex: 'code'
    }, {
        text: "是否显示",
        width: 120,
        sortable: true,
        dataIndex: 'status'
    },{
        text: "创建人",
        width: 120,
        sortable: true,
        dataIndex: 'username'
    }, {
        text: "创建时间",
        width: 120,
        sortable: true,
        dataIndex: 'created_at'
    }]
});