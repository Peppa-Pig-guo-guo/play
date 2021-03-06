Ext.define('app.controller.platform.system.loginController',{
    extend:'Ext.app.ViewController',
    alias:'controller.login',
    onLoginClick: function() {

        // Set the localStorage value to true
        localStorage.setItem("TutorialLoggedIn", true);

        // Remove Login Window
        this.getView().destroy();

        // Add the main view to the viewport
        Ext.create({
            xtype: 'app-main'
        });

    }
})