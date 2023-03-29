//referencias
let mazo = [];
let barajado = [];
let pilas = [];



const botonEmpezarJuego = document.querySelector(".empezar");
const tipos = ["trebol", "diamante", "corazon", "espada"];
const colores = {
  corazon: "rojo",
  diamante: "rojo",
  espada: "negro",
  trebol: "negro",
};


//  ----------------------------------------------------funciones-------------- -----------

const crearMazo = () => {
    mazo = [];
    for (let i = 1; i <= 13; i++) {
      for (let j = 0; j < tipos.length; j++) {
        const carta = {
          numero: i,
          tipo: tipos[j],
          color: colores[tipos[j]],
          estaDadaVuelta: true,
          img: `${i}_de_${tipos[j]}`,
          id: i * j,
        };
        mazo.push(carta);
      }
    }
  };
  
  const barajar = () => {
    barajado = mazo
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
  };


/*con pilas.push se arma una matriz: pilas = [
  [], [], []
]
*/

  const servir = () => {
    //Esta función quita una carta de barajado
    //La agrega a una de las 7 pilas de cartas inferiores
    //cada vez que este for me cuente, se hace una lista nueva:
//pilas =[];
    for(let i = 0; i < 7; i++){
      pilas.push([]);
      for(let j = 0; j < i + 1; j++){
        const primeraCartaDeBarajado = barajado[0];
        barajado.shift();
        pilas[i].push(primeraCartaDeBarajado);
      }
    }
    //Repita esta acción muchas veces.
  }


  const ponerCartasEnLasPilas = () => {
    //quiero agarrar las cartas que están en las pilas
    //construir a partir de ellas un elemento de HTML
    //agregarles la imagen correspondiente
    //guardarlas en el elemento HTML correspondiente.

    for (let i = 0; i < pilas.length; i++){
      const pila = document.querySelector(`#pila-${i}`)
      for(let j = 0; j < pilas[i].length; j++){
        const carta = pilas[i][j];
        const cartaHTML = document.createElement('div');
        const imagen = document.createElement('img');
        imagen.src = carta.img;
        cartaHTML.appendChild(imagen);
        pila.appendChild(cartaHTML);
      }
    }
  }


  //-----------------------inicio
  
botonEmpezarJuego.onclick = () => {
    crearMazo();
    barajar();
    servir();
    ponerCartasEnLasPilas();
   // ponerCartasEnLaPilaInicial();

  };





