var propcopy = {
    _returnObject: {},

    _addValueToObj: function(newProp, value) {
        var path = newProp.split(".");

        for (var i = 0, tmp = this._returnObject; i < path.length - 1; i++) {
            tmp = tmp[path[i]] = tmp[path[i]] || {};
        }

        tmp[path[i]] = value;
    },

    add: function(stringWithDotNotation, value) {
        this._addValueToObj(stringWithDotNotation, value);
        return this._returnObject;
    },

    get: function() {
        return this._returnObject;
    }
};

module.exports = propcopy;