Ext.define('app.view.business.shop.Shop', { 
    extend: 'Ext.grid.Panel',
    xtype: 'view-shop',
    reference: 'view-shop',
    requires: [
    'Ext.Action',
    'app.store.business.shop.Shop',
    'app.controller.business.shop.ShopGridController',
    ],
    controller:'shopShopGridController',
    store: {
        type: 'shop'
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
        { text: '产品编号',     dataIndex: 'spu'},
        { text: '中文名称', dataIndex: 'zh_title',       flex: 1 },
        { text: '英文名称', dataIndex: 'en_title',       flex: 1 },
        { text: '图片预览', dataIndex: 'image',       flex: 1 },
        { text: '域名', dataIndex: 'domain_id',       flex: 1 },
        { text: '产品分类', dataIndex: 'category_id',       flex: 1 },
        { text: '产品购入链接', dataIndex: 'goods_fr_url',       flex: 1 },
        { text: '价格', dataIndex: 'price',       flex: 1 },
        { text: '排序',     dataIndex: 'sortd',      flex: 1 },
        { text: '审核状态',     dataIndex: 'is_check',      flex: 1 },
        { text: '部门ID',     dataIndex: 'department_id',      flex: 1 },
        { text: '创建时间', dataIndex: 'created_at', flex: 1 },
        { text: '修改时间', dataIndex: 'updated_at', flex: 1 },
        { text: '创建人', dataIndex: 'createder_id', flex: 1 },
        { text: '修改人', dataIndex: 'updateder_id', flex: 1 }
    ]
});