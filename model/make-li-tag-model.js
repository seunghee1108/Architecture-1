// 포켓몬스터 한글 배열을 HTML li 태그로 만들어주는 함수
function setMakeLiTagPokemonList(pokemonKoreaName) {
  // Array.isArray():Array인지 확인한다.
  // 객체가 Array라면 true
  if(Array.isArray(pokemonKoreaName) === true) {
    let arrayLiTagPokemonList = [];
    for(let i = 0; i < pokemonKoreaName.length; i++) {
      // push():마지막에 새로운 요소를 추가하고 난 후 변경된 배열의 길이를 반환한다.
      arrayLiTagPokemonList.push(`<li>${pokemonKoreaName[i]}</li>`);
    } 
    return arrayLiTagPokemonList.join("");
  } else {
    return new Error("배열이 아닙니다.");
  }
}

module.exports = setMakeLiTagPokemonList;


