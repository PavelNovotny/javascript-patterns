/**
 *
 * Created by pavelnovotny on 26.10.16.
 */
var promisify = require('./promisify');

var timeoutFunc = promisify.timeout;

var timeouts = [1000, 2000, 3000];

var promise = Promise.resolve();

timeouts.forEach(function(timeout){
    promise = promise.then(function(){
        console.log("going to call " +timeout);
        return timeoutFunc(timeout);
    });

});
 promise.then(function(){
    console.log("all completed");
});

var tasks = [
    function(){
        console.log("going to call task1");
        return timeoutFunc(1000);
    }
    ,function(){
        console.log("going to call task2");
        return timeoutFunc(2000);
    }
    ,function(){
        console.log("going to call task3");
        return timeoutFunc(3000);
    }
];

var promise = tasks.reduce(function(prev, task){
    return prev.then(function() {
        return task();
    });
}, Promise.resolve());
promise.then(function(){
    console.log("all tasks completed");
});
