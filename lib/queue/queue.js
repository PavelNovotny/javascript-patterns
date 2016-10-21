/**
 *
 * Created by pavelnovotny on 20.10.16.
 */
var TaskQueue = require("./taskQueue");
var queue = new TaskQueue(2);


queue.pushTask(function (callback) {
    setTimeout(function () {
        console.log("1. function finished");
        callback();
    }, 3000)
});
queue.pushTask(function (callback) {
    setTimeout(function() {
        console.log("2. function finished");
        callback();
    }, 2000)
});
queue.pushTask(function (callback) {
    setTimeout(function() {
        console.log("3. function finished");
        callback();
    }, 1000)
});
queue.pushTask(function (callback) {
    setTimeout(function() {
        console.log("4. function finished");
        callback();
    }, 2000)
});
queue.pushTask(function (callback) {
    setTimeout(function() {
        console.log("5. function finished");
        callback();
    }, 1000)
});
queue.pushTask(function (callback) {
    setTimeout(function() {
        console.log("6. function finished");
        callback();
    }, 3000)
});
queue.pushTask(function (callback) {
    setTimeout(function() {
        console.log("7. function finished");
        callback();
    }, 2000)
});
