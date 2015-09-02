var jq = document.createElement('script');jq.src = "https://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js";document.getElementsByTagName('head')[0].appendChild(jq);

$('.biz-listing > div.info-col.flex-box > h3 > a').attr('href');

//var source = $('html').get(); // get rendering page.
var sourceTree; // object array
var listing = document.querySelectorAll('li.interactive-list-item');
for(i=0;i<listing.length;i++){
	var hlink=document.querySelectorAll('li.interactive-list-item > div > h3 > a')[i].href;
	var obj=$.get(hlink, function(data){
		 console.log(data.responseText);
    });

	var telephone = $(obj).find('[itemprop=telephone]').text();
	console.log(telephone);
}
/* latest */
$('.interactive-list-item').each(function(index){ $(this).append('<div id="content'+index+'" style="display:none">');});
$('.interactive-list-item').each(function(index){
    var url = $('.interactive-list-item > div > h3 > a').attr('href');
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            $("#content"+index+"").html(xhr.responseText);
        }
    }
    xhr.send(null);
});



var test = "bar";
req = new XMLHttpRequest();
req.open("GET", myURL, true);
req.foo = test;
req.onreadystatechange = function() {
    if (this.readyState != 4)
        return;
    if (this.status == 200) {
        alert(this.foo);   // should print out "bar"
    }
}
req.send(null);

/* inforamtion of restarunts */

var res_name = $('[itemprop=streetAddress]').text();
var res_addr_street_no = $("address.flex-box").text();
var res_addr_street_name = $('[itemprop=streetAddress]').text();
var res_addr_suite_no = null;
var res_addr_city = $('[itemprop=addressLocality]').text();
var res_addr_state = $('[itemprop=addressRegion]').text();
var res_addr_zipcode = $('[itemprop=postalCode]').text();
var res_phone = $(".action-sub-text").text();
var res_web_url = $(".biz-website>a").attr("href");

var res_health_scope= null; 

var res_delivery_info_does_deliver = null;
var res_delivery_info_fee= null; 
var res_delivery_info_min_order = null; 
var res_delivery_info_coverage= null;  //array

var res_take_out = null;
var res_menu_entry_name = null;
var res_menu_image_url= null; 
var res_menu_category_one = null; 
var res_menu_category_two = null; 
var res_menu_is_poopular = null;  // array
var res_menu_external_link = null; 
var res_hours= $(".subtle-text:contains('Hours')").parent().text().replace('Hours','');  //array
var s_site_name= null; 
var res_menu_popular= null;  //array
var res_category_keywords= $(".biz-details-snippet>ul>.category").text().trim().split(",");  //array
var res_cuisine_type= $(".biz-details-snippet>ul>.category").text().trim().split(",")  //array res_category_keywords와 중첩?
var res_price_range= $("#price_tip").text(); 
//var res_page_url = document.querySelector("link[hreflang='en-us']").href;
//var res_search_info	= null;
//var res_search_info_query= document.URL.split("osq=")[1].replace(/\+/g," ");
//var res_search_info_suggestion	= $(".item.suggestion div.suggestion-name") //array ????
//var res_search_info_location	= $("input[name='find_loc'").val();
///* information of sites */
//var res_path		= null; //array
//var res_order_info_type	= $("input[name='selected-form']:checked").parent().text();
//var res_order_info_time= null;
//var res_order_info_wait_time	= null;
//var res_order_info_menu= null; //obejct.array
//var res_order_info_address	= null;
//var res_reserv_info_request_time	= null;
//var res_reserv_info_reserve_time	= null;
//var res_reserv_info_how_many	= null;
///* information of users */
//var res_filter_info_sort_by	= null;
//var res_filter_info_neighborhood	= null; //array
//var res_filter_info_distance	= null;
//var res_filter_info_price_range	= $('_biz-attrs > li:nth-child(2)');
//var res_filter_info_rating	= null; //array
//var res_filter_info_features	= null; //arrary
//var res_filter_info_category	= null; //array
//var res_filter_info_airport	= null;
//var res_filter_info_dining_option	= null;
/* json */
var objel = ["res_name","res_addr_street_no","res_addr_street_name","res_addr_suite_no","res_addr_citystatezipcode","res_addr_zipcode","res_phone","res_web_url","res_health_scope","res_delivery_info_does_deliver","res_delivery_info_fee","res_delivery_info_min_order","res_delivery_info_coverage","res_take_out","res_menu_entry_name","res_menu_image_url","res_menu_category_one","res_menu_category_two","res_menu_is_poopular","res_menu_external_link","res_hours","s_site_name","res_menu_popular","res_category_keywords","res_cuisine_type","res_price_range","res_page_url","res_search_info","res_search_info_query","res_search_info_suggestion","res_search_info_location	","res_path","res_order_info_type","res_order_info_time","res_order_info_wait_time","res_order_info_menu","res_order_info_address","res_reserv_info_request_time","res_reserv_info_reserve_time","res_reserv_info_how_many","res_filter_info_sort_by","res_filter_info_neighborhood","res_filter_info_distance","res_filter_info_price_range","res_filter_info_rating","res_filter_info_features","res_filter_info_category","res_filter_info_airport","res_filter_info_dining_option"]
var json = { };
for(var i = 0, l = objel.length; i < l; i++) {
    json[objel[i]] = +objel[i];
}
/* json end */

/*
function getContent(result, url)
{
    var obj = $.ajax({type: "GET", url: url, async: false, dataType: "json"}).responseText;
    result = JSON.parse(obj);
    return;
}

var tt=$.get('http://m.yelp.com//biz/s-and-r-lounge-san-francisco', function(data){
    $(data.body).find('[itemprop="reviewCount"]').text();
});*/