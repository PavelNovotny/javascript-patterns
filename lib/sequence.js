/**
 *
 * Created by pavelnovotny on 20.10.16.
 */


function task1(callback) {
    asyncOperation1(function(){
        console.log("async 1 complete");
        task2(callback);
    });
}

function task2(callback) {
    asyncOperation2(function(){
        console.log("async 2 complete");
        task3(callback);
    });

}

function task3(callback) {
    asyncOperation3(function(){
        console.log("async 3 complete");
        callback();
    });

}

task1(function(){
    console.log("allTasks complete");
});


function asyncOperation1(callback){
    setTimeout(function() {
        callback();
    }, 3000);
}
function asyncOperation2(callback){
    setTimeout(function() {
        callback();
    }, 2000);
}
function asyncOperation3(callback){
    setTimeout(function() {
        callback();
    }, 1000);
}
