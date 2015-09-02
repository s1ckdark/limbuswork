var pageMod = require("sdk/page-mod");
var pageWorkers = require("sdk/page-worker");
var self = require('sdk/self');


pageMod.PageMod({
  include: '*.yelp.com',
  contentScriptWhen:"end",
  contentScriptFile: [self.data.url("./js/jquery-1.11.3.min.js"), self.data.url("turn.js")]
  //onAttach: function(worker) {
    //   worker.port.on("getContent", function handleJson(hlink) {
      //console.log("get rich or die :" +hlink);
      //pageWorkers.port.emit("yelp", hlink);
      //worker.port.on("mess", function(test){console.log(test);});
    });
//  }
//});

