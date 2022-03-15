  const botonClear = document.querySelector('#limpiaPantalla');
  botonClear.addEventListener('click',limpiaPantalla);
  
  let colorInput = document.getElementById("colorHexD");
  let hexOutput = document.getElementById("hexa");

  colorInput.addEventListener("input",muestraColor);

  function muestraColor(){

    hexOutput.innerHTML = colorInput.value;
  };


  let colorChoice = 'black';
  function changeColor(choice){
    colorChoice = choice;

  }


  function limpiaPantalla(){

    botonClear.onmouseover = actualizaTabla();
    rango.value =16;
    valorPantalla.innerHTML = 16;
    genera_tabla();
  }

    const container = document.querySelector('#container');
    const divContainer = document.querySelector('#divContainer');
  
    divContainer.setAttribute("border","2");
    divContainer.style.borderColor = "black"
    container.appendChild(divContainer);  

    let valorPantalla = document.querySelector('#valorPantalla'); //crea una variable que se relaciona con el valor a mostrar en pantalla
    valorPantalla.innerHTML = rango.value; //recibe el valor default de rango
 

    rango.oninput = function(){ //cuando se da clic se realizan las lineas de código

    let rango = document.querySelector("input");//llama a la etiqueta input y toma el valor default
    let valorPantalla = document.querySelector('#valorPantalla'); //crea una variable que se relaciona con el valor a mostrar en pantalla
    valorPantalla.innerHTML = rango.value; //recibe el valor default de rango
 

    valorPantalla = rango.value; 
    valorPantalla.innerHTML = rango.value;
    console.log(rango.value);
    console.log(typeof rango.value);
    console.log(typeof valorPantalla);
    rango.onmouseover= actualizaTabla();
    rango.onmouseleave= genera_tabla2(valorPantalla);

    function genera_tabla2(valorPantalla) {

  
      let cambiarBorde = document.querySelector("#quitarBordes");
      cambiarBorde.onclick = function(){
        cambiaBorde();
      }

      let colocarBordes = document.querySelector("#colocaBordes");
      colocarBordes.onclick = function(){

        colocarBorde();
      }

      let defaultValor =valorPantalla; 
      // Obtener la referencia del elemento body
      const body = document.getElementsByTagName("divContainer")[0];
    
      // Crea un elemento <table> y un elemento <tbody>
      const tabla   = document.createElement("table");
      const tblBody = document.createElement("tbody");
    
      // Crea las celdas
      for (let i = 0; i <defaultValor; i++) {
        // Crea las hileras de la tabla
        let hilera = document.createElement("tr");
        hilera.style.borderColor = 'F3F3F3','1';
    
  
        for (let j = 0; j <defaultValor; j++) {
          // Crea un elemento <td> y un nodo de texto, haz que el nodo de
          // texto sea el contenido de <td>, ubica el elemento <td> al final
          // de la hilera de la tabla

          let celda = document.createElement("td");

          celda.addEventListener('mousemove',cambiarColor);
          celda.style['background-color']= 'white';
          celda.style.borderColor = 'F3F3F3','1';

          celda.addEventListener('mousemove',cambiarColor); 
        
          function cambiarColor(){

            if(colorChoice === 'random'){
  
              celda.style['background-color']= `hsl(${Math.random() * 360}, 100%,50%)`;
  
            } else 
  
            celda.style['background-color']= colorChoice;
  
            }
           
            
          
          hilera.appendChild(celda);
        }
    
        // agrega la hilera al final de la tabla (al final del elemento tblbody)
        tblBody.appendChild(hilera);
      }
    
      // posiciona el <tbody> debajo del elemento <table>
      tabla.appendChild(tblBody);
      // appends <table> into <body>
      divContainer.appendChild(tabla);
      // modifica el atributo "border" de la tabla y lo fija a "2";
      tabla.setAttribute("border", "3");
      tabla.setAttribute("height",500);
      tabla.setAttribute("width",500);
      tabla.style.borderSpacing ="0px";

      function cambiaBorde(){
        console.log("si sirvo");
        tabla.setAttribute("border","0");
      }
  
      function colocarBorde(){
        console.log("si sirvo tambien");
        tabla.setAttribute("border","3");
      }
    }
  
  }

 


    function genera_tabla() {

    
      let cambiarBorde = document.querySelector("#quitarBordes");
      cambiarBorde.onclick = function(){
        cambiaBorde();
      }

      let colocarBordes = document.querySelector("#colocaBordes");
      colocarBordes.onclick = function(){

        colocarBorde();
      }

      let defaultValor = 16; 
      
    // Obtener la referencia del elemento body
    const body = document.getElementsByTagName("divContainer")[0];
  
    // Crea un elemento <table> y un elemento <tbody>
    const tabla   = document.createElement("table");
    const tblBody = document.createElement("tbody");
  
    // Crea las celdas
    for (let i = 0; i <defaultValor; i++) {
      // Crea las hileras de la tabla
      let hilera = document.createElement("tr");
      hilera.style.borderColor = 'F3F3F3','1';
  

      for (let j = 0; j <defaultValor; j++) {
        // Crea un elemento <td> y un nodo de texto, haz que el nodo de
        // texto sea el contenido de <td>, ubica el elemento <td> al final
        // de la hilera de la tabla
        
        let celda = document.createElement("td");
        celda.style['background-color']= 'white';
        celda.style.borderColor = 'F3F3F3','1';
        
        celda.addEventListener('mousemove',cambiarColor); 
        
        function cambiarColor(){
          if(colorChoice === 'random'){

            celda.style['background-color']= `hsl(${Math.random() * 360}, 100%,50%)`;

          } else 

          celda.style['background-color']= colorChoice;

          }

        hilera.appendChild(celda);
      }
  
      // agrega la hilera al final de la tabla (al final del elemento tblbody)
      tblBody.appendChild(hilera);
    }
  
    // posiciona el <tbody> debajo del elemento <table>
    tabla.appendChild(tblBody);
    // appends <table> into <body>
    divContainer.appendChild(tabla);
    // modifica el atributo "border" de la tabla y lo fija a "2";
    tabla.setAttribute("border", "3");
    tabla.setAttribute("height",500);
    tabla.setAttribute("width",500);
    tabla.style.borderSpacing ="0px";

    function cambiaBorde(){
      console.log("si sirvo");
      tabla.setAttribute("border","0");
    }

    function colocarBorde(){
      console.log("si sirvo tambien");
      tabla.setAttribute("border","3");
    }

  
    
  }


  function actualizaTabla(){
    
    const table = document.querySelector("table");
    console.log(table);
    table.remove();
    
  }

  genera_tabla();