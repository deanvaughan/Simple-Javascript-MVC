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
            
            
            


 
          
          