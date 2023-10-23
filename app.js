// 내장모듈 불러오기
const http = require('http');
// HTML-model 모듈 불러오기 (내가 만든 외부모듈 불러오기)
const HTMLTemplate = require('./model/HTML-model');


const contentType = {
  'Content-Type' : 'text/html',
  'charset' : 'utf-8',
}

const server = http.createServer(function(request, response) {
 if(request.method === 'GET' && request.url === '/') {
  response.writeHead(200, contentType);
  response.end(HTMLTemplate);
 } else {
  response.writeHead(404, contentType);
  response.end('<h1>페이지 요청데이터를 찾을 수 없을 때 404에러를 응답하는 것이 HTTP 프로토콜</h1>')
 }
});

server.listen(3000, function(){
  console.log('서버가 가동중입니다. 끄려면 Ctrl + c 를 누르세요');
});