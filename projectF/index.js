var pageMod = require("sdk/page-mod");
var pageWorkers = require("sdk/page-worker");
var self = require('sdk/self');

/*pageMod.PageMod({
  include:"*.yelp.com",
  contentStyleFile: data.url("./css/swiper.min.css"),
  contentScriptWhen: "end",
  contentScriptFile: [data.url("./js/jquery-1.11.3.min.js"),
    data.url("./js/jquery.initialize.js"),
    data.url("./js/swiper.jquery.min.js"),
    data.url("./prototype.js"),
    data.url("./js/yelp/yelp.js")],
  onAttach(function(){
    worker.port.emit('getContent');
    worekr.port.on('dettecting');


  })
});*/
pageMod.PageMod({
  include: '*.yelp.com',
  contentScriptWhen:"end",
  contentScriptFile: [self.data.url("./js/jquery-1.11.3.min.js"), self.data.url("turn.js")]
  //onAttach: function(worker) {
  //    worker.port.on("getContent", function handleJson(hlink) {
      //console.log("get rich or die :" +hlink);
      //pageWorkers.port.emit("yelp", hlink);
      //worker.port.on("mess", function(test){console.log(test);});
    });
//  }
//});

//var pageWorkers = require("sdk/page-worker").Page({
//    contentScriptFile:[self.data.url("./js/jquery-1.11.3.min.js"), self.data.url("background_contentscript.js")]
//});