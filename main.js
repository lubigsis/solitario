//referencias
let mazo = [];
let barajado = [];

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

  //-----------------------inicio
  
botonEmpezarJuego.onclick = () => {
    crearMazo();
    barajar();

  };

