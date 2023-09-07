#!/usr/bin/node
/* Excutes x times a fucntion */
exports.callMeMoby = function (x, theFunction) {
    for (let i = 0; i < x; i++) {
      theFunction();
    }
  };

