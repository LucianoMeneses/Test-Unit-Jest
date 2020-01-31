//importa os m�dulos e aqruivos necess�rios
const request = require('supertest');
const server = require('../app.js');

//o que ser� executado antes de todos os testes
beforeAll(async () => {
    console.log('Iniciando TDD com jest!');
});

//o que ser� executado ap�s todos os testes
afterAll(() => {
    //o server close ir� encerrar nossa aplica��o, evitando problemas da porta j� estar em uso
    server.close();
    console.log('servidor fechado');
});

describe('inicio dos testes', () => {
    //descri��o do caso de testes
    test('acessa a rota da home e verifica o conte�do que � exibido ', async () => {
        //qual a rota que ele deve acessar e qual requisi��o deve fazer
        const response = await request(server).get('/');
        //qual o status esperado 
        expect(response.status).toEqual(200);
        //se todos esses passos passarem, verifica o conte�do exibido dentro desta rota
        expect(response.text).toContain('<h1>Voc� est� na Home!</h1> <p> vamos come�ar os testes </p>');

    });

    test('acessa a rota /tdd e ent�o ser� apresentada a seguinte defii��o de tdd:', async () => {
        const response = await request(server).get('/TDD');
        expect(response.status).toEqual(200);
        expect(response.text).toContain('<h4>no tdd primeiro fazemos os testes e depois desenvolvemos o sistema para que ele passe nos testes</h4>');
    });

    test('acessa a rota /koa e ent�o ser� apresentada a seguinte defini��o de Koa.js', async () => {
        const response = await request(server).get('/KOA');
        expect(response.status).toEqual(200);
        expect(response.text).toContain('<h4>O Koa � uma nova estrutura da Web criada pela equipe do Express, que pretende ser uma base menor, mais expressiva e mais robusta para aplicativos da Web e APIs</h4>');

    });

    test('adding positive numbers is not zero', () => {

        for (let a = 1; a < 10; a++) {

            for (let b = 1; b < 10; b++) {

                expect(a + b).not.toBe(0);
            }
        }
    });

    test('zero', () => {

        const z = 0;

        expect(z).not.toBeNull();
        expect(z).toBeDefined();
        expect(z).not.toBeUndefined();
        expect(z).not.toBeTruthy();
        expect(z).toBeFalsy();
    });

    test('verify if X is greater or equal the Y', () => {

        const x = 8;

        expect(x).toBeGreaterThan(7);
        expect(x).toBeGreaterThanOrEqual(8);

    });

    test('verify if X is less or equal the Y', () => {

        const x = 20;

        expect(x).toBeLessThan(21);
        expect(x).toBeLessThanOrEqual(20);

    });

})