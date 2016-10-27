/**
 *
 * Created by pavelnovotny on 27.10.16.
 */

function* iteratorGenerator(arr) {
    for (var i = 0;i < arr.length; i++) {
        yield arr[i];
    }
}

var iterator = iteratorGenerator(['apple','banana','watermelon']);
var currentItem = iterator.next();
while (!currentItem.done) {
    console.log(currentItem.value);
    currentItem = iterator.next();
}
