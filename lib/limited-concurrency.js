/**
 *
 * Created by pavelnovotny on 20.10.16.
 */
var concurrency = 2, running = 0, completed = 0, index = 0;

var tasks = [
    function (callback) {
        setTimeout(function () {
            console.log("1. function finished");
            callback();
        }, 3000)
    }
    ,function (callback) {
        setTimeout(function() {
            console.log("2. function finished");
            callback();
        }, 2000)
    }
    ,function (callback) {
        setTimeout(function() {
            console.log("3. function finished");
            callback();
        }, 1000)
    }
    ,function (callback) {
        setTimeout(function() {
            console.log("4. function finished");
            callback();
        }, 2000)
    }
];

function next() {
    while (running < concurrency && index < tasks.length) {
        console.log("starting task "+index);
        task = tasks[index++];
        task(function(){
            if (completed ===tasks.length) {
                return finish();
            }
            completed++;
            running--;
            next();
        });
        running++;
    }
}
next();


function finish() {
    console.log("all tasks finished.");
}
