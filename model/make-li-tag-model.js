function setMakeLiTagPokemonList(pokemonKoreaName) {
  if(Array.isArray(pokemonKoreaName) === true) {
    let arrayLiTagPokemonList = [];
    for(let i = 0; i < pokemonKoreaName.length; i++) {
      arrayLiTagPokemonList.push(`<li>${pokemonKoreaName[i]}</li>`);
    } 
    return arrayLiTagPokemonList.join("");
  } else {
    return new Error("배열이 아닙니다.");
  }
}

module.exports = setMakeLiTagPokemonList;