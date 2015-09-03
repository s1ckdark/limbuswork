var res_web_url, res_name, res_name, res_addr_street_no, res_addr_street_name, res_addr_suite_no, res_addr_city, res_addr_state, res_addr_zipcode, res_phone;
var seconds = 0;
$('.interactive-list-item').each(function(index){ $(this).append('<div id="content'+index+'" class="pw" style="display:none">');});
$('.interactive-list-item').each(function(index){
    var url = $('.interactive-list-item > div.info-col > h3 > a').eq(index).attr('href');
    console.log(index + "-" +url);
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4  && xhr.status == 200) {
            var parser=new DOMParser();
            var xmlDoc=parser.parseFromString(xhr.responseText,"text/html");
            var wrap=xmlDoc.getElementById('wrap'); // replace(/<\s*script.*?>.*?(<\s*\/script.*?>|$)/ig,'');
            $("#content"+index+"").html(wrap);
            var interval = setInterval(function () {
        // Ready
        if ($('.pw #wrap').length == $('.interactive-list-item').length) {
                  clearInterval(interval);
     res_name = $('[itemprop=streetAddress]').text();
     res_addr_street_no = $("address.flex-box").text();
     res_addr_street_name = $('[itemprop=streetAddress]').text();
     res_addr_suite_no = null;
     res_addr_city = $('[itemprop=addressLocality]').text();
     res_addr_state = $('[itemprop=addressRegion]').text();
     res_addr_zipcode = $('[itemprop=postalCode]').text();
     res_phone = $(".action-sub-text").text();
     res_web_url = $(".biz-website>a").attr("href");
    console.log(res_phone);

    } else { // Do we give up?
        clearInterval(interval);
        // Give up

    }
}, 1); // Checks once every second
            }




  }
    xhr.send(null);
});

// var checkState = function() {
//   if ($('.pw').find('#wrap').length == $('.interactive-list-item').length) {
//     var res_name = $('[itemprop=streetAddress]').text();
//     var res_addr_street_no = $("address.flex-box").text();
//     var res_addr_street_name = $('[itemprop=streetAddress]').text();
//     var res_addr_suite_no = null;
//     var res_addr_city = $('[itemprop=addressLocality]').text();
//     var res_addr_state = $('[itemprop=addressRegion]').text();
//     var res_addr_zipcode = $('[itemprop=postalCode]').text();
//     var res_phone = $(".action-sub-text").text();
//     var res_web_url = $(".biz-website>a").attr("href");
//     console.log(res_phone);
//   } else {
//     // Check back again 1 sec later
//     setTimeout(checkState, 1000);
//   }
// };
// checkState;

