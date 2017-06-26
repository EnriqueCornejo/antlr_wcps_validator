var antlr4 = require('antlr4');
var WCPSLexer = require('./WCPSLexer');
var WCPSParser = require('./WCPSParser');
var WCPSListener = require('./WCPSListener').WCPSListener;



QueryWCPSListener = function(res) {
    this.Res = res;    
    WCPSListener.call(this); // inherit default listener
    return this;
};

// inherits the default listener
QueryWCPSListener.prototype = Object.create(WCPSListener.prototype);
QueryWCPSListener.prototype.constructor = QueryWCPSListener;

// override default listener behavior
QueryWCPSListener.prototype.enterForClauseLabel = function(ctx) {
    console.log("ENTER FOR CLAUSE");
};

// override default listener behavior
QueryWCPSListener.prototype.enterReturnClauseLabel = function(ctx) {
    console.log("ENTERED RETURN CLAUSE");
};


QueryWCPSListener.prototype.exitForClauseLabel = function(ctx) {
    console.log("EXITED FOR CLAUSE");
};

exports.QueryWCPSListener = QueryWCPSListener;
