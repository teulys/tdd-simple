
class Calc {

    cuadrado(val) {

        if (val == undefined || val == null) {
            return 'Error, los parametros son obligatorios';
        } 

        if (val < 1) {
            return 'Error, el valor debe ser mayor a cero';
        }

        return val * val;
    }

    rectangulo(base, altura){

        if (base == undefined || altura == undefined || base == null || altura == null) {
            return 'Error, los parametros son obligatorios';
        } 

        if (base < 1 || altura < 1) {
            return 'Error, el valor debe ser mayor a cero';
        }

        return base * altura;

    }

    triangulo(base, altura) {

        if (base == undefined || altura == undefined || base == null || altura == null) {
            return 'Error, los parametros son obligatorios';
        } 

        if (base < 1 || altura < 1) {
            return 'Error, el valor debe ser mayor a cero';
        }
        
        return (base * altura) / 2

    }

}

module.exports = Calc;