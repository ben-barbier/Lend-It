//Hide the alert message (do not remove of DOM)
$('.alert .close').live('click',function(){
    $(this).parent().fadeOut();
});