console.log("start");
$('.interactive-list-item').each(function(index){ $(this).append('<div id="content'+index+'" style="display:none">');});
$('.interactive-list-item').each(function(index){
    var url = $('.interactive-list-item > div.info-col > h3 > a').eq(index).attr('href');
    console.log(index + "-" +url);
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            var parser=new DOMParser();
            var xmlDoc=parser.parseFromString(xhr.responseText,"text/html");
            var wrap=xmlDoc.getElementById('wrap'); // replace(/<\s*script.*?>.*?(<\s*\/script.*?>|$)/ig,'');
            $("#content"+index+"").html(wrap);
        }
    }
    xhr.send(null);
});
console.log("end"); // parsing JSON throu xml parser