Ext.define('app.model.business.country.Country', {
    extend: 'app.model.Base',
    
    fields: [
        'id', 'zh_name', 'foreign_name', 'en_name', 'code', 'status', 'created_at', 'updated_at', 'createder_id', 'modifier_id','name'
    ]
    
});