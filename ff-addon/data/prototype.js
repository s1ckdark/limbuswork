
// $('.a-fixed-left-grid').initialize(function(){
//     for(var i=0;i<$('.a-fixed-left-grid').length;i++){
//         getImg =  $('.a-fixed-left-grid')[i].next('img.s-access-image').attr('src');
//         getModel =$('.a-fixed-left-grid')[i].find('h2.s-access-title').text();
//         getPrice =  $('.a-fixed-left-grid')[i].find('span.s-price').text();
//         $('#owl').prepend("<div class='add-on'>");
//         $('<span/>', {text:getModel}).prependTo('.add-on');
//         $('<span/>', {text:getPrice}).prependTo('.add-on');
//         $('<img/>', {src: getImg, title: getModel, text: getPrice}).prependTo('.add-on');

//     getImg = $(this).find('img.s-access-image').attr('src');
//     getModel = $(this).find('h2.s-access-title').text();
//     getPrice = $(this).find('span.s-price').text();
//     var re = /^\$?[0-9]+\.?[0-9]{2}/; 
//     var getPrice = getPrice.match(re);
//     if(getPrice == null) {getPrice='sold out';}
//     $('#resultsCol').prepend("<div class='add-on'>");
//     $('<span/>', {text:getModel}).prependTo('.add-on');
//     $('<span/>', {text:getPrice}).prependTo('.add-on');
//     $('<img/>', {src: getImg, title: getModel, text: getPrice}).prependTo('.add-on');

// });

//$('.sx-result-table').initialize(function(){
    //owl-carousel
// $('.pgResults').initialize(function(){
//     if($('#owl').length=='1') {$('#owl').remove();$('#results').prepend("<div id='disp'><div id='owl'>");} else {
//     $('#results').prepend("<div id='disp'><div id='owl'>");} 

//       var item = document.querySelectorAll('.productList');
//         if(item.length>0){
//          for(var i=0;i<item.length;i++){
//                 var m;
//                   if(typeof document.querySelectorAll('span.dpOurPrice')[i]=="object"){m=document.querySelectorAll('span.dpOurPrice')[i].textContent;var re = /^\$?[0-9]+\.?[0-9]{2}/; var getPrice = m.match(re);}
//                   else {var getPrice='see more';}
         
//                 // if(typeof document.querySelectorAll('span.dpOurPrice')[i]!="undefined"){m=document.querySelectorAll('span.dpOurPrice')[i].textContent;} else {var p=0;m=document.querySelectorAll('span.red')[p].textContent;p++;}
//                 // var re = /^\$?[0-9]+\.?[0-9]{2}/; 
//                 // var getPrice = m.match(re);
//                 var getModel = document.querySelectorAll('.productTitleNoBold')[i].textContent.substr(0,50);
//                 var getSrc = document.querySelectorAll('.smartImageContainer img')[i].src;
//                 // if(getPrice == null) {getPrice='see more';}
//                document.querySelector('#owl').innerHTML += "<div class='addon-item'><img src='"+ getSrc +"' class='addon-thumb'><figure>" + getModel + "</figure><i class='addon-price'>"+getPrice + "</i></div>";
//        }
//    }
//  $("#owl").owlCarousel();
// });
//swiper
$('.pgResults').initialize(function(){
    if($('#owl').length=='1') {$('#swiperjs').remove();$('#results').prepend("<div id='swiperjs' class='swiper-container'><div class='swiper-wrapper'>");} else {
    $('#results').prepend("<div id='swiperjs' class='swiper-container'><div class='swiper-wrapper'>");} 
         var item = document.querySelectorAll('.productList');
        if(item.length>0){
         for(var i=0;i<item.length;i++){
                var cmnode =document.querySelectorAll('.smartImageContainer')[i].nextElementSibling
                var gp = cmnode.getElementsByClassName('dpOurPrice').length;
                var grp = cmnode.getElementsByClassName('red').length;
                if(gp == '1' && grp=='1') {var m=cmnode.getElementsByClassName('dpOurPrice')[0].textContent;var mr=cmnode.getElementsByClassName('red')[0].textContent;var gpshow = "<span class='addon-price'>"+ m + "</span><br/><span class='addon-price'>from "+ mr + "</span>";}
                else if(gp=='1' && grp =='0') {var m=cmnode.getElementsByClassName('dpOurPrice')[0].textContent;var gpshow = "<span class='addon-price'>"+ m + "</span>";}
                else if(gp=='0' && grp =='1') {var mr=cmnode.getElementsByClassName('red')[0].textContent;var gpshow = "<span class='addon-price'>from"+ mr + "</span>";}
                else if(gp=='0' && grp =='0') {var gpshow = "<span class='addon-price'>sold out</span>";}
                var modelcnt = document.querySelectorAll('.productTitleNoBold')[i].textContent;
                if(modelcnt.length>50){var getModel = modelcnt.substr(0,50);getModel +='...';} else {var getModel = modelcnt; }
                var getImg = document.querySelectorAll('.smartImageContainer')[i].getElementsByTagName('img')[0];
                document.querySelector('.swiper-wrapper').innerHTML += "<div class='swiper-slide addon-item'><div class='addleft'><img src='"+ getImg.src+"' width='"+ getImg.width +"' height='"+ getImg.height + "' class='addon-thumb'></div><div class='addright'><figure>" + getModel + "</figure><br/>" + gpshow +"</div>";
       }
   }

    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 1.1,
        spaceBetween: 10,
        freeMode: true,
        freeModeMomentum:false,
        freeModeSticky:true
    });
});