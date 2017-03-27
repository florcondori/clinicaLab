window.addEventListener('load',function(){
  var pacientes = [];
  var divFichasMedicas = document.getElementById('divFichasMedicas');
  var imprimir = document.getElementById('imprimir');
  var inputNombre = document.getElementById('nombre');
  var inputApellido = document.getElementById('apellido');
  var inputEdad = document.getElementById('edad');
  var inputGenero = document.getElementById('genero');
  var inputCiudad = document.getElementById('ciudad');
  var inputPais = document.getElementById('pais');

  var soloLetras = function(event){
    var code = event.keyCode;
    console.log(code);
      if((code>=97 && code<=122) ||(code>=65 && code<=90) || code==39 || code==32 || code==241 || code==209){
        event.target.nextElementSibling.nextElementSibling.innerText = "";
        return true;
      }else{
        event.target.nextElementSibling.nextElementSibling.innerText="solo debe contener letras";
        return false;
      }
  };

  var soloNumeros =function(e){
    var code = e.keyCode;
      if(code>=48 && code<=57 && this.value.length<2){
        return true;
      }else{
        return false;
      }
  };

  function validarInput(e){
    if(this.value.trim().length!=0){
      this.value = this.value.trim();
      e.target.nextElementSibling.nextElementSibling.innerText = "";
      var arrayInput = this.value.split(" ");
      arrayInput.forEach(function(elem,i){
        arrayInput[i] = elem.charAt(0).toUpperCase()+elem.slice(1).toLowerCase();        
      });
      this.value = arrayInput.join(" ");      
    }else{
      e.target.nextElementSibling.nextElementSibling.innerText = "campo obligatorio";
    }
  }

  inputNombre.onblur = validarInput;
  inputNombre.onkeypress = soloLetras;

  inputApellido.onkeypress = soloLetras;
  inputApellido.onblur = validarInput;

  inputEdad.onkeypress = soloNumeros;
  inputEdad.onblur = validarInput;

  inputGenero.onkeypress = soloLetras;
  inputGenero.onblur = validarInput;

  inputCiudad.onkeypress = soloLetras;
  inputCiudad.onblur = validarInput;

  inputPais.onkeypress = soloLetras;
  inputPais.onblur = validarInput;


  imprimir.addEventListener('click',function(event){
    event.preventDefault();
      var nombre = inputNombre.value;
      var apellido = inputApellido.value;
      var edad = inputEdad.value;
      var genero = inputGenero.value;
      var ciudad = inputCiudad.value;
      var pais = inputPais.value;
      
      if(nombre.trim().length!=0 && apellido.trim().length!=0 && edad.trim().length!=0 && genero.trim().length!=0 && ciudad.trim().length!=0 && pais.trim().length!=0){
        document.getElementById('spanButton').innerText = "";
        var paciente = new Paciente(nombre,apellido,edad,genero,ciudad,pais);   
        pacientes.push(paciente);
        console.log(pacientes);        
        divFichasMedicas.appendChild(paciente.fichaMedica());
        document.getElementById('formulario').reset();
      }else{
        document.getElementById('spanButton').innerText = "Todos los campos son obligatorios";
        
      }
                 
  });
      
});

