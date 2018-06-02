Ext.define('app.view.business.shop.Shopcode', {
    extend: 'Ext.grid.Panel',
    xtype: 'view-shopcode',
    reference: 'view-shopcode',
    requires: [
        'Ext.Action',
        'app.store.business.shop.Shopcode',
        'app.controller.business.shop.ShopcodeGridController',
        'app.view.business.shop.form',
    ],
    controller:'shopShopcodeGrid',
    viewConfig: {
        listeners: {

        }
    },
    allowDeselect: true,
    title: '',
    store: {
        type: 'shopcode'
    },
    columnLines: true,
    selModel: {
        type: 'checkboxmodel',
        checkOnly: true
    },

    viewConfig: {
        trackOver: false,
        stripeRows: false
    },
    height: 500,


    tbar: [{
        text      : '添加',
        iconCls   : 'fa fa-plus',
        handler   : 'showAddWindow'
    },{
        text      : '删除',
        iconCls   : 'fa fa-minus',
        handler   : 'onRemove'
    },{
        text      : '修改',
        iconCls   : 'fa fa-edit',
        handler   : 'showEditWindow'
    },{
        xtype     : 'textfield',
        name      : 'contents',
        emptyText : '请输入查询内容'
    },{
        xtype     : 'datefield',
        fieldLabel: '',
        format    : 'Y/m/d',
        emptyText : '开始时间',
        name      : 'start'
    },{
        xtype     : 'datefield',
        fieldLabel: '',
        format    : 'Y/m/d',
        emptyText : '结束时间',
        name      : 'end'
    },{
        text      : '查询',
        iconCls   : 'fa fa-search',
        handler   : 'onSearch'
    }],
    columns: [
        { text: 'ID',     dataIndex: 'id' },
        { text: '编码名称',     dataIndex: 'name'},
        { text: '编码', dataIndex: 'code',       flex: 1 },
        { text: '父级类别',     dataIndex: 'pid',      flex: 1 },
        { text: '添加时间', dataIndex: 'created_at', flex: 1 },
        { text: '添加人', dataIndex: 'modifier_id', flex: 1 }
    ],

    bbar: {
        xtype: 'pagingtoolbar',
        displayInfo: true,
        store:{type:'shoptype'},
        displayMsg: 'Displaying topics {0} - {1} of {2}',
        emptyMsg: "No topics to display"
    }
});
