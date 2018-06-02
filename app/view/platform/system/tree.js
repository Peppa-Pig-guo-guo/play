Ext.define('app.view.platform.system.Tree', {
    extend       : 'Ext.tree.Panel',
    xtype        : 'view-tree',
    reference    : 'view-tree',
    title        : '恒泰德',
    width        : 230,
    collapsible  : true,
    useArrows    : true,
    singleExpand : true,
    rootVisible  : true,

    store: {
        type : 'tree',
        proxy: {
            type : 'ajax',
            url  : Myapp.host + 'menu/list/1',
            rootProperty: 'data'
        },
        root: {
            text     : '恒泰德电子商务',
            id       : 'src',
            expanded : true,
            iconCls  : 'x-fa fa-home'
        }
    },

    viewConfig: {
        plugins: {
            treeviewdragdrop: {
                containerScroll: true
            }
        }
    },

    listeners: {
        itemclick: 'addTab'
    }

});