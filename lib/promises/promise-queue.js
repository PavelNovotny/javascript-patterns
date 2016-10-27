/**
 *
 * Created by pavelnovotny on 20.10.16.
 */
var TaskQueue = require("./queue/taskQueue");
var promisify = require('./promisify');
var timeoutFunc = promisify.timeout;

var queue = new TaskQueue(2);


queue.pushTask(function(){
    console.log("going to call " +1000);
    return timeoutFunc(1000);
});
queue.pushTask(function(){
    console.log("going to call " +2000);
    return timeoutFunc(2000);
});
queue.pushTask(function(){
    console.log("going to call " +2000);
    return timeoutFunc(2000);
});
queue.pushTask(function(){
    console.log("going to call " +1000);
    return timeoutFunc(2000);
});
queue.pushTask(function(){
    console.log("going to call " +3000);
    return timeoutFunc(2000);
});
