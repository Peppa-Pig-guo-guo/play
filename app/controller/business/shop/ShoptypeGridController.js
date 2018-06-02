Ext.define('app.controller.business.shop.ShoptypeGridController', {
    extend: 'Ext.app.ViewController',
    alias:'controller.shopShoptypeGridController',

    requires:['app.view.business.shop.Shoptypeadd'],

    getGridSelectData:function(){
        var view = this.grid;
        var selecteds = view.getSelectionModel().getSelection();        
        if(selecteds.length==0){EU.toastWarn("请选择一条数据！");return null;}
        return selecteds;
    },
    onRemove : function(){
        var params = '',
            grid = this.grid,
            rec = this.getGridSelectData();
        if(rec == null) return;
        Ext.Msg.confirm('提示：', '你确定要删除这'+rec.length+'条数据吗 ?', 'onConfirm', this);
    },
    onConfirm : function (choice) {
        var me   = this,
            grid = me.grid,
            rec  = me.getGridSelectData(),
            ids  = '',
            params = '';
        if(rec == null) return;
        if(rec.length == 1) params = rec[0].id;
        else{
            for(var i = 0; i < rec.length; i++){
                ids = rec[i].id;
                params += ids + ',';
            }
        }
        
        var text = rec.text;
        var id = rec.id;
        var tree = this.lookupReference('view-tree');console.log(params)
        if (choice === 'yes') {
            Ext.Ajax.request({
                url       : Myapp.host + "shoptype/remove",
                method    : 'post',
                params    : {item : params},
                success   : function(response){
                    var data = Ext.util.JSON.decode(response.responseText);
                    if(data.success){
                        grid.getStore().remove(rec);

                        // tree.getView().getStore().reload();
                        console.log(this.tree);
                    }else{
                        Ext.Msg.alert('tip:',data.msg);
                        console.log(data);
                    }
                },
                failure: function(response) { 
                    var data = response.statusText;
                    Ext.Msg.alert('tip:',data);
                    console.log('fail');
                    console.log(response);
                      } 
            })
        }
    },

    showWindow: function() {
        var me = this;
        var module_name,text,data;
        module_name = this.getGridSelectData();
        if(module_name == null) return;
        else {
            if(module_name.length > 1){
                EU.toastWarn('只能选择一条进行记录编辑！');
                return;
            }else{
                var me = this;
                var win = me.lookupReference('menuwindow');
                if (!win) {
                    win = new app.view.business.shop.ShopForm();
                    me.getView().add(win);
                }
                win.show();
            }
        }
    },
    
    onFormCancel: function() {
        // this.lookupReference('windowForm').getForm().reset();
        this.lookupReference('menuwindow').hide();
    },
/*    onEdit : function(){
        var me=this,id,text,data,selected;console.log(me)
        
        selected=this.getGridSelectData();
        var grid = me.grid;
        id=selected[0].data.id;
                
    },*/
    // render module data
    renderLevel:function(value){
        if(value == 0) return '一级模块';
        else return '二级模块';
    },
    init:function(){
        this.grid = this.getView();
    },

    onAdd:function(){
        var me = this;
        var win = me.lookupReference('Shoptypeadd');
        win = new app.view.business.shop.Shoptypeadd();
        win.title = '添加产品分类';
        me.getView().add(win);
        
        win.show();



        // var shopform = new app.view.business.shop.ShopForm();
        // me.getView().add(shopform);
        // shopform.show();
        // console.log(shopform);
    },

    //查询 
    onSearch:function(){
        console.log('onSearch');
    },

    //添加图片 
    addPicture:function(){
        console.log('addPicture');
    },

    //上架资料 
    addData:function(){
        console.log('addData');
    },

    //添加详情
    addDetail:function(){
        console.log('addDetail');
    },

    //添加产品
    onedit:function(){
        console.log('123');
       /* Ext.Ajax.request({
            url       : Myapp.host + "shop/add",
            method    : 'post',
            params    : {item : params},
            success   : function(response){
                var data = Ext.util.JSON.decode(response.responseText);
                if(data.success){
                    grid.getStore().remove(rec);

                    // tree.getView().getStore().reload();
                    console.log(this.tree);
                }else{
                    Ext.Msg.alert('tip:',data.msg);
                }
            }
        });  */    
    },
});
