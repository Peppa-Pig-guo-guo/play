Ext.define('app.view.business.shop.Shopcodeadd', {
    extend:'Ext.window.Window',
    reference: 'Shopcodeadd',
    title   : '---',
    layout  : 'hbox',
    width   : 420,
    height  : 160,
    padding : '30 0 10 0',
    anchor  : '100%',
    defaults: {
        margins : '0 0 0 10'
    },
    listeners:{
        // show : function(){
        //  var rec = this.up().getSelectionModel().getSelection();
        //  var text = rec[0].data.text;
        //     var mn = this.getComponent('modulename');
        //     mn.setValue(text);
        // },
    },

    items: [{
        fieldLabel: 'Default',
        name: 'basic',
        value: 1,
        minValue: 1,
        maxValue: 125
    }, {
        fieldLabel: 'With a step of 0.4',
        name: 'test',
        minValue: -100,
        maxValue: 100,
        allowDecimals: true,
        decimalPrecision: 1,
        step: 0.4
    }, {
        hideTrigger: true,
        fieldLabel: 'Without spinner',
        name: 'without_spinner'
    }],


});