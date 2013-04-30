Simple-Javascript-MVC
=====================

Contact me on:
http://www.mycreativedesign.co.uk

A micro MVC framework with the following features.
- Easily extensible
- Autoloader to load JS files
- Tiny footprint (built of only a few classes)

Example Controller Usage:

<pre>
Application.Define('Application.Controller.Test', {
    parent: 'Application.Controller.Abstract',
    requires: [
        'Application.Model.User',
        'Application.View.Profile'
    ], 
    init: function(options) {
        this._super(options);
                
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

Application.Define('Application.Model.User', {
    parent: 'Application.Model.Abstract',
    name: false,
    init: function(options) {
        this._super(options);
    },
    getName: function() {
        return this.name;
    }
});
           
Application.Define('Application.View.Profile', {
    parent: 'Application.View.Abstract',
    user: {},
    init: function(options) {
        this._super(options);
        jQuery('body').html(this.buildHtml());
    },
    buildHtml: function() {
        if (this.user instanceof Application.Model.User) {
            return 'Welcome ' + this.user.getName();
        }
    }
});
</pre>

