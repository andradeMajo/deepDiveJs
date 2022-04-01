describe('JavaScript teórico y su comportamiento', function() {

// En este ejercicio vamos a trabajar distinto, las funciones en deepJs.js ya están armadas,
// lo que que hay que hacer es poner el resultado correcto del test.
// Traten de primero pensarlo y armarse una respuesta que puedan justificar.
// Van a tener que considerar scopes, hoisting y todo lo que aprendieron de la teoria.

  describe('Scopes de función y bloque', function() {

    it('¿Qué tipo retorna la función scopes?', function() {
      expect(typeof scopes()).toEqual("undefined");
    });
    //La funcion otroScope no retorna,su valor es undifined, por lo tanto al igualarlo a una variable, esta, de igual forma,es considerada como undifined 
    it('¿Qué valor retorna la función bloque?', function() {
      expect(bloque()).toEqual("Guille");
    });
//llamar a la funcion, que no retorna nada, no afecta a la variable nombre. Tambien, como es modificada por el if y el scope más cercano de la variable es el de la condición :)
  });

  describe('Precedencia y Asociatividad', function() {

    it('Triple igualdad',function() {
      expect(igualdad()).toEqual(3);
    });
    // las tres variables tienen el valor de 3. bazz=3, bar=bazz (3) foo=(3)bar 

    it('Doble comparación ordenada',function() {
      expect(boolean(true)).toEqual(true);
    });
//bool = true, me toma el primer condicional (if) y me retorna 1,2,3 (true) y si bool=false, me retorna 2 1 3 (1 es menor que tres) 2<true (esto es true)
    it('Doble comparación desordenada',function() {
      expect(boolean(false)).toEqual(true);
    })
  })
});
