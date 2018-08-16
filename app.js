var operacion = "";

//CAMBIAR TAMANO DE TECLAS
function reduceKeySize(element){
  element.style= "transform: scale(0.96,0.96)";
}

function defaultKeySize(element){
  element.style = "transform: scale(1,1)";
}

//SE LIMPIA LA PANTALLA
function limpiarPantalla(){
  document.getElementById("display").innerHTML = "0";
  operacion = "";
}


//OPERACIONES
function calculos(){
  var btn_teclas = document.getElementsByClassName("tecla");
  var pantalla = document.getElementById("display");
  var foo;
  var res;
  var signoActual;

  //SIGNO
  var signo = document.getElementById("sign");
  var dividido = document.getElementById("dividido");
  var por = document.getElementById("por");
  var menos = document.getElementById("menos");
  var mas = document.getElementById("mas");
  var punto = document.getElementById("punto");
  var igual = document.getElementById("igual");

  //NUMEROS
  var cero = document.getElementById("0");
  var uno = document.getElementById("1");
  var dos = document.getElementById("2");
  var tres = document.getElementById("3");
  var cuatro = document.getElementById("4");
  var cinco = document.getElementById("5");
  var seis = document.getElementById("6");
  var siete = document.getElementById("7");
  var ocho = document.getElementById("8");
  var nueve = document.getElementById("9");


  //LECTURA TECLADO
  for(var i = 0; i < btn_teclas.length; i++){
    document.onkeypress = function(event){
      //LECTURA DE CODIGO
      var key = event.charCode;

      //EVITA AGREGAR MAS CEROS SI SOLO HAY UNO.
      if(pantalla.innerHTML == "0") {
        pantalla.innerHTML = "";
      }

      //lEE EL CODIGO DEL TECLADO NUMERICO
        for(var j = 0; j <= 10; j++){
          if(key === 48+j){
            if(pantalla.innerHTML.length < 8) { //NO MAS DE 8 DIGITOS
              pantalla.innerHTML += j;
              operacion += j;
            }
          }
        }

        //LEE EL CODIGO DE LOS SIGNOS
        if(key == 42) {
          pantalla.innerHTML = "";
          operacion += "*";
          signoActual = "*";
        } else if(key == 43) {
          pantalla.innerHTML = "";
          operacion += "+";
          signoActual = "+";
        } else if(key == 45) {
          pantalla.innerHTML = "";
          operacion += "-";
          signoActual = "-";
        } else if(key == 46) {
          if(!(pantalla.innerHTML.indexOf(".") > -1)) {
            pantalla.innerHTML += ".";
            operacion += ".";
          }
        } else if(key == 47) {
          pantalla.innerHTML = "";
          operacion += "/";
          signoActual = "/";
        }

        //TECLA IGUAL Y EVALUACION
        if(key == 61) {
          foo = eval(operacion).toString();
          res = foo.substring(0,8);
          pantalla.innerHTML = res;
          operacion = pantalla.innerHTML;
          console.log(operacion);
        }
    };
  }

  //FUNCIONES POR NUMEROS
  cero.addEventListener("click", function(){
    if(pantalla.innerHTML == "0") {
      pantalla.innerHTML = "";
    } else {
      pantalla.innerHTML += "0";
      operacion += "0";
    }
  });

  uno.addEventListener("click", function(){
    if(pantalla.innerHTML == "0"){
      pantalla.innerHTML = "";
    }
    pantalla.innerHTML += "1";
    operacion += "1";
  });

  dos.addEventListener("click", function(){
    if(pantalla.innerHTML == "0"){
      pantalla.innerHTML = "";
    }
    pantalla.innerHTML += "2";
    operacion += "2";
  });

  tres.addEventListener("click", function(){
    if(pantalla.innerHTML == "0"){
      pantalla.innerHTML = "";
    }
    pantalla.innerHTML += "3";
    operacion += "3";
  });

  cuatro.addEventListener("click", function(){
    if(pantalla.innerHTML == "0"){
      pantalla.innerHTML = "";
    }
    pantalla.innerHTML += "4";
    operacion += "4";
  });

  cinco.addEventListener("click", function(){
    if(pantalla.innerHTML == "0"){
      pantalla.innerHTML = "";
    }
    pantalla.innerHTML += "5";
    operacion += "5";
  });

  seis.addEventListener("click", function(){
    if(pantalla.innerHTML == "0"){
      pantalla.innerHTML = "";
    }
    pantalla.innerHTML += "6";
    operacion += "6";
  });

  siete.addEventListener("click", function(){
    if(pantalla.innerHTML == "0"){
      pantalla.innerHTML = "";
    }
    pantalla.innerHTML += "7";
    operacion += "7";
  });

  ocho.addEventListener("click", function(){
    if(pantalla.innerHTML == "0"){
      pantalla.innerHTML = "";
    }
    pantalla.innerHTML += "8";
    operacion += "8";
  });

  nueve.addEventListener("click", function(){
    if(pantalla.innerHTML == "0"){
      pantalla.innerHTML = "";
    }
    pantalla.innerHTML += "9";
    operacion += "9";
  });

  //FUNCIONES POR SIGNO
  dividido.addEventListener("click", function(){
    pantalla.innerHTML = "";
    operacion += "/";
  });

  por.addEventListener("click", function(){
    pantalla.innerHTML = "";
    operacion += "*";
  });

  menos.addEventListener("click", function(){
    pantalla.innerHTML = "";
    operacion += "-";
  });

  mas.addEventListener("click", function(){
    pantalla.innerHTML = "";
    operacion += "+";
  });

  signo.addEventListener("click", function(){
    var n;
    if(pantalla.innerHTML != "0"){
      if(!pantalla.innerHTML.startsWith("-")) { //evalua si el operando no empieza con signo menos
        n = Number(pantalla.innerHTML) * -1;
        pantalla.innerHTML = n.toString();
        operacion = operacion * -1;
      } else {
        n = Number(pantalla.innerHTML) * -1;
        pantalla.innerHTML = n.toString();
        operacion = operacion * -1;
      }
    }
  });

  punto.addEventListener("click", function(){
    if(!(pantalla.innerHTML.indexOf(".") > -1)) {
      pantalla.innerHTML += ".";
      operacion += ".";
    }
  });

  //FUNCION IGUAL
  igual.addEventListener("click", function(){
    console.log(operacion);
    foo = eval(operacion).toString();
    res = foo.substring(0,8);
    pantalla.innerHTML = res;
    operacion = pantalla.innerHTML;
    console.log(operacion);
  });
  return pantalla.innerHTML;
}

var Calculadora = {
  init: function(){
    this.asignarEventoTecla('tecla');
    this.calcular();
  },
  asignarEventoTecla: function(selector) {
    var teclas = document.getElementsByClassName(selector);
    var btn_on = document.getElementById('on');
    for(var i = 0; i < teclas.length; i++){
      teclas[i].onmousedown = this.eventoReducirTecla;
      teclas[i].onmouseup = this.eventoAumentarTecla;
    }
    btn_on.onclick = this.eventoLimpiarPantalla;
  },
  eventoReducirTecla: function(event){
    reduceKeySize(event.target);
  },
  eventoAumentarTecla: function(event) {
    defaultKeySize(event.target);
  },
  eventoLimpiarPantalla: function(event) {
    limpiarPantalla();
  },
  calcular: function(){
    calculos();
  }
}
Calculadora.init();
