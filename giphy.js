$(document).ready(function(){
	$("button.random").on("click", function(){
		$('.column').empty();
		randomGif();
	});
	$("button.trending").on("click", function(){
		$('.column').empty();
		trendingGifs();
	});
	$("button.search").on("click", function(){
		$('.column').empty();
		var thedata = $("input").val();
		searchGifs(thedata);
	});
	trendingGifs();

	function searchGifs(thedata) {
		var theurl = "https://api.giphy.com/v1/gifs/search?";
		var data = {
			api_key: "muuUmVthfqiLAze1NqapDnjKyXv0ehgI",
			q: thedata,
			limit: 25,
			}
		$.getJSON(theurl, data, function(xhr){
			displayContent(xhr);
		});
	}
		function displayContent(xhr) {
			var gifHTML;
			$.each(xhr.data, function(i, item){
				var html = '<img src="'+ item.images.fixed_width_downsampled.url + '">'
				if (i < 7) {				
					gifHTML += html;
					$(".column1").append(gifHTML);
					gifHTML = '';
				} else if (i >= 7 && i <= 12 ) {
					gifHTML += html;
					$(".column2").append(gifHTML);
					gifHTML = '';
				} else if (i >= 13 && i <= 18) {
					gifHTML += html;
					$(".column3").append(gifHTML);
					gifHTML = '';
				} else if (i >=19 && i <= 25){
					gifHTML += html;
					$(".column4").append(gifHTML);
					gifHTML = '';
				}
			});
		}
	function randomGif() {
		var url = "https://api.giphy.com/v1/gifs/random?api_key=muuUmVthfqiLAze1NqapDnjKyXv0ehgI&tag=&rating=G"
		$.getJSON(url, function(xhr){
				$firstGif = $("<img></img>").attr("src", xhr.data.images.fixed_height_downsampled.url);
			$(".column1").append($firstGif);
		});
	}
	function trendingGifs() {
		var url = "https://api.giphy.com/v1/gifs/trending?api_key=muuUmVthfqiLAze1NqapDnjKyXv0ehgI&q=&rating=R"
		$.getJSON(url, function(xhr){
			displayContent(xhr);
		});
	}	
})