//esse arquivo � o nosso servidor
const Koa = require('koa');
const Router = require('koa-router');
const logger = require('koa-logger');
//iniciamos uma nova aplica��o Koa
const app = new Koa();
//iniciamos as rotas
const router = new Router();

//habilitamos o uso do Koa Logger
app.use(logger());

//faz um get na rota home, o ctx � um esp�cie de m�todo acessor que pega o contexto de uma parte do c�digo e o next informa ao 
//middleware que ap�s terminar esa opera��o pode ir para a pr�xima requisi��o de forma n�o bloqueante
router.get('/', (ctx, next) => {
    ctx.body = '<h1>Voc� est� na Home!</h1> <p> vamos come�ar os testes </p>';
});

router.get('/TDD', (ctx, next) => {
    ctx.body = '<h4>no tdd primeiro fazemos os testes e depois desenvolvemos o sistema para que ele passe nos testes</h4>';
   });

router.get('/KOA', (ctx, next) => {
    ctx.body = '<h4>O Koa � uma nova estrutura da Web criada pela equipe do Express, que pretende ser uma base menor, mais expressiva e mais robusta para aplicativos da Web e APIs</h4>';
   });
//cria as rotas
app.use(router.routes());
//permite todos os tipos de requisi��o,get,post,put,delete
app.use(router.allowedMethods());
//cria o servidor para rodar na porta 3000
const server = app.listen(3001);
//exporta o server para que seja possivel acess�-lo em outras partes do programa
module.exports = server;