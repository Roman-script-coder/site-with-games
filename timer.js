		const startTimer = document.querySelector('.startTimer');
		let timeTimer;
		startTimer.disabled = true;
		const second = document.querySelector('.second');
		const minute = document.querySelector('.minute');
		const time = document.querySelector('.time');
		const setTimer = document.querySelector('.setTimer');
		function setTime() {
			if(time.value > 5) {
				minute.innerText = time.value;
			} else {
				minute.innerText = '0' + time.value;
			}
			time.disabled = true;
			setTimer.disabled = true;
			startTimer.disabled = false;
		}
		function countdown() {
			startTimer.disabled = true;
			timeTimer = setTimeout(timer, 0);
			setTimeout(countdown, 1000);
		}
		function timer() {
			field.disabled = false;
			let numberSecond = parseInt(second.innerText)-1;
			let numberMinute = parseInt(minute.innerText)-1;
			if(minute.innerText == 0 && second.innerText == 0) {
				clearTimeout(timeTimer);
				time.disabled = false;
				setTimer.disabled = false;
				field.value='';
				field.disabled = true;
				// winner();
			} else {
				if(second.innerText == 0) {
					if(minute.innerText > 10) {
						minute.innerText = numberMinute;
					} else {
						minute.innerText = '0' + numberMinute;
					}
					second.innerText = 59;	
				} else if(second.innerText < 11) {
					second.innerText = '0' + numberSecond;
				} else {
					second.innerText = numberSecond;
				}
			}
		}
		function winner() {
			if(check) {
				alert('Победил первый игрок');
			} else {
				alert('Победил второй игрок');
			}
		}