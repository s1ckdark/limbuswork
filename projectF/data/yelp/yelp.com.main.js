var jq = document.createElement('script');jq.src = "https://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js";document.getElementsByTagName('head')[0].appendChild(jq);

function GetContent (url, elm) {
var source = $('html').get(); // get rendering page.
var sourceTree; // object array

/* inforamtion of restarunts */

var res_name = $().textContent;
var res_addr.street_no= $().textContent; 
var res_addr.street_name = $().textContent; 
var res_addr.suite_no = $().textContent; 
var res_addr.city state zipcode= $().textContent; 
var res_addr.zipcode= $().textContent; 
var res_phone = $().textContent; 
var res_web_url = $().textContent; 
var res_health_scope= $().textContent; 
var res_delivery_info.does_deliver = $().textContent; 
var res_delivery_info.fee= $().textContent; 
var res_delivery_info.min_order = $().textContent; 
var res_delivery_info.coverage= $().textContent;  //array
var res_take_out = $().textContent; 
var res_menu.entry_name = $().textContent; 
var res_menu.image_url= $().textContent; 
var res_menu.category_one = $().textContent; 
var res_menu.category_two = $().textContent; 
var res_menu.is_poopular = $().textContent;  // array
var res_menu.external_link = $().textContent; 
var res_hours= $().textContent;  //array
var s_site_name= $().textContent; 
var res_menu_popular= $().textContent;  //array
var res_category_keywords= $().textContent;  //array
var res_cuisine_type= $().textContent;  //array
var res_price_range= $().textContent; 
var res_page_url		= $().textContent; 
var res_search_info	= $().textContent; 
var res_search_info.query= $().textContent; 
var res_search_info.suggestion	= $().textContent;  //array
var res_search_info.location	= $().textContent; 
/* information of sites */
var res_path		= $().textContent; //array
var res_order_info.type	= $().textContent; 
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
var res_filter_info.price_range	= $().textContent; //array
var res_filter_info.rating	= $().textContent;  //array
var res_filter_info.features	= $().textContent; //arrary
var res_filter_info.category	= $().textContent; //array
var res_filter_info.airport	= $().textContent; 
var res_filter_info.dining_option	= $().textContent; 
}