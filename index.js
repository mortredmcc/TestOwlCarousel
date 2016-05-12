$(document).ready(function(){
	$.ajax({
	  url: 'data.json',
	  dataType: 'json',
	  success: function(data) {
	    var content = '';
	    var alt = "pic123";
	    for (i in data.owl) {
	            content += '<div class="item" style="height:200px; display:block">'+data.owl[i].img+'</div>';
	        }
	        
	     $('.owl-carousel').html(content);
	     $('.owl-carousel').owlCarousel({
	          loop:true,
	          items: 1,
	          autoplay:true,
	          autoplayTimeout:3000,
	          autoplayHoverPause:false
		});
	  }
	});
});

