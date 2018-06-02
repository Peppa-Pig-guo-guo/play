Ext.define('app.view.platform.system.Menu', {
    extend: 'Ext.grid.Panel',
    xtype: 'view-menu',
    reference: 'view-menu',
    requires: [
        'Ext.Action',
        'app.store.platform.system.Menu',
        'app.controller.platform.system.MenuController',
    ],
    controller:'menu',
    allowDeselect: true,
    title: '',
    store: {type: 'menu'},
    columnLines: true,
    selModel: {type: 'checkboxmodel',checkOnly: true},
    tbar: [
        {text:'添加',iconCls:'fa fa-plus', handler: 'onadd'},
        '-',
        {text:'删除',iconCls:'fa fa-minus',handler: 'onRemove'},
        '-',
        {text:'修改',iconCls:'fa fa-edit',handler: 'onedit'},
        '->',
        {xtype:'textfield',name: 'contents',emptyText : '请输入查询内容'},
        {xtype:'datefield',fieldLabel:'',format: 'Y/m/d',emptyText:'开始时间',},
        {xtype:'datefield',fieldLabel:'',format: 'Y/m/d',emptyText:'结束时间',name: 'end'},
        {text:'查询',iconCls:'fa fa-search',handler:'onSearch'}],
    columns: [
        { text: '序号',     dataIndex: 'id' },
        { text: '级别',     dataIndex: 'pid', renderer: 'renderLevel'},
        { text: '模块名称', dataIndex: 'text',       flex: 1 },
        { text: '排序',     dataIndex: 'sortd',      flex: 1 },
        { text: '创建时间', dataIndex: 'created_at', flex: 1 },
        { text: '修改时间', dataIndex: 'updated_at', flex: 1 }
    ],
    bbar: {
        xtype: 'pagingtoolbar',
        displayInfo: true,
        store:{type:'menu'},
        displayMsg: 'Displaying topics {0} - {1} of {2}',
        emptyMsg: "No topics to display"
    }
});
