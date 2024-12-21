/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors : {
          primarynormal:"#06121E",
          primarydark:"#040f1a",
          primarylight:"#0c2135",

          secondarynormal:"#090d11",
          secondarydark:"#06090c",
          secondarylight:"#1a1f25",

          blacknormal:"#232224",
          blackdark:"#161617",
          blacklight:"#353436",

          whitenormal:"#ffffff",
          whitedark:"#EDEAEF",
          whitelight:"#fefbff",

          orangenormal:"#DF4513",
          orangedark:"#b42b2b",
          orangelight:"#d34040"
      },
      backgroundImage: {
        "bghome" : "url('./assets/bg.svg')"
      },
      lineHeight: {
        'extra-tight': '1.1',
        'extra-loose': '2.5',
      },
    },
  },
  plugins: [],
}

