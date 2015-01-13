$(document).on("pageinit", "#lijst", function() {
    initializelist();
    
    $( "#myPopup" ).on({
        popupbeforeposition: function() {
		    document.getElementById("popup-title").innerHTML = adresses[movieInfo][0];
		    document.getElementById("popup-address").innerHTML = adresses[movieInfo][4];
		    document.getElementById("popup-image").innerHTML= "<img src='https://maps.googleapis.com/maps/api/staticmap?center="+ adresses[movieInfo][1] +","+ adresses[movieInfo][2] +"&zoom=16&size=200x200&markers=color:blue%7C"+ adresses[movieInfo][1] +","+ adresses[movieInfo][2] +"&key=AIzaSyAAq9FvaPVDfzGM8_5E98o8BV2KqBmYUi0'>";
        }
    });
});

$(document).on('vclick', '#movie-list li a', function(){  
    movieInfo = $(this).attr('data-id');
	$('#myPopup').popup().popup('open');
});

var movieInfo = null;
var adresses = null;

function callBackForSmaato(status){
    if(status == "SUCCESS"){
        console.log('callBack is being called with status : ' + status);
    } else if (status == "ERROR"){
        console.log('callBack is being called with status : ' + status);
    }
};

function initializelist() 
{
	
  adresses = points.sort(function(a, b){
    if(a[4] < b[4]) return -1;
    if(a[4] > b[4]) return 1;
    return 0;
})
  var items = '', // menu items list
    ul = $("#movie-list");  // get "every" mainMenu that has not yet been processed
  for (var i = 0; i < adresses.length; i++) {
    items += '<li><a href="" data-id="'+ i +'">' + adresses[i][4] + '</a></li>';
  } 

  ul.append(items);
  ul.listview('refresh'); // use cache, as ".mainMenu:empty" will no longer work (append called!)
}



