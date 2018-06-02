Ext.define('app.controller.business.email.EmailGridController', {
    extend: 'Ext.app.ViewController',
    alias:'controller.emailEmailGridController',
    requires: [
    'app.view.business.email.Emailadd',
    'app.view.business.email.Emailedit'
    ],
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
        var tree = this.lookupReference('view-tree');
        console.log(params);

        if (choice === 'yes') {
            Ext.Ajax.request({
                url       : Myapp.host + "email/del",
                method    : 'post',
                params    : {item : params},
                success   : function(response){
                    var data = Ext.util.JSON.decode(response.responseText);
                    if(data.success){
                        grid.getStore().remove(rec);
                        Ext.Msg.alert('tip:',data.msg);
                    }else{
                        Ext.Msg.alert('tip:',data.msg);
                    }
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
                var win = me.lookupReference('emailedit');
                if (!win) {
                    win = new app.view.business.email.Emailedit();
                    me.getView().add(win);
                }
                win.show();
            }
        }
    },

    onFormCancel: function() {

        // this.lookupReference('windowForm').getForm().reset();
        this.lookupReference('emailadd').hide();
    },

    onEdit : function(){
        var me=this,id,text,data,selected;console.log(me)
        
        selected=this.getGridSelectData();
        var grid = me.grid;
        id=selected[0].data.id;
                
    },
    // render module data
    renderLevel:function(value){
        if(value == 0) return '一级模块';
        else return '二级模块';
    },
    init:function(){
        this.grid = this.getView();
    },

    onAdd:function(){
        var me=this;
        var win=me.lookupReference('emailadd');
        win = new app.view.business.email.Emailadd();
        win.title = '添加邮箱：';
        me.getView().add(win);
        win.show();

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
        var me=this;
        var rel=me.lookupReference('emailadd');
        var sul =rel.getValue();
        var view = this.grid;
        var selecteds = view.getSelectionModel().getSelection();
            //text=rename.getValue();

        

       /* Ext.Ajax.request({
            url       : Myapp.host + "email/add",
            method    : 'post',
            params    : {item : params},
            success   : function(response){
                if(data.success){
                    Ext.Msg.alert('tip:',data.msg);
                    console.log(this.tree);
                }else{
                    Ext.Msg.alert('tip:',data.msg);
                }
            }
        });*/      
    },
});
