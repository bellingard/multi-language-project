
var Person = function(first, last, middle) {
    // TODO again
    this.first = first;
    this.middle = middle;
    this.last = last;
    alert('foo');
};

Person.prototype = {

    whoAreYou : function() {    
        alert('blah');
        return this.first + (this.middle ? ' ' + this.middle: '') + ' ' + this.last;
    }

};
