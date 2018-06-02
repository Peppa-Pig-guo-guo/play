/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('app.model.business.shop.Shopcode', {
    extend: 'app.model.Base',
    fields: [
        'id',
        'name',
        'code',
        'pid',
        'status',
        'existence',
        'created_at',
        'updated_at',
        'createder_id',
        'modifier_id'
    ]

});