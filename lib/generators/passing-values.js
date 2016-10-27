/**
 *
 * Created by pavelnovotny on 27.10.16.
 */
function *twoWayGenerator() {
    var what = yield null;
    console.log("what " + what);
}

var twoWay = twoWayGenerator();
twoWay.next();
twoWay.next('world');

