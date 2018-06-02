Ext.define('app.controller.platform.system.MenuController', {
    extend: 'Ext.app.ViewController',
    alias:'controller.menu',
    requires:['app.view.platform.system.Menuform'],
    init:function(){this.grid=this.getView();},

    getGridSelectData:function(){
        var view=this.grid,
            selecteds=view.getSelectionModel().getSelection();

        if(selecteds.length==0){
            EU.toastWarn("请选择一条数据！");
            return null;
        }
        return selecteds;
    },

    getWindow:function(){
        var win=this.lookupReference('menuwindow');
        if(!win)win=new app.view.platform.system.Menuform();
        return win;
    },

    getForm: function () {
        var win = this.getWindow();
        var form = win.lookupReference('formmodule')
        return form;
    },

    onadd:function(){
        var win=this.getWindow();
        win.title='添加模块';
        win.show();
    },

    onedit:function(){

    	var me=this,
            win,
            select=this.getGridSelectData(),
            rec,
            id,
            res;
        if(select == null)return;
        if(select.length>1){EU.toastWarn('只能选择一条进行编辑！');return}
        else{
            rec= select[0].data.text;
            id= select[0].data.id;
            win=me.getWindow();
            win.title='修改模块名称';
            win.getViewModel().set('id', id);
            win.getViewModel().set('text', rec);
            win.show();
        }
    },

    onsubmit:function(rec){

        var me=this,
            id,
            text,
            form=me.getForm(),
            grid=me.grid;

            console.log(grid);
/*
            id=rec.idd;
            text=rec.modulename;

            Ext.Ajax.request({
                url: Myapp.host+'menu/rename',
                params:{id,text},
                success:function(response){
                    var data=Ext.util.JSON.decode(response.responseText);
                    if(-1 != data.success){
                        grid.getStore().load();
                        this.onFormCancel();
                    } 
                    else Ext.Msg.alert('tip:',data.msg);
                }
            });
        */
        // var rec,config={}||null;
        // rec=mn.getValue();
        // config.url='menu/rename';
        // config.params={'id':id,'text':rec};
        // res = EU.AJAX(config);
        // if(res) console.log('rname is ok');
    },

    onFormCancel:function(){
        this.lookupReference('formmodule').up().destroy();
    },


    renderLevel:function(value){return (value==0)?'一级':'二级';},
    init:function(){this.grid=this.getView();},
 });
