window.addEventListener('load',function(){
  var pacientes = [];
  var divFichasMedicas = document.getElementById('divFichasMedicas');
  var imprimir = document.getElementById('imprimir');
  var inputs = document.getElementsByClassName('input-registro');
  console.log(inputs);

  var soloLetras = function(event){
    var code = event.keyCode;
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
    console.log(e);
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

  for(var i=0; i<inputs.length; i++){
      if(inputs[i].id==="edad"){
        inputs[i].onkeypress = soloNumeros;
      }else{
          inputs[i].onkeypress = soloLetras;
          inputs[i].onblur = validarInput;
      }
   
  }

  imprimir.addEventListener('click',function(event){
    event.preventDefault();
      var nombre = document.getElementById('nombre').value;
      var apellido = document.getElementById('apellido').value;
      var edad = document.getElementById('edad').value;
      var genero = document.getElementById('genero').value;
      var ciudad = document.getElementById('ciudad').value;
      var pais = document.getElementById('pais').value;
      
      if(nombre.trim().length!=0 && apellido.trim().length!=0 && edad.trim().length!=0 && genero.trim().length!=0 && ciudad.trim().length!=0 && pais.trim().length!=0){
        document.getElementById('spanButton').innerText = "";
        var paciente = new Paciente(nombre,apellido,edad,genero,ciudad,pais);   
        pacientes.push(paciente);
        localStorage.setItem("nuevoPaciente",JSON.stringify(paciente));
        console.log(pacientes);        
        //divFichasMedicas.appendChild(paciente.fichaMedica());
        document.getElementById('formulario').reset();
        window.location = "FichasPaciente.html";
      }else{
        document.getElementById('spanButton').innerText = "Todos los campos son obligatorios";
        
      }
                 
  });
      
});

