//$(document).on("pageshow", "#home", function() {
//    SomaJS.loadAd({
//    adDivId : "smaatoad",
//    publisherId: 923876032,
//    adSpaceId: 65845901
//    },callBackForSmaato);
    
//});

$(document).on("pageshow","#lijst",function(){
alert("hallo");
		SomaJS.loadAd({
			adDivId : "smaatoadlijst",
			publisherId: 923876032,
			adSpaceId: 65845901
		},callBackForSmaato);
});
$(document).on("pageshow", "#over", function() {
		    		    SomaJS.loadAd({
						    adDivId : "smaatoadover",
						    publisherId: 923876032,
						    adSpaceId: 65845901
					    },callBackForSmaato);
});