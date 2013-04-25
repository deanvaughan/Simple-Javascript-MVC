Application.Define('Application.Base', {
    parent: 'Class',
    requires: [],
    init: function(options) {
        jQuery.extend(this, options);        
    }
});
