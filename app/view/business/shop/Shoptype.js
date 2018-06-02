Ext.define('app.view.business.shop.Shoptype', { 
    extend: 'Ext.grid.Panel',
    xtype: 'view-shoptype',
    reference: 'view-shoptype',
    requires: [
    'Ext.Action',
    'app.store.business.shop.Shoptype',
    'app.controller.business.shop.ShoptypeGridController',
    ],
    controller:'shopShoptypeGridController',
    store: {
        type: 'shoptype'
    },
    columnLines: true,
    selModel: {
        type: 'checkboxmodel',
        checkOnly: true
    },
    title: '',
    tbar: [{
        text      : '添加',
        iconCls   : 'icon-plus',
        handler   : 'onAdd'
    },{
        text      : '删除',
        iconCls   : 'icon-minus',
        handler   : 'onRemove'
    },{
        text      : '修改',
        iconCls   : 'icon-edit',
        handler   : 'showWindow'
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
        iconCls   : 'icon-search',
        handler   : 'onSearch'
    }],
    columns: [
        { text: '序号',     dataIndex: 'id' },
        { text: '分类名称',     dataIndex: 'type_name'},        
        { text: '排序',     dataIndex: 'type_order',      flex: 1 },
        { text: '添加时间',     dataIndex: 'created_at',      flex: 1 },
        { text: '修改时间',     dataIndex: 'updated_at',      flex: 1 },        
        { text: '操作人', dataIndex: 'createder_id', flex: 1 },
        { text: '状态', dataIndex: 'type_status', flex: 1 }
    ]
});