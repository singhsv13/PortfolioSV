const Portfolio = function () {
	function makeWords() {
		var words = [
			{
				text: "C",
				weight: 12.3
			}, {
				text: "css3",
				weight: 8
			}, {
				text: "javascript",
				weight: 14
			}, {
				text: "data structures",
				weight: 3
			}, {
				text: "programming",
				weight: 7
			}, {
				text: "python",
				weight: 10
			}, {
				text: "c++",
				weight: 9
			}, {
				text: "algorithms",
				weight: 15
			}, {
				text: "react",
				weight: 7
			}
		];
		return words;
	}

	function makeWordCloud(words) {
		$('.teaching-domains').jQCloud(words, { delay: 150 });
	}

	function displayWordCloud() {
		var count = 1;
		$(window).on('scroll', function () {
			var y_scroll_pos = window.pageYOffset;
			var scroll_pos_test = 2700; // set to whatever you want it to be
			var words = makeWords();
			if (y_scroll_pos > scroll_pos_test && count <= 1) {
				makeWordCloud(words);
				count++;
			}
		});
	}

	function designForm() {
		$("#my-modal form").addClass("my-form");
	}

	function typeAnimation() {
		Typed.new("#writing-text", {
			strings: [
				"am a Frontend Developer.", "love everything about tech.", "am a Gym Freak.", "am into Gaming.", "read self help books.", "am a Software Developer.", "am a problem solver."
			],
			// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
			stringsElement: null,
			// typing speed
			typeSpeed: 0.5,
			contentType: 'text',
			callback: function () {
				$("#writing-text").css({ "color": "#fff", "background-color": "#C8412B" });
			},
			preStringTyped: function () { },
			onStringTyped: function () { }
		});
	}

	return {
		displayWordCloud: displayWordCloud,
		typeAnimation: typeAnimation
	}

}();


Portfolio.displayWordCloud();
Portfolio.typeAnimation();
