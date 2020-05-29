"use strict";
var address = /** @class */ (function () {
    function address(zip) {
        this.zip = zip;
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
    Object.defineProperty(address.prototype, "zipstr", {
        get: function () {
            return this.zip;
        },
        enumerable: false,
        configurable: true
    });
    address.prototype.getzip = function () {
        return this.zip;
    };
    address.prototype.getaddress = function () {
        var here = this.address[this.zip];
        return here.pre + " " + here.city;
    };
    return address;
}());
var myaddress = new address('888-8888');
console.log(myaddress.zipstrgit);
