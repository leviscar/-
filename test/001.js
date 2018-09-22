var EventEmitter =function() {
	this.eventList = {},

    this.on = function(name,fn) {
        if(!this.this.eventList[name]){
            this.eventList[name] = [];
        }
        this.eventList[name].push(fn);
    };

    this.once = function (name,fn) {
        this.remove.call(this,name,fn);
        this.on.call(this,name,fn);
    };
        
    this.emit = function() {
        var name = Array.prototype.shift.call(arguments);
        var fns = this.eventList[name];
        if(!fns||fns.length == 0){
            return false;
        }
        for(var i,fn;fn = fns[i++];){
            fn.apply(this,arguments);
        }
    };

    this.remove = function(name,fn) {
        var fns = this.eventList[name];
        if(!fns) return false;
        if(!fn){
            fns && (fns.length=0);
        }else{
            for(var i = fns.length - 1;i>=0;i--){
                if( fns[i] === fn){
                    fns.splice(i,1);
                }
            }
        }
    }
};