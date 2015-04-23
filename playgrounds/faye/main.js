$(document).ready(function(){

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
    
    $("#android-course-img").hover(

        function(){
            console.log("mouse in");
            var circle = new ProgressBar.Circle('#android-course-progress', {
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

            circle.animate(1, function() {
            circle.animate(0);
            })
        },

        function(){
            console.log("mouse out");
        }

    );
});




