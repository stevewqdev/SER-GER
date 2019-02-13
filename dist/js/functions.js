// Functios for Project Management view
$('.type-profile-selector .btn-white').click(function(){
    if(!$(this).hasClass('active')){
        $('.type-profile-selector .btn-white').removeClass('active');
        $(this).addClass('active');
    }
})
$('.project-filter .item').click(function(){
    if(!$(this).hasClass('active')){
        $('.project-filter .item').removeClass('active');
        $(this).addClass('active');
    }
})
$('.btn-selection').click(function(){
    if(!$(this).hasClass('active')){
        $('.btn-selection').removeClass('active');
        $(this).addClass('active');
    }
})
//Functions for Profile
$('.btn-add').click(function(){
    var attrId = $(this).attr('data-id');
    if($(`#${attrId}`).hasClass('disabled')){
        $(`#${attrId}`).removeClass('disabled').addClass('enabled');
    }else{
        $(`#${attrId}`).removeClass('enabled').addClass('disabled');
    }
})
$('.close-perk').click(function(){
    var attrId = $(this).attr('data-id');
    console.log(attrId);
    if($(`#${attrId}`).hasClass('disabled')){
        $(`#${attrId}`).removeClass('disabled').addClass('enabled');
    }else{
        $(`#${attrId}`).removeClass('enabled').addClass('disabled');
    }
})