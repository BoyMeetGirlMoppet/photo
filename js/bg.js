$(function(e){
    var timer=setInterval(function(){
        var x=e.clientX;
        var y=e.clientY;
        var $i=$("<b></b>").text("❤");
        var $b=$("<b></b>").text("I love you!");
        $i.css({
            "top":Math.random()*40,
            "left":Math.random()*1600,
            "font-size":26
        }).addClass("love");
        $b.css({
            "top":Math.random()*800,
            "left":Math.random()*1600,
              
            "font-size":16
        }).addClass("love")
        $("body").append($i);
        $("body").append($b);
        $i.animate({
            top:Math.random()*800,
            "opacity":0
        },1000,function(){
            $i.remove();
        })
        $b.animate({
            top:Math.random()*40,
            "opacity":0
        },1000,function(){
            $b.remove();
        })
    },50)

})
   