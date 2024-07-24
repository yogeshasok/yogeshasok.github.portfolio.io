$(document).ready(function(){
$(".button-collapse").sideNav();
    $('.parallax').parallax();
    $('.collapsible').collapsible();
    $('.scrollspy').scrollSpy();
    $('#kn').addClass('animated  wobble');


    var options = [{selector: '#section_1', offset: 500, callback: function(el) {
        $('#section_1').addClass('animated bounceInDown')
    } },
        {selector: '#staggered-test', offset: 400, callback: function(el) {
            Materialize.showStaggeredList($(el));
        } },
        {selector:'#section_2',offset: 200, callback: function(e1){
            $('#ex').addClass('animated  wobble');
            $('#ex1').addClass('animated  wobble');
            $('#ex2').addClass('animated  wobble');
        }}

    ];
    Materialize.scrollFire(options);



});