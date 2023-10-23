// 포켓몬스터 한글 배열 불러오기
const _pokemonKoreaName = require('./pokemon-package-model');
// li 태그 만들어주는 모듈 불러오기
const setMakeLiTagPokemonList = require('./make-li-tag-model');

console.log(_pokemonKoreaName);
console.log(typeof(setMakeLiTagPokemonList));
// function

const HTMLTemplate = `
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Pokemon List</title>
</head>
<body>
  <h1>Pokemon List</h1>
  <ul>
    ${setMakeLiTagPokemonList(_pokemonKoreaName)}
  </ul>
</body>
</html>
`;
console.log(HTMLTemplate);

module.exports = HTMLTemplate;