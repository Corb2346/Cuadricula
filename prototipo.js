/*
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
  
          let borradorBoton = document.querySelector("#borrador");
  
          borradorBoton.onclick = function botonBorrar(colRecivido){
  
          console.log("si sirve este boton");
          let celdaEdit = document.getElementsByTagName('tr');
          console.log(celdaEdit);
          celdaEdit.classList.add();
            
          
          }
  
          
          celda.addEventListener('mousemove',cambiarColorC); 
          
          /*function Color(){
            let colorPasar =0;
            cambiarColorC(colorPasar);
            numAleatorio();
            
          }*/
  
        /*  function cambiarColorC(){
            let valorColorRecivido = 0; 
            celda.style['background-color']= "rgb(" + valorColorRecivido + "," + valorColorRecivido + "," + valorColorRecivido + ")";
  
            }
  
            function numAleatorio(){
              let numAleatorio = Math.floor((Math.random() * (255 - 0 + 1)) + 0);
              console.log(numAleatorio,numAleatorio,numAleatorio);
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
  
  
  
    genera_tabla();*/

    const square = document.createElement('div');
    square.className = 'square';
    document.body.appendChild(square);


    const cambiaColor = document.querySelector("#cambiaColor");

    
    cambiaColor.addEventListener("click",cambiaColorCuadro);

    function cambiaColorCuadro(){

      console.log("ya sirve al dar clic");
      square.classList.add("cambiaColor");
      

    };
 
    