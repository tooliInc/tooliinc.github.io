(function() {

	var setVisibleItem = function($portfolio, position) {
		$portfolio.find('li').removeClass('active');
		$portfolio.find('img').removeClass('active');

		$portfolio.find('li:nth-child(' + position + ')').addClass('active');
		$portfolio.find('img:nth-child(' + position + ')').addClass('active');
	};

	var startPortfolio = function (selector) {

		var $portfolio = $(selector);
		var nbItems = $portfolio.find('li').size();
		var currentItem = 1;

		// init
		setVisibleItem($portfolio, currentItem);

		setInterval(function() {

			currentItem = currentItem === nbItems ? 1 : (currentItem + 1); 
			setVisibleItem($portfolio, currentItem);

		}, 3000);
	};

	
	startPortfolio('#portfolio-lend');
	startPortfolio('#portfolio-borrow');
	
})();