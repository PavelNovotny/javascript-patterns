/**
 * 
 * Created by pavelnovotny on 26.10.16.
 */

module.exports.promisify = function(callbackBasedApi) {
    return function promisified() {
        var args = [].slice.call(arguments);
        return new Promise(function(resolve, reject) {
            args.push(function(err, result) {
                if (err) {
                    return reject(err);
                }
                if (arguments.length <= 2) {
                    resolve(result);
                } else {
                    resolve([].slice.call(arguments, 1));
                }
            });
            callbackBasedApi.apply(null, args);
        });
    }
}

module.exports.timeout = function (delay) {
    return new Promise(function(resolve, reject) {
        setTimeout(resolve, delay);
    });
} 
