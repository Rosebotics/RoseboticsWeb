$(document).ready(function(){

    var circle = new ProgressBar.Circle('#android-course-graphics', {
            color: '#FCB03C',
            strokeWidth: 3,
            trailWidth: 1,
            duration: 1500,
            text: {
            value: '0'
            },
            step: function(state, bar) {
            bar.setText((bar.value() * 100).toFixed(0));
            }
           
            });

    

    $('#resume-btn').hover(
        function(){
            console.log('resume mouse in');
            $('#resume-icon').removeClass('glyphicon-pause').addClass('glyphicon-play');
        },
        function(){
            console.log('resume mouse out');
            $('#resume-icon').removeClass('glyphicon-play').addClass('glyphicon-pause');
        }
    );

    $('#video-btn').magnificPopup({type:'iframe'});
    
    $("#android-course-graphics").hover(

        function(){
            console.log("mouse in");
            circle.animate(0.6, {easing: "easeInOut"})
        },

        function(){
            console.log("mouse out");
            circle.animate(0, {easing: "easeInOut"})
        }

    );
});




