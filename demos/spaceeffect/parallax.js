/*
 * Created with JetBrains WebStorm.
 * User: a.shikolay
 * Date: 2/8/13
 * Time: 3:46 AM
 */

var parallaxSpace = function () {

    var backMove = 0;
    var smallStars = $('.smallStars');
    var bigStars = $('.bigStars');


    function doMove() {
        smallStars.css("background-position", backMove + 'px ' + 0 + 'px');
        bigStars.css("background-position", backMove * 1.5 + 'px ' + 0 + 'px');
        backMove -= 0.3;
    }


    return {
        run:function () {
           for(var i =0; i<1000;i++){
               setInterval(doMove,i*100);
           }
        }
    }
}();

parallaxSpace.run();

