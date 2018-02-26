$(document).ready(function(){
	// var url = "https://api.giphy.com/v1/gifs/random?api_key=muuUmVthfqiLAze1NqapDnjKyXv0ehgI&tag=&rating=G"
	// $.getJSON(url, function(xhr){
	// 		console.log(xhr.data);
	// 		$firstGif = $("<img></img>").attr("src", xhr.data.images.fixed_height_downsampled.url);
	// 	$(".row").append($firstGif);
	// });
	var url = "https://api.giphy.com/v1/gifs/trending?api_key=muuUmVthfqiLAze1NqapDnjKyXv0ehgI&tag=&rating=R"
	$.getJSON(url, function(xhr){
			console.log(xhr.data);
			var gifHTML;
			$.each(xhr.data, function(i, item){
				if (i < 3) {				
					gifHTML += '<img src="'+ item.images.fixed_width_downsampled.url + '">';
				}
				// } else if (i < 9) {

				// }
			})
			$(".column").append(gifHTML);
	});
})