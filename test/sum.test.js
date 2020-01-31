    const sum = require('../src/sum');

    //toEqual(params) igual.
    //not.Equal(params) não igual.
    //toBeNull(params) é igual a nulo.
    //not.toBeNull(params) diferente de nulo.
    //toBeDefined(params) é deinido.
    //not.toBeDefined(params) não é definido.
    //toBeTruthy() é verdadeiro.
    //not.toBeTruthy() não verdadeiro.
    //toBeFalsy() é falso.
    //not.toBeFalsy() não é falso.
    //toBeGreaterThan(params) Maior que.
    //toBeGreaterThanOrEqual(params) maior ou igual a.
    //toBeLessThan(params) menor que.
    //toBeLessThanOrEqual(params) menor ou igual a.
    //toBeCloseTo(params) Compara valores de ponto flutuante.
    //toContain(params) verifica se no array contem um intem específico.
    //toThrow() verifica se uma exceção é lançada.

    //Test Object
    test('object assignment', () => {

      const data = {
        one: 8,
        two: 9
      };

      expect(data).toEqual({
        one: 8,
        two: 9
      });

    });

    //Test values null, undefined.
    test('null', () => {

      const n = null;

      expect(n).toBeNull();
      expect(n).toBeDefined();
      expect(n).not.toBeUndefined();
      expect(n).not.toBeTruthy();
      expect(n).toBeFalsy();

    });

    //Numerical values
    test('subtraction de 5-10', () => {

      const resul = 10 - 5;

      expect(resul).toBe(5);

    });

    test('adds 1 + 2 to equal 3', () => {

      expect(sum(1, 2)).toEqual(3);

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

    test('adding floating point numbers', () => {

      const value = 0.1 + 0.2;

      //expect(value).toBe(0.3);          
      expect(value).toBeCloseTo(0.3);

    });

    //Test values booleans
    test('Verify if X is true, is if Y is false', () => {

      const z = {
        x: true,
        y: false
      }

      expect(z.x).toBeTruthy();
      expect(z.x).not.toBeFalsy();
      expect(z.y).toBeFalsy();
      expect(z.y).not.toBeTruthy();

    });

    //Values Strings
    test('there is no I in team', () => {
      expect('team').not.toMatch(/I/);
    });

    test('but there is a "stop" in Christoph', () => {
      expect('Christoph').toMatch(/stop/);
    });

    //Array
    const shoppingList = [
      'diapers',
      'kleenex',
      'trash bags',
      'paper towels',
      'beer',
    ];

    test('the shopping list has beer on it', () => {

      expect(shoppingList).toContain('beer');
      expect(new Set(shoppingList)).toContain('beer');

    });

    //Exception

    function compileAndroidCode() {
      throw new Error('you are using the wrong JDK');
    }

    test('compiling android goes as expected', () => {

      expect(compileAndroidCode).toThrow();
      expect(compileAndroidCode).toThrow(Error);

      // You can also use the exact error message or a regexp
      expect(compileAndroidCode).toThrow('you are using the wrong JDK');
      expect(compileAndroidCode).toThrow(/JDK/);
    });

    //Async Await

  /*  test('the data is peanut butter', async () => {

      const data = await fetchData();

      console.log(data);

      expect(data).toBe('peanut butter');

    })*/;