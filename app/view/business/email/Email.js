Ext.define('app.view.business.email.Email', {
    extend: 'Ext.grid.Panel',
    xtype: 'view-email',
    requires: [
        'Ext.Action',
        'app.store.business.email.Email',
        'app.controller.business.email.EmailGridController',
    ],
    controller:'emailEmailGridController',
    title: 'Grid with Numbered Rows',
    width: 1500,
    height: 300,

    columnLines: true,
    store: {
    	type:'email'
    	
    },
    selModel: {
        type: 'checkboxmodel',
        checkOnly: true
    },
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
    columns: [ {
        text: "ID",
        width: 120,
        sortable: true,
        dataIndex: 'id'
    }, {
        text: "邮箱",
        width: 120,
        sortable: true,
        dataIndex: 'email'
    }, {
        text: "国家",
        width: 120,
        sortable: true,
        dataIndex: 'zh_name'
    }, {
        text: "排序",
        width: 120,
        sortable: true,
        dataIndex: 'sort'
    }, {
        text: "是否显示",
        width: 120,
        sortable: true,
        dataIndex: 'status'
    }, {
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