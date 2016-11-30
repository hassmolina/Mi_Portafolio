$(document).ready(function() {
    $('#myContainer').multiscroll({
        //sectionsColor: ["#e42072", '#4BBFC3', '#7BAABE', "rgb(84, 200, 65)", "#7BAABE"],
        anchors: ['first', 'second', 'third', "fourth"],
        menu: '#menu',
        css3: true,
        paddingTop: '50px',
        loopBottom: true,
        loopTop: true
    });
    $("#toggleSwitch_j").hover(
   function() {
       $("#theBox").slideDown(300);
   }, function() {
       $("#theBox").slideUp(300);
   });
   $('.box').click( function() {
       $(this).toggleClass('clicked');
   });
});
