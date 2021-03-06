/**
 *
 * Created by pavelnovotny on 21.10.16.
 */
var p2 = Promise.resolve("foo");
p2.then((res) => console.log(res));
var p = new Promise(function(resolve, reject) {
    setTimeout(() => resolve(4), 2000);
});

p.then((res) => {
    res += 2;
    console.log(res);
});
p.then((res) => console.log(res));


var p = new Promise(function(resolve, reject) {
    if (true) {
        resolve(/* value */);  // fulfilled successfully
    }
    else {
        reject(/* reason */);  // error, rejected
    }
});

function asyncOperation1(callback){
    setTimeout(function() {
        callback();
    }, 3000);
}

function timeout(delay) {
    return new Promise(function(resolve, reject) {
        setTimeout(resolve, delay);
    });
}