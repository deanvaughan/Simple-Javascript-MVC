Application.Define('Application.Controller.Test', {
    parent: 'Application.Controller.Abstract',
    requires: [
        'Application.Model.User'
    ], 
    init: function(options) {
		// do what you like here..
		var user = new Application.Model.User({
			name: 'dean'
		});
		
		console.log(user.getName());
		
		this._super(options);
		
	}
});
            
            
            


 
          
          