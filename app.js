(function($){

	var userSelect = null;
	var cpu = null;
	var slotValues = [];
	var slotClickCounter = 0;
	var $x = $('#x');
	var $o = $('#o');
	var $slots = $('.game-board ul li');

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
		for (var i = 0; i < $slots.length; i++) {
			slotValues[i] = cpu; 
		}
		console.log('User: ' + userSelect + ' Cpu: ' + cpu);
		console.log(slotValues);
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
		for (var i = 0; i < $slots.length; i++) {
			slotValues[i] = cpu; 
		}
		console.log('User: ' + userSelect + ' Cpu: ' + cpu);
		console.log(slotValues);
	});


	// find the winner
	function findWinner(slotValues) {
		console.log(slotValues);
	}

	// generate a random number for cpu's index
	function randomNumber() {
		var randomIndex = Math.floor( (Math.random()) * 10 );

		return randomIndex;
	}

	// calculate the CPU's move
	function cpuMove(index, userInput) {

		slotValues[index] = userInput;

		slotClickCounter += 1;
		console.log(slotClickCounter);
		if (slotClickCounter === 9) {
			findWinner(slotValues);
		}
	}

	// populate the game board
	$slots.each(function() {
		var $this = $(this);
		$this.on('click', function() {
			$this.text(userSelect);
			var index = $this.attr('id');
			
			cpuMove(index, userSelect);
		});
	});

})(jQuery);