var pageMod = require("sdk/page-mod");
var data = require('sdk/self').data;


pageMod.PageMod({
  //include: /\/\/[a-zA-Z]+\.amazon.com\/gp\/aw\/s\/[a-zA-Z0-9_?.-/=-]+/,
  include:"*.amazon.com",
  contentStyleFile: data.url("./css/swiper.min.css"),
  contentScriptWhen: "end",
  contentScriptFile: [data.url("./js/jquery-1.11.3.min.js"),
    data.url("./js/jquery.initialize.js"),
    data.url("./js/swiper.jquery.min.js"),
    data.url("./prototype.js")]
});


