var test, telephone;
self.port.on("yelp", function(hlink){

   var xhr = new XMLHttpRequest();
    xhr.open("GET", hlink, true);
    xhr.responseType = "document";
    xhr.send();
   xhr.onreadystatechange = function() {
       var test = this.responseXML.body;
       var telephone = test.querySelector('[itemprop=telephone]').textContent;
       self.port.emit("mess", test);
       console.log(telephone);
     }





    console.log("last");


            //function(data){
            //JSON.stringify(obj.responseText);
           // console.log(data);
      //  });
        //console.log(obj.body);
        //var telephone = $(obj.body).find('[itemprop=telephone]').text();
       // console.log(telephone);
    });

///* inforamtion of restarunts */
//
//var res_name = $('[itemprop=streetAddress]').text();
//var res_addr_street_no = $("address.flex-box").text();
//var res_addr_street_name = $('[itemprop=streetAddress]').text();
//var res_addr_suite_no = null;
//var res_addr_city = $('[itemprop=addressLocality]').text();
//var res_addr_state = $('[itemprop=addressRegion]').text();
//var res_addr_zipcode = $('[itemprop=postalCode]').text();
//var res_phone = $(".action-sub-text").text();
//var res_web_url = $(".biz-website>a").attr("href");
//
//var res_health_scope= null;
//
//var res_delivery_info_does_deliver = null;
//var res_delivery_info_fee= null;
//var res_delivery_info_min_order = null;
//var res_delivery_info_coverage= null;  //array
//
//var res_take_out = null;
//var res_menu_entry_name = null;
//var res_menu_image_url= null;
//var res_menu_category_one = null;
//var res_menu_category_two = null;
//var res_menu_is_poopular = null;  // array
//var res_menu_external_link = null;
//var res_hours= $(".subtle-text:contains('Hours')").parent().text().replace('Hours','');  //array
//var s_site_name= null;
//var res_menu_popular= null;  //array
//var res_category_keywords= $(".biz-details-snippet>ul>.category").text().trim().split(",");  //array
//var res_cuisine_type= $(".biz-details-snippet>ul>.category").text().trim().split(",")  //array res_category_keywords와 중첩?
//var res_price_range= $("#price_tip").text();
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