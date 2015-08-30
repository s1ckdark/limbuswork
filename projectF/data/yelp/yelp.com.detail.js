var jq = document.createElement('script');jq.src = "https://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js";document.getElementsByTagName('head')[0].appendChild(jq);

function GetContent (url, elm) {
var source = $('html').get(); // get rendering page.
var sourceTree; // object array

/* inforamtion of restarunts */

var res_name = $(".embossed-text-white").text();
var res_addr_street_no= $("address.flex-box").text() 
var res_addr_street_name = $(function(){
	var metas = document.querySelectorAll(["span"]);
	for (var i=0; i<metas.length;i++) {
	if (metas [i].getAttribute("itemprop") && metas[i].getAttribute("itemprop")=="streetAddress") {
		document.querySelectorAll(["span"])[i].textContent }}; });

var res_addr_suite_no = $().textContent; 
var res_addr_city = 
var metas = document.querySelectorAll(["span"]);
for (var i=0; i<metas.length;i++) {
if (metas [i].getAttribute("itemprop") && metas[i].getAttribute("itemprop")=="addressLocality") {
document.querySelectorAll(["span"])[i].textContent }};

var res_addr.state = var metas = document.querySelectorAll(["span"]);
for (var i=0; i<metas.length;i++) {
if (metas [i].getAttribute("itemprop") && metas[i].getAttribute("itemprop")=="addressRegion") {
document.querySelectorAll(["span"])[i].textContent }};

var res_addr.zipcode= var metas = document.querySelectorAll(["span"]);
for (var i=0; i<metas.length;i++) {
if (metas [i].getAttribute("itemprop") && metas[i].getAttribute("itemprop")=="postalCode") {
document.querySelectorAll(["span"])[i].textContent }};

var res_phone = $(".action-sub-text").text();
var res_web_url = $(".biz-website>a").attr("href");
var res_health_scope= $().textContent; 
var res_delivery_info.does_deliver = $(".subtle-text:contains('Delivery')").parent().text().replace('Delivery','')
var res_delivery_info.fee= $().textContent; 
var res_delivery_info.min_order = $().textContent; 
var res_delivery_info.coverage= $().textContent;  //array
var res_take_out = $(".subtle-text:contains('Take-out')").parent().text().replace('Take-out','');
var res_menu.entry_name = $().textContent; 
var res_menu.image_url= $().textContent; 
var res_menu.category_one = $().textContent; 
var res_menu.category_two = $().textContent; 
var res_menu.is_poopular = $().textContent;  // array
var res_menu.external_link = $().textContent; 
var res_hours= $(".subtle-text:contains('Hours')").parent().text().replace('Hours','');  //array
var s_site_name= $().textContent; 
var res_menu_popular= $().textContent;  //array
var res_category_keywords= $(".biz-details-snippet>ul>.category").text().trim().split(",");  //array
var res_cuisine_type= $(".biz-details-snippet>ul>.category").text().trim().split(",")  //array res_category_keywords와 중첩?
var res_price_range= $("#price_tip").text(); 
var res_page_url = document.querySelector("link[hreflang='en-us']").href;
var res_search_info	= $().textContent; 
var res_search_info.query= document.URL.split("osq=")[1].replace(/\+/g," "); 
var res_search_info.suggestion	= $(".item.suggestion div.suggestion-name") //array ????
var res_search_info.location	= $("input[name='find_loc'").val(); 
/* information of sites */
var res_path		= $().textContent; //array
var res_order_info.type	= $("input[name='selected-form']:checked").parent().text(); 
var res_order_info.time= $().textContent; 
var res_order_info.wait_time	= $().textContent; 
var res_order_info.menu= $().textContent; //obejct.array
var res_order_info.address	= $().textContent; 
var res_reserv_info.request_time	= $().textContent; 
var res_reserv_info.reserve_time	= $().textContent; 
var res_reserv_info.how_many	= $().textContent; 
/* information of users */
var res_filter_info.sort_by	= $().textContent; 
var res_filter_info.neighborhood	= $().textContent; //array 
var res_filter_info.distance	= $().textContent; 
var res_filter_info.price_range	= var price_range=[];
for(var i=0; i<$(".clearfix.set-4 span").length; i++){
price_range[i] = $(".clearfix.set-4 span")[i].textContent.trim();
}; //array
var res_filter_info.rating	= $().textContent;  //array
var res_filter_info.features	= $().textContent; //arrary
var res_filter_info.category	= $().textContent; //array
var res_filter_info.airport	= $().textContent; 
var res_filter_info.dining_option	= $().textContent; 
}
