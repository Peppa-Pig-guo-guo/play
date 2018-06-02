/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('app.model.business.domain.Domain', {
    extend: 'app.model.Base',
    fields: [
        'type_id',
        'type_name',
        'uid',
        'existence',
        'team',
        'type_order',
        'created_at',
        'updated_at',
        'createder_id',
        'modifier_id'
    ]

});