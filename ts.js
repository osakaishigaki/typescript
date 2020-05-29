"use strict";
var address = /** @class */ (function () {
    function address(_zip) {
        this._zip = _zip;
        this.address =
            {
                '999-9999': {
                    'pre': 'aaa',
                    'city': 'aaaa'
                },
                '888-8888': {
                    'pre': 'bbb',
                    'city': 'bbbb'
                },
            };
        // this.zip= zip;
    }
    Object.defineProperty(address.prototype, "zip", {
        get: function () {
            return this._zip;
        },
        set: function (value, string) {
            this._zip = value;
        },
        enumerable: false,
        configurable: true
    });
    address.prototype.getaddress = function () {
        var here = this.address[this.zip];
        return here.pre + " " + here.city;
    };
    return address;
}());
var myaddress = new address('888-8888');
// myaddress.zip = '777-7777';
console.log(myaddress.zip);
console.log(myaddress.getaddress());
console.log(myaddress.addresses);
myaddress.address = 'error';
