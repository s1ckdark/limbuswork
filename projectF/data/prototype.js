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