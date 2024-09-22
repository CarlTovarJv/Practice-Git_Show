let calculadora = {
    sumar: function suma(a, b){
        return a + b
    },
    restar: function resta(a, b){
        return a - b
    },
    multiplicar: function multi(a, b){
      return a * b
    },
    dividir: function divide(a, b){
        return a / b
    },
    cuadrado: function exponentes(a){
        return Math.pow(a, 2)
    },
    raiz: function raizCuadrada(a){
        return Math.sqrt(a)
    }

    }

    console.log(calculadora.dividir(3, 5))