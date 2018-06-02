Ext.define('app.controller.platform.system.MainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.main',

    //factory tab items.add(subitems)
    addTab:function(node,event){
        var tabPanel=this.lookupReference('view-tabs'),
            newid='tab'+event.data.id,
            t=tabPanel.getComponent(newid);

        if(t) tabPanel.setActiveItem(t);
        else{
            if(event.data.leaf == true){
                var n,
                    c={'id':newid,'title':event.data.text,closable:true,iconCls:event.data.iconCls},
                    name;

                if(event.data.name) n=tabPanel.add(Ext.apply({items:[{xtype:event.data.name}]},c));
                else n=tabPanel.add(Ext.apply(c,{html:'你還沒有實現該頁面!'}));

                tabPanel.setActiveItem(n);
            }
        }
    },

    onClickButton:function(){
        localStorage.removeItem('TutorialLoggedIn');
        this.getView().destroy();
        Ext.create({
            xtype: 'login'
        });
    }
});