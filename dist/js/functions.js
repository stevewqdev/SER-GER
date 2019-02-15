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
$('.btn-selection.not-direction').click(function(){
    var attrId = $(this).attr('data-id');
    if(!$(`#${attrId}`).hasClass('active')){
        $(`#${attrId}`).removeClass('disabled').addClass('active');

    }else{
        $(`#${attrId}`).removeClass('active');
        $(`#${attrId}`).not(`#${attrId}`).removeClass('active');
    }
})
$('.btn-selection.left').click(function(){
    var attrId = $(this).attr('data-id');
    console.log(attrId);
    if(!$(`#${attrId}`).hasClass('active')){
        $(`#${attrId}`).removeClass('disabled').addClass('active');
        if($(`#${attrId}`).hasClass('right')){
            $('.left').removeClass('active')
        }else{
            $('.left').addClass('active')
            $('.right').removeClass('active')
        }
    }else{
        $(`#${attrId}`).removeClass('active');
    }
})
$('.btn-selection.right').click(function(){
    var attrId = $(this).attr('data-id');
    console.log(attrId);
    if(!$(`#${attrId}`).hasClass('active')){
        $(`#${attrId}`).removeClass('disabled').addClass('active');
        if($(`#${attrId}`).hasClass('right')){
            $('.left').removeClass('active')
        }else{
            $('.left').addClass('active')
            $('.right').removeClass('active')
        }
    }else{
        $(`#${attrId}`).removeClass('active');
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