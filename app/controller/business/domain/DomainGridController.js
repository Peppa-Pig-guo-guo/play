Ext.define('app.controller.business.domain.DomainGridController', {
    extend: 'Ext.app.ViewController',
    alias:'controller.domainDomainGridController',
    requires:['app.view.business.domain.Domainform'],
    
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
    
    onConfirm : function (choice) {
        var me   = this,
            grid = me.grid,
            rec  = me.getGridSelectData(),
            ids  = '',
            params = '';
        if(rec == null) return;console.log('rec');
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
        if (choice === 'yes') {
            Ext.Ajax.request({
                url       : Myapp.host + "domain/del",
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

    //edit menu
    showEditWindow: function() {
        console.log('edit domain');
    },

    
    //add menu
    showAddWindow: function() {
        console.log('add domain');
    },





    onFormCancel:function(){
        // this.lookupReference('menuwindow').hide();
        this.lookupReference('menuwindow').destroy();
        // this.getView().destroy();
    },

    onedit:function(){
        console.log('oneedit')
    },

    renderLevel:function(value){return (value==0)?'一级':'二级';},

    init:function(){this.grid=this.getView();},

    onAdd:function(){this.showWindow();}

    // validateField:function(field){field.next().validate();}


 });
