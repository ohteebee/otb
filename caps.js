threeGlasses([12,2,3]);
function threeGlasses(cap) {
    var caps = [cap[0], cap[1], cap[2]]; //saving volumes
    var found = [total()];
    //do as much pouring as possible before emptying


    emptyLeast();
    while (notEmpty()) {

      makeLeast();
      emptyLeast();
      // makeLeast();

    }
    return found.length;

    function makeLeast() {
        var i = 0, j = 0, min = false, minX, minY;
        for (i; i < cap.length; i++) {
            for (j; j < cap.length; j++) {
              if (i == j) continue;
              var left = leftover(i,j);
              if(!min || left > 0 && left < min) {
                min = left;
                minX = i; minY = j;
              }
            }
        }

        pour(minX, minY);
    }
    //predict
    function leftover(x, y) {
      var leftover = -1;
      var remaining =  caps[y] - cap[y];
      return cap[x] - remaining;
    }
    //empty one glass
    function emptyGlass(x) {
        cap[x] = 0;
        total();
    }

    function emptyLeast() {
        var index = 0,
            i = 0,
            min = false;
        for (i; i < cap.length; i++) {
            if ((!min && cap[i] > 0) || (cap[i] > 0 && cap[i] < min)) {
                min = cap[i];
                index = i;
            }
        }
        if (min > 0) {
          //something to empty
          emptyGlass(index);
        }
    }

    //pour from one to another until one is full or other empty
    function pour(x, y) {
        while (caps[y] > cap[y] && cap[x] > 0) {
            siphon(x, y);
        }
        total();

        function siphon(x, y) {
            cap[x] =  cap[x]-1;
            // console.log(cap[y]);
            cap[y] = cap[y]+1;
        }
    }

    function total() {
        var sum = cap[0] + cap[1] + cap[2];
        if (found.indexOf(sum) < 0)
          found.push(sum);
    }

    function notEmpty() {
      var i = 0;
      for (i; i < cap.length; i++) {
        if (cap[i] > 0) return true;
      }
      return false;
    }
}
