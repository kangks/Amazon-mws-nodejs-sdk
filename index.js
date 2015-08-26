var mws = require("./lib/index.js");
var config = require("./config.json");


mws.products.GetServiceStatus(config, false, function(err, data){
    console.log(data);
});

mws.sellers.ListMarketplaceParticipations(config, true, function(err, data){
    console.log(data);
});
