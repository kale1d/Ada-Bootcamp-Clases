let fullList = $('.list');
let num = 0;
let numt= 0;

$(window).on('load', function() {
    // console.log('holisss');
    $('.txt').append('<p>' + numt  + ' de ' + num + ' tareas realizadas' + '</p>');
})
	
	//$('<p>'+'muerte' + '</p>').appendTo('.txt');
	//$('.txt').html('<p> hola </p>')



	


function add () {
	const inputValue = $('#texto').val();
	console.log (inputValue);
	const lis = "<li>" + inputValue + "</li>" + "  " + "<button>" + 'M' + "</button>";
	const inp = '<input value="" type="text" class="muerte">';
	const index = $('.muerte').index(this);
	fullList.append(lis);
	fullList.append(inp);
	$('.muerte').eq(index).val(inputValue);
	$('#texto').val('');

}

$(ul input').on('keypress)
	

$('#texto').on('keypress', function(e){
	if (e.keyCode==13) {
		add();
		num++;
		$('.txt').html('<p>' + numt  + ' de ' + num + ' tareas realizadas' + '</p>');
		console.log(num);
			}

})




$(document).on('click', 'ul li', function () {
	const index = $('ul li').index(this);
	console.log(index);
	if ($('ul li').eq(index).hasClass('tachado')) {
		$('ul li').eq(index).removeClass('tachado');
		numt--;
			$('.txt').html('<p>' + numt  + ' de ' + num + ' tareas realizadas' + '</p>');

	} else {
		$('ul li').eq(index).addClass('tachado');
		numt++;	
			$('.txt').html('<p>' + numt  + ' de ' + num + ' tareas realizadas' + '</p>');

	}
	
	console.log(numt);
	// body... 
})

$('.removet').on('click', function removetxt () {
		
	$('ul li').removeClass('tachado');
	numt=0;
	$('.txt').html('<p>' + numt  + ' de ' + num + ' tareas realizadas' + '</p>');
	})

$('.addt').on('click', function addtxt(){
	$('ul li').addClass('tachado');
	numt=$('ul li').length;
	$('.txt').html('<p>' + numt  + ' de ' + num + ' tareas realizadas' + '</p>');
	
})

$(document).on('click', 'ul button', function () {
	console.log('funcionooooo')
	 	const index = $('ul button').index(this);	
		$('ul input').eq(index).removeClass('muerte')
		console.log(index);
})


// $('#odio').text( numt + ' de ' + num + ' tareas realizadas');

// lis.on('click', function tach () {
// 	console.log('hola')
// 	lis.addClass('tachado');
// 	// body... 
// })

//ESTAS SON PRUEBAS DE COMO CREAR EL BOTON 
// const but = "<button" + 'holi' + "</button>"
// 	$('li button').append(but);
// const but = lis.createElement('button');
// 	lis.append(but)