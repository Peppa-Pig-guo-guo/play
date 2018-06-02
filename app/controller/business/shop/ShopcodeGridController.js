Ext.define('app.controller.business.shop.ShopcodeGridController', {
    extend: 'Ext.app.ViewController',
    alias:'controller.shopShopcodeGrid',

    getGridSelectData:function(){
        var view=this.grid,
            selecteds=view.getSelectionModel().getSelection();

        if(selecteds.length==0){
            EU.toastWarn("请选择一条数据！");
            return null;
        }
        return selecteds;
    },

    onRemove:function(){
        var params,grid = this.getView(),
            rec=this.getGridSelectData();

        if(rec==null)return;
        Ext.Msg.confirm('提示：','你确定要删除这 '+rec.length+' 条数据吗 ?','onConfirm',this);
    },
    
    onConfirm:function (choice) {
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
                url       : Myapp.host + "shopcode/remove",
                method    : 'post',
                params    : {item : params},
                success   : function(response){
                    var data=Ext.util.JSON.decode(response.responseText);
                    if(-1!=data.success) grid.getStore().remove(rec);
                    else Ext.Msg.alert('tip:',data.msg);
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

    //edit menu
    showEditWindow: function() {
        var me=this,
            module_name=me.getGridSelectData();

        if(module_name == null) return;
        else {
            if(module_name.length>1)
            {
                EU.toastWarn('只能选择一条进行记录编辑！');
                return;
            }else{
                var win=me.lookupReference('menuwindow');

                if(!win) 
                {
                    win = new app.view.platform.system.Menuform();
                    win.title = '修改模块：'
                    var mn = win.getComponent('modulename');
                    mn.setValue(module_name[0].data.text);
                    me.getView().add(win);
                }

                win.show();
            }
        }
    },

    
    //add menu
    showAddWindow: function() {
        var me=this;
        // var win=me.lookupReference('Shopcodeadd');
        // if(!win) 
        // {
            win = new app.view.business.shop.form();
            // win.title='添加编码：';
            // me.getView().add(win);
        // }
        win.show();
        
    },





    onFormCancel:function(){
        // this.lookupReference('menuwindow').hide();
        this.lookupReference('menuwindow').destroy();
        // this.getView().destroy();
    },

    onedit:function(){

        var me=this,
            data,
            selected=me.getGridSelectData(),
            grid=me.grid,id=selected[0].data.id,
            rename =me.lookupReference('modulename'),
            text=rename.getValue();

        Ext.Ajax.request({
            url: Myapp.host+'menu/rename',
            method:'post',
            params:{id:id,text:text}, 
            success:function(response){
                var data=Ext.util.JSON.decode(response.responseText);

                if(data.success){
                    me.onFormCancel();
                    grid.store.load();
                }
                else  Ext.Msg.alert('tip:',data.msg);
            }
        });

    },

    renderLevel:function(value){return (value==0)?'一级':'二级';},

    init:function(){this.grid=this.getView();},

    // onAdd:function(){
    // 	var codeform=new app.view.business.shop.form();
    // 	codeform.show();
    	
    // }

    // validateField:function(field){field.next().validate();}


 });
