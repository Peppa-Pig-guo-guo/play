Ext.define('app.model.business.email.Email', {
    extend: 'app.model.Base',
    
    fields: [
        'id', 'email', 'country_id', 'sort', 'status', 'existence', 'created_at', 'updated_at', 'createder_id', 'modifier_id','zh_name'
    ]
    
});