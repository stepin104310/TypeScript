var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var myArr = [1, 2, 3];
var arr2 = [4, 5, 6];
var arr3 = __spreadArrays(myArr, arr2);
arr3.forEach(function (ele) {
    console.log(ele);
});
