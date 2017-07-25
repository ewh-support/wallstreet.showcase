var paused = false;
$(document).scroll(function(){
    var w_sreen = $(window).width();
    if (w_sreen <= 770) {
        var position_animate = '250'; // mobile tablet
    } else{
        var position_animate = '500'; // pc
    }

       if( $(window).scrollTop() > position_animate && $(window).scrollTop() > $("#body").offset().top  ) {
        if( !paused ){
            var i = '0';
            $('.count').each(function (index) {
                $(this).prop('Counter',0).animate({
                    Counter: $(this).attr('data-counter-to')
                }, {
                    duration: 1500,
                    easing: 'swing',
                    step: function (now) {
//										$(this).text(Math.ceil(now));
                        $(this).text(commaSeparateNumber(Math.ceil(this.Counter)));
                    },
                    complete: function(){
                        i++;
                        if(i==4){
                            $('.data-students').text('3.000.000');
                        }

                    }
                });

                function commaSeparateNumber(val) {
                    flag = true;
                    while (/(\d+)(\d{3})/.test(val.toString())) {
                        val = val.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
                    };
                    return val;
                }
//				                $(this).destroy();
            }, {
                offset: '100%'
            });
            paused = true;
        }
    }else {
        if( paused ){
            paused = false;
        }
    }
});