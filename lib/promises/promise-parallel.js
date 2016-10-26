/**
 *
 * Created by pavelnovotny on 26.10.16.
 */

var promisify = require('./promisify');
var timeoutFunc = promisify.timeout;

var timeouts = [1000, 1000, 500];

parallel()
    .then(function(){
        console.log("parallel finished");
    });

function parallel() {
    var promises = timeouts.map(function(timeout) {
        console.log("going to call " +timeout);
        return timeoutFunc(timeout);
    });
    return Promise.all(promises);
}
