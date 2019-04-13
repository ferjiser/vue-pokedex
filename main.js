Vue.prototype.$log = function(message){
    console.log(message);
}

//v-on:click igual onclick
// v-show oculta del dom si no existe pokemon pero hay que hacer la comprobación de que pokemon existe 
// {{$log(pokemon.name) || pokemon.name}} 
//color-by-type lo transforma a camelCase
// const PokemonCard = Vue.component('pokemon-card', {....})
const PokemonCard = {
    props: ['pokemon', 'colorByType'],
    data() {
        return {
            count: 0
        }
    },
    template: '#pokemon-card-template',
    methods: {
        increment(){
            this.count++;
        },
        removePokemon(){
            //this.$emit('remove-pokemon-event', this.pokemon)
            this.$emit('remove-pokemon-event')
        }
    }
}

var app = new Vue({
    el: '#app',
    data() {
        return{
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
            searchText: '',
            filteredText: '',
            selectedPokemonTypes: []
        }
        
    },
    created(){
        fetch('https://api.jsonbin.io/b/5ab37f77989617146bd6eb29')
            .then(response => response.json())
            .then(pokemons => this.pokemons = pokemons
        )
    },
    methods: {
        //no usar arrow function por temas del this
        removePokemon(pokemonToRemove){
            this.pokemons = this.pokemons.filter(pokemon => pokemon !== pokemonToRemove);
        },
        setFilteredText(event){
            this.filteredText = this.searchText;
            this.searchText= '';
        }
    },
    computed: {
        filteredPokemons(){
            //Vue es capaz de saber que depende de this.pokemons y de this.searchText y si alguna cambia se actualiza
            return this.pokemons
            .filter(pokemon => pokemon.name.includes(this.filteredText))
            .filter(pokemon => this.selectedPokemonTypes.length === 0 || pokemon.types.find(type => this.selectedPokemonTypes.includes(type)));;;
        }
    },
    filters: {
        uppercase: function (value) {
          if (!value) return ''
          return value.toUpperCase();
        }
    },
    components: {
        PokemonCard: PokemonCard
    }
    
});