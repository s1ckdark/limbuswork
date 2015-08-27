$('.a-container').initialize(function(){
    if($('#owl').length=='1') {$('#swiperjs').remove();$('#results').prepend("<div id='swiperjs' class='swiper-container'><div class='swiper-wrapper'>");} else {
    $('#results').prepend("<div id='swiperjs' class='swiper-container'><div class='swiper-wrapper'>");} 
         var item = document.querySelectorAll('.sx-table-item');
        if(item.length>0){
         for(var i=0;i<item.length;i++){
                var cmnode =document.querySelectorAll('.sx-table-detail')[i];
                var gp = document.querySelectorAll('.sx-table-detail > .a-section > .a-row > .a-color-price')[i].textContent.length;
                var grp = document.querySelectorAll('.sx-table-detail > .a-row > .a-color-price')[i].textContent.length;
                if(gp.length > 0 && grp.length > 0) {var gpshow = "<span class='addon-price'>"+ gp + "</span><br/><span class='addon-price'>from "+ grp + "</span>";}
                else if(gp.length > 1 && grp.length == 0) {var gpshow = "<span class='addon-price'>"+ gp + "</span>";}
                else if(gp.length==0 && grp.length >1) {var gpshow = "<span class='addon-price'>from"+ grp + "</span>";}
                else if(gp.length==0 && grp.length ==0) {var gpshow = "<span class='addon-price'>sold out</span>";}
                var modelcnt = document.querySelectorAll('.sx-table-detail > h5 > strong')[i].textContent;
                if(modelcnt.length>50){var getModel = modelcnt.substr(0,50);getModel +='...';} else {var getModel = modelcnt; }
                var getImg = document.querySelectorAll('.sx-table-image-holder')[i].getElementsByTagName('img')[0];
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