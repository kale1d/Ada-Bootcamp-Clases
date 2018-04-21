let num = 0;

$(document).on('click','#suma', function sumar () {
	num += 1;
	$('.resultado').val(num);
	if (num< 10){
			$('.resultado').removeClass('blue');
	}
	if (num>10) {
		$('.resultado').addClass('green');
		console.log(num);
	}
	
})

$(document).on('click','#resta', function restar () {
	num -= 1;
	$('.resultado').val(num);
	console.log(num);
	if (num> (-10)){
			$('.resultado').removeClass('green');
	}
	if (num<-10) {
		$('.resultado').addClass('blue');
		console.log(num);
		}
	

	
})

