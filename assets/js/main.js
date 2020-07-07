$('.venobox').venobox({
    framewidth : '100%',                            // default: ''
    frameheight: '500px',                            // default: ''
    border     : '10px',                             // default: '0'
    bgcolor    : '#5dff5e',                          // default: '#fff'
    titleattr  : 'data-title',                       // default: 'title'
    numeratio  : true,                               // default: false
    infinigall : true,                               // default: false
    //share      : ['facebook', 'twitter', 'download'] // default: []
});
$(document).ready(function(){
    $('.venobox').venobox(); 
    $("#firstlink").venobox().trigger('click');

});