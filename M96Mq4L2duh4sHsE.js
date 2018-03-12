$(function() {
	chrome.extension.sendMessage({
		method: 'get'
	}, function(res) {
			var nameFound = false;
			var keywordFound = false;
			var loopsLeft = 0;
			var categories = ["/shop/all/jackets", "/shop/all/shirts", "/shop/all/tops_sweaters", "/shop/all/sweatshirts", "/shop/all/pants", 
								"/shop/all/shorts", "/shop/all/t-shirts", "/shop/all/hats", "/shop/all/bags", "/shop/all/accessories", "/shop/all/skate", "/shop/all/shoes"]
			var keywordInterval = setInterval(function(){
				for (var i = 0; i < categories.length; i++) {
				if(window.location.href.indexOf(categories[i]) != -1 && keywordFound === false) {
					if(res.keyword != "" && res.keyword != undefined) {
						var keyword = res.keyword.toLowerCase();
						var color = res.color.toLowerCase();												
					$(".name-link").each(function() {
						var link = $(this).attr('href');
						var clr = link.split("/");
						clr = clr[clr.length - 1].toLowerCase();
						var name = $(this).html().toLowerCase().trim().replace(RegExp(/[^\x20-\x7E\xA0-\xFF]/g), '');
						
						if(name.indexOf(keyword) != -1 && keywordFound === false) {
							nameFound = true;
							console.log("KEYWORDFOUND REFRESHING LOOPS");
							loopsLeft = 1;
							return true;
						} else {
							console.log("keyword not found");
						}
						if(nameFound === true && loopsLeft >= 1) {
							loopsLeft--;
							console.log(loopsLeft);
							var colorFind = $(this).html().toLowerCase().trim().replace(RegExp(/[^\x20-\x7E\xA0-\xFF]/g), ''); 
							console.log(colorFind);
							if( colorFind.indexOf(color) != -1 && keywordFound === false) {
								keywordFound = true;							
								window.location.href = link;
							} else {
							console.log("color not found");
							}
						}
					});
						if(keywordFound === false) {
							clearInterval(keywordInterval);
							window.location.href = "http://www.supremenewyork.com" + categories[i];
						}
					}
				}
			}}, 500);
			
			var pickSizeInterval = setInterval(function(){
				if(window.location.href.indexOf("shop") > -1) {
					if(!$('.in-cart').is(":visible")) {
						$("#size option, #s option").each(function(i) {
							if($(this).text() == res.size) {
								$('#size, #s').prop('selectedIndex', i);
							}
							 });if(res.autocart == 1)
								$('[name="commit"').click();
					}
				}
			}, 100);
			if(res.ischeckout == 1) {
				var goToCheckout = setInterval(function(){
					if($('.in-cart').is(':visible') && window.location.href.indexOf("shop/all") == -1) {
						window.location='https://www.supremenewyork.com/checkout';
						clearInterval(goToCheckout);
					}
				}, 100);
			}
	  
	});
});


