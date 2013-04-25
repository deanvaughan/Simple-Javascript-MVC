Application.Define('Application.Controller.Test', {
    parent: 'Application.Controller.Abstract',
    requires: [
        'Application.Model.User',
        'Application.View.Profile'
    ], 
    init: function(options) {
	
        this._super(options);
        
        /*
         * Basic example usage
         */ 
        
        // Create instance of user object
        var user = new Application.Model.User({
                name: 'dean'
        });

        // build a view parsing in the user instance		
        var view = new Application.View.Profile({
                user: user
        });
    }
});
            
            
            


 
          
          