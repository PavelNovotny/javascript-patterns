/**
 *
 * Created by pavelnovotny on 20.10.16.
 */

function iterate(index) {
    if (index === tasks.length) {
        return finish();
    }
    var task = tasks[index];
    task(function() {
        iterate(index+1);
    });
}

function finish() {
    console.log("complete");
}

var tasks = [
    function (callback) {
        setTimeout(function () {
            console.log("1. function finished");
            callback();
        }, 2000)
    }
    ,function (callback) {
        setTimeout(function() {
            console.log("2. function finished");
            callback();
        }, 1000)
    }
    ,function (callback) {
        setTimeout(function() {
            console.log("3. function finished");
            callback();
        }, 3000)
    }
];
iterate(0);