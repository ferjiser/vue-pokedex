var app = new Vue({
    el: '#app',
    data: {
        TYPE_COLOR: {
            "grass": "#78C850",
            "poison": "#A040A0",
            "fire": "#F08030",
            "flying": "#A890F0",
            "water": "#6890F0",
            "bug": "#A8B820",
            "normal": "#A8A878",
            "electric": "#F8D030"
        },
        pokemons: [],
        searchText: ''
    },
    created(){
        fetch('https://api.jsonbin.io/b/5ab37f77989617146bd6eb29')
            .then(response => response.json())
            .then(pokemons => this.pokemons = pokemons
        )
    },
    methods: {
        removePokemon(pokemonToRemove){
            this.pokemons = this.pokemons.filter(pokemon => pokemon !== pokemonToRemove);
        }
    },
    computed: {
        filteredPokemons(){
            //Vue es capaz de saber que depende de this.pokemons y de this.searchText y si alguna cambia se actualiza
            return this.pokemons.filter(pokemon => pokemon.name.includes(this.searchText));
        }
    }
});