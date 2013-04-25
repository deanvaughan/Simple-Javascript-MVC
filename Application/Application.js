var Application = Application || {
    
    /*
     * Setup the Namespaces
     */
    Controller: {},
    View: {},
    Model: {},
    
    /*
     * The default classname and callback used on application bootup.
     */
    options: {
        bootClassName: false,
        bootCallback: false
    },
    
    /*
     * Internal list of includes to load and define
     */
    parentIncludes: [], 
    requireIncludes: [],
    
    classDefines: [],
    initialized: false,
    Define: function(child, options) {
        
        if (options instanceof Object) {
            var item = {child: child, options: options}
            
            if (options.parent) {
                var self = this;
                item.parent = options.parent;
                   
                if (options.requires instanceof Array) {
                    jQuery.each(options.requires, function(key, item) {
                        self.requireIncludes.push(item);
                    });
                }
                
                this.Require(options.parent, function() {                 
                    jQuery.each(self.parentIncludes, function(key, parentIncludeItem) {
                        if (parentIncludeItem) {
                            if (parentIncludeItem.parent == options.parent) {
                                self.classDefines.push(parentIncludeItem);
                                self.parentIncludes.splice(key, 1);
                            }
                        }
                    });
                    
                    if (self.parentIncludes.length == 0) {
                        self.DefineNamespaces();
                        
                        if (self.requireIncludes.length == 0) {
                            if (!self.initialized) {
                                self._BaseStartup();
                            }
                        } else {
                            self.LoadClassRequires();
                        }
                    }
                }, function() {
                    console.log('callback err');
                });
                
                this.parentIncludes.push(item);
            }
        }
    },
    DefineNamespaces: function() {
        var items = this.classDefines.reverse();
        
        jQuery.each(items, function(key, item){
            if (item.parent) {
                try {
                    eval(item.child + ' = ' + item.parent + '.extend(item.options)');
                } catch(e) {
                    
                }
            }
        });
        
        this.classDefines = [];
    },
    LoadClassRequires: function() {       
        var item = this.requireIncludes.pop(); 
        this.Require(item);
    },
    _BaseStartup: function() {
             
        if (this.options.bootCallback) {
            this.options.bootCallback();
        }

        if (this.options.bootClassName) {
            eval('new ' + this.options.bootClassName + '();');
        }
        
        this.initialized = true;
    },
    Boot: function(className, callback) {
       var namespace = className.replace(/\./g, '/');
           require([namespace]);
       
       this.options.bootCallback = callback;
       this.options.bootClassName = className;
    },
    addSlashes: function(name) {
        return name.replace(/\./g, '/');
    },
    Require: function(className, callback) {
        
        var namespace = this.addSlashes(className);

        require([namespace], function() {
               if (callback) callback();  
        });
    }
}; 



