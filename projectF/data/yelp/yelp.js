
var listing = document.querySelectorAll('li.interactive-list-item');
for(i=0;i<listing.length;i++){
    var hlink=document.querySelectorAll('li.interactive-list-item > div > h3 > a')[i].href;
    var obj=$.get(hlink, function(data){
        console.log(data.responseText);
    });
    console.log("obj -"+obj.body);
    var telephone = $(obj).find('[itemprop=telephone]').text();
//    console.log(telephone);
}
