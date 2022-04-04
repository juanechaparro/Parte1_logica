
const pokemons = 'audino bagon baltoy banette bidoof braviary bronzor carracosta charmeleon cresselia croagunk darmanitan deino emboar emolga exeggcute gabite girafarig gulpin haxorus heatmor heatran ivysaur jellicent jumpluff kangaskhan kricketune landorus ledyba loudred lumineon lunatone machamp magnezone mamoswine nosepass petilil pidgeotto pikachu pinsir poliwrath poochyena porygon2 porygonz registeel relicanth remoraid rufflet sableye scolipede scrafty seaking sealeo silcoon simisear snivy snorlax spoink starly tirtouga trapinch treecko tyrogue vigoroth vulpix wailord wartortle whismur wingull yamask'
const pkList = pokemons.split(' ');
// console.log(pkList);
// Devuelve el index of de la proxuma palabra que empiza por la ultima letra de la palabra anterior
let nameListCopy =[];
function longestPokeList(pkList) {
  
let longestArray =[];
let pokeResults=[];
const  nextStartIndex = (lastLetter, pkList) => {
   
    for (let i = 0; i < pkList.length; i++) {
        if (pkList[i].charAt(0) === lastLetter) {
            return i;
        }
    }
   
    return false
}

  
    for (const name of pkList) {
        let actPokemon = name;
        pokeResults.push(actPokemon);
        nameListCopy=pkList;
        nameListCopy.shift();
        // toma el proximo inidce
        let nextIndex = nextStartIndex(actPokemon.charAt(actPokemon.length - 1), nameListCopy);
        // si el proximo indice existe 
        while (nextIndex) {
            actPokemon = nameListCopy[nextIndex];
            // agrega el proximo pokemon a la lista
            pokeResults.push(actPokemon);
            // elimina el pokemon de la lista
            
            nameListCopy.splice(nextIndex, 1);
            nextIndex = nextStartIndex(actPokemon.charAt(actPokemon.length - 1), nameListCopy);
        }
        
        if(pokeResults.length > longestArray.length){
            
            longestArray = pokeResults;
        } 
        pokeResults = [];
     
    }
    // longestPokeList(nameListCopy);
    console.log('result',longestArray);
}

longestPokeList(pkList);
