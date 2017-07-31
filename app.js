(function($){

	var userSelect = null;
	var cpu = null;
	var $x = $('#x');
	var $o = $('#o');
	var $grid = $('.game-board ul li');

	$x.on('click', function() {

		var $this = $(this);
		
		if( $this.hasClass('cpu') ) {
			$this.removeClass('cpu');
			$this.addClass('user');
			$o.removeClass('user');
			$o.addClass('cpu');
		} else {
			$this.removeClass('cpu');
			$this.addClass('user');
			$o.removeClass('user');
			$o.addClass('cpu');
		}

		userSelect = $this.text();
		cpu = $o.text();
		console.log('User: ' + userSelect + ' Cpu: ' + cpu);
	});

	$o.on('click', function() {

		var $this = $(this);

		if( $this.hasClass('cpu') ) {
			$this.removeClass('cpu');
			$this.addClass('user');
			$x.removeClass('user');
			$x.addClass('cpu');
		} else {
			$this.removeClass('cpu');
			$this.addClass('user');
			$x.removeClass('user');
			$x.addClass('cpu');
		}

		userSelect = $this.text();
		cpu = $x.text();
		console.log('User: ' + userSelect + ' Cpu: ' + cpu);
	});

	// populate the game board
	$grid.each(function() {
		var $this = $(this);
		$this.on('click', function() {
			$this.text(userSelect);
		});
	});

})(jQuery);