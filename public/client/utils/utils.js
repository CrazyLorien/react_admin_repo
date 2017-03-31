export default {
    remove_duplicates: function (arr) {
        var prims = { "boolean": {}, "number": {}, "string": {} },
            objs = [];

        return arr.filter(function (item) {
            var type = typeof item;
            if (type in prims)
                return prims[type].hasOwnProperty(item) ? false : (prims[type][item] = true);
            else
                return objs.indexOf(item) >= 0 ? false : objs.push(item);
        });
    }
}