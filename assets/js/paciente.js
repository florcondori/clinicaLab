function Paciente(nombre,apellido,edad,genero,ciudad,pais){
  this.nombre =nombre;
  this.apellido =apellido;
  this.edad = edad;
  this.genero = genero;
  this.ciudad = ciudad;
  this.pais = pais;
  
  this.fichaMedica = function(){
     this.pais = this.pais.charAt(0).toUpperCase()+this.pais.slice(1);
    
    var div = document.createElement('div');
    div.classList.add("div-ficha");
    var p1 = document.createElement('p');
    var p2 = document.createElement('p');
    var p3 = document.createElement('p');
    p1.innerHTML = "Nombre: "+this.nombre+" "+this.apellido;
    p2.innerHTML = "Edad: "+this.edad+" años";
    p3.innerHTML = "Pais: "+this.pais;
                 
    div.appendChild(p1);
    div.appendChild(p2);
    div.appendChild(p3);
    return div;
  }
}