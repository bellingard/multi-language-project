
var Person = function(first, last, middle) {
    this.first = first;
    this.middle = middle;
    this.last = last;
};

Person.prototype = {

    whoAreYou : function() {
        // TODO blabla
        return this.first + (this.middle ? ' ' + this.middle: '') + ' ' + this.last;
    }

};
