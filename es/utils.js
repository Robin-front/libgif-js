// Generic functions
export const bitsToNum = function (ba) {
    return ba.reduce(function (s, n) {
        return s * 2 + n;
    }, 0);
};

export const byteToBitArr = function (bite) {
    var a = [];
    for (var i = 7; i >= 0; i--) {
        a.push(!!(bite & (1 << i)));
    }
    return a;
};