(function () {
  var timers = {};
  var id = 0;
  window.mySetInterval = function (cb, delay) {
    id++;
    timers[id] = { cb, delay };
    function repeat() {
      if (timers[id]) {
        const tempId = setTimeout(() => {
          cb();
          repeat();
        }, delay);
        timers[id] = {
          cb,
          delay,
          id: tempId
        };
      }
    }

    repeat();
    return id;
  };

  window.myclearInterval = function (id) {
    if (timers[id]) {
      console.log("yes");
      clearTimeout(timers[id].id);
      delete timers[id];
    }
  };
})();

console.log("1");

const id = mySetInterval(() => {
  console.log("hey");
}, 100);
setTimeout(() => {
  myclearInterval(id);
}, 2000);

console.log("2");
