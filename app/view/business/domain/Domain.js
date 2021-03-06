Ext.define('app.view.business.domain.Domain', { 
    extend: 'Ext.grid.Panel',
    xtype: 'view-domain',
    reference: 'view-domain',
    requires: [
    'Ext.Action',
    'app.store.business.domain.Domain',
    'app.controller.business.domain.DomainGridController'
    ],
    controller:'domainDomainGridController',
    store: {
        type: 'domain'
    },
    columnLines: true,
    selModel: {
        type: 'checkboxmodel',
        checkOnly: true
    },
    title: '',
    tbar: [{
        text      : '添加',
        iconCls   : 'fa fa-plus',
        handler   : 'onAdd'
    },{
        text      : '删除',
        iconCls   : 'fa fa-minus',
        handler   : 'onRemove'
    },{
        text      : '修改',
        iconCls   : 'fa fa-edit',
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
        iconCls   : 'fa fa-search',
        handler   : 'onSearch'
    },{
        text      : '添加图片',
        iconCls   : 'fa fa-image',
        handler   : 'addPicture'
    },{
        text      : '上架资料',
        iconCls   : 'fa fa-product-hunt',
        handler   : 'addData'
    },{
        text      : '添加详情',
        iconCls   : 'fa fa-reorder',
        handler   : 'addDetail'
    }],
    columns: [
        { text: '序号',     dataIndex: 'id' },
        { text: '域名', dataIndex: 'type_name',       flex: 1 },
        { text: '排序',     dataIndex: 'type_order',      flex: 1 },
        { text: '创建时间', dataIndex: 'created_at', flex: 1 },
        { text: '修改时间', dataIndex: 'updated_at', flex: 1 },
        { text: '操作人', dataIndex: 'modifier_id', flex: 1 },
        { text: '状态', dataIndex: 'existence', flex: 1 }
    ]
});