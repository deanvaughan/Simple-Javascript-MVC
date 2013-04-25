Application.Define('Application.View.Profile', {
    parent: 'Application.View.Abstract',
	user: {},
    init: function(options) {
		this._super(options);
		jQuery('body').html(this.buildHtml());
	},
	buildHtml: function() {
		if (this.user instanceof Application.Model.User) {
			return '<h3>Welcome ' + this.user.getName() + '</h3>'
		}
	}
});
            
            
            


 
          
          