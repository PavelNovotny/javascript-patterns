/**
 *
 * Created by pavelnovotny on 20.10.16.
 */

var completed = 0;

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

tasks.forEach(function(task) {
    task(function(){
        if(++completed === tasks.length) {
            finish();
        }
    });
});

function finish() {
    console.log("all tasks finished.");
}

