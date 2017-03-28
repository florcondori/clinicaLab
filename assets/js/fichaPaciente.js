window.addEventListener('load',function(){
	var objetoPaciente = JSON.parse(localStorage.getItem("nuevoPaciente"));
	console.log(objetoPaciente);

	var nombre = document.getElementById('input-nombre');
	var apellido = document.getElementById('input-apellido');
	var edad = document.getElementById('input-edad');
	var genero = document.getElementById('input-genero');
	var ciudad = document.getElementById('input-ciudad');
	var pais = document.getElementById('input-pais');

	nombre.innerHTML = objetoPaciente.nombre;
	apellido.innerHTML = objetoPaciente.apellido;
	edad.innerHTML = objetoPaciente.edad;
	genero.innerHTML = objetoPaciente.genero;
	ciudad.innerHTML = objetoPaciente.ciudad;
	pais.innerHTML = objetoPaciente.pais;

	var modificar = document.getElementById('modificar');
	var guardar = document.getElementById('guardar');
	var arraySpan = document.getElementsByClassName('span-input');

	modificar.addEventListener('click',function(e){
		e.preventDefault();		
		console.log(arraySpan);		
		for(var i=0; i<arraySpan.length; i++){
			var textSpan = arraySpan[i].innerHTML;
			var input = arraySpan[i].nextElementSibling;
			input.value = textSpan;
			input.classList.remove('ocultar');
			//arraySpan[i].parentElement.removeChild(arraySpan[i]);
			arraySpan[i].classList.add('ocultar');
		}
		modificar.classList.add('ocultar');
		guardar.classList.remove('ocultar');
	});

	guardar.addEventListener('click',function(e){
		modificar.classList.remove('ocultar');
		guardar.classList.add('ocultar');
		for(var i=0; i<arraySpan.length; i++){			
			var textInput = arraySpan[i].nextElementSibling.value;
			arraySpan[i].innerHTML = textInput;
			arraySpan[i].classList.remove('ocultar');
			arraySpan[i].nextElementSibling.classList.add('ocultar');					
		}
		
		var i=0;
		for(prop in objetoPaciente){
			objetoPaciente[prop]=arraySpan[i].innerHTML;
			i++;
		}

		console.log(objetoPaciente);
		localStorage.setItem("nuevoPaciente",JSON.stringify(objetoPaciente));
		console.log(localStorage.getItem("nuevoPaciente"));
	});
});