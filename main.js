var app = new Vue({
    el: '#app',
    data: {
        message: 'hola fictia vuers!',
        pokemon: {
                "id":25,
                "name":"pikachu",
                "image":"images/pokemons/pikachu.png",
                "types":[  
                   "electric"
                ],
                "abilities":[  
                   "lightning-rod",
                   "static"
                ],
                "experience":112,
                "height":4,
                "weight":60
        },
        TYPE_COLOR: {
            "grass": "#78C850",
            "poison": "#A040A0",
            "fire": "#F08030",
            "flying": "#A890F0",
            "water": "#6890F0",
            "bug": "#A8B820",
            "normal": "#A8A878",
            "electric": "#F8D030"
        }
    }
});