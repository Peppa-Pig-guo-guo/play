/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('app.model.business.shop.Shoptype', {
    extend: 'app.model.Base',
    fields: [
        'id',
        'parent_id',
        'type_name',
        'type_order',
        'created_at',
        'updated_at',
        'createder_id',
        'updateder_id',
        'type_status',
        'existence'
    ]

});