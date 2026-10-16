const menu = document.getElementById("poke-menu");
const pokeInfo = document.getElementById("poke-info");
const tipos = [
    "Normal",
    "Fuego",
    "Agua",
    "Eléctrico",
    "Planta",
    "Hielo",
    "Lucha",
    "Veneno",
    "Tierra",
    "Volador",
    "Psíquico",
    "Bicho",
    "Roca",
    "Fantasma",
    "Dragón",
    "Siniestro",
    "Acero",
    "Hada"
];
const sexo = [
    "Masculino",
    "Femenino",
    "Sin Sexo"
];

const regiones = [
  "Kanto",
  "Johto",
  "Hoenn",
  "Sinnoh",
  "Teselia",
  "Kalos",
  "Alola",
  "Galar",
  "Paldea"
];

const habilidades = [
  "Espesura",
  "Clorofila",
  "Mar Llamas",
  "Poder Solar",
  "Torrente",
  "Cura Lluvia",
  "Elec. Estática",
  "Pararrayos",
  "Gran Encanto",
  "Tenacidad",
  "Levitación",
  "Cabeza Roca",
  "Robustez",
  "Fuga",
  "Adaptable",
  "Inmunidad",
  "Sebo",
  "Foco Interno",
  "Multiescamas",
  "Entusiasmo",
  "Impasible",
  "Sincronía",
  "Enjambre",
  "Experto",
  "Espíritu Vital"
];

const pokedex = {
    "pokemon1": {
        "nombre": "Bulbasaur",
        "tipo": [
            tipos[4], tipos[7]
        ],
        "altura": "0,7 m",
        "peso": "6,9 kg",
        "sexo": [
            sexo[0]
        ],
        "descripcion": "",
        "imagen": "img/Bulbasaur.png",
        "region": [
            
        ],
        "habilidad": [

        ],

    },
    "pokemon2": {
        "nombre": "",
        "tipo": [
            tipos[0],
        ],
        "altura": "",
        "peso": "",
        "sexo": "",
        "descripcion": "",
        "imagen": "",
        "region": "",
        "habilidad": [

        ],

    },
    "pokemon3": {
        "nombre": "",
        "tipo": [
            tipos[0],
        ],
        "altura": "",
        "peso": "",
        "sexo": "",
        "descripcion": "",
        "imagen": "",
        "region": "",
        "habilidad": [

        ],

    },
    "pokemon4": {
        "nombre": "",
        "tipo": [
            tipos[0],
        ],
        "altura": "",
        "peso": "",
        "sexo": "",
        "descripcion": "",
        "imagen": "",
        "region": "",
        "habilidad": [

        ],

    },
    "pokemon5": {
        "nombre": "",
        "tipo": [
            tipos[0],
        ],
        "altura": "",
        "peso": "",
        "sexo": "",
        "descripcion": "",
        "imagen": "",
        "region": "",
        "habilidad": [

        ],

    },
    "pokemon6": {
        "nombre": "",
        "tipo": [
            tipos[0],
        ],
        "altura": "",
        "peso": "",
        "sexo": "",
        "descripcion": "",
        "imagen": "",
        "region": "",
        "habilidad": [

        ],

    },
    "pokemon7": {
        "nombre": "",
        "tipo": [
            tipos[0],
        ],
        "altura": "",
        "peso": "",
        "sexo": "",
        "descripcion": "",
        "imagen": "",
        "region": "",
        "habilidad": [

        ],

    },
    "pokemon8": {
        "nombre": "",
        "tipo": [
            tipos[0],
        ],
        "altura": "",
        "peso": "",
        "sexo": "",
        "descripcion": "",
        "imagen": "",
        "region": "",
        "habilidad": [

        ],

    },
    "pokemon9": {
        "nombre": "",
        "tipo": [
            tipos[0],
        ],
        "altura": "",
        "peso": "",
        "sexo": "",
        "descripcion": "",
        "imagen": "",
        "region": "",
        "habilidad": [

        ],

    },
    "pokemon10": {
        "nombre": "",
        "tipo": [
            tipos[0],
        ],
        "altura": "",
        "peso": "",
        "sexo": "",
        "descripcion": "",
        "imagen": "",
        "region": "",
        "habilidad": [

        ],

    },
    "pokemon11": {
        "nombre": "",
        "tipo": [
            tipos[0],
        ],
        "altura": "",
        "peso": "",
        "sexo": "",
        "descripcion": "",
        "imagen": "",
        "region": "",
        "habilidad": [

        ],

    },
    "pokemon12": {
        "nombre": "",
        "tipo": [
            tipos[0],
        ],
        "altura": "",
        "peso": "",
        "sexo": "",
        "descripcion": "",
        "imagen": "",
        "region": "",
        "habilidad": [

        ],

    },
    "pokemon13": {
        "nombre": "",
        "tipo": [
            tipos[0],
        ],
        "altura": "",
        "peso": "",
        "sexo": "",
        "descripcion": "",
        "imagen": "",
        "region": "",
        "habilidad": [

        ],

    },
    "pokemon14": {
        "nombre": "",
        "tipo": [
            tipos[0],
        ],
        "altura": "",
        "peso": "",
        "sexo": "",
        "descripcion": "",
        "imagen": "",
        "region": "",
        "habilidad": [

        ],

    },
    "pokemon15": {
        "nombre": "",
        "tipo": [
            tipos[0],
        ],
        "altura": "",
        "peso": "",
        "sexo": "",
        "descripcion": "",
        "imagen": "",
        "region": "",
        "habilidad": [

        ],

    },
}

