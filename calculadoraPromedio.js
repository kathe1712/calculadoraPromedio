//  CALCULADORA PROMEDIO  -->   DIANA ALMEIDA
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calcularPromedio(nota1, nota2, nota3) {
  return (nota1 + nota2 + nota3) / 3;
}

function evaluarPromedio(promedio, nombreAlumno) {
  if (promedio >= 7) {
    console.log(`${nombreAlumno}, ¡felicidades! Has aprobado con un promedio de ${promedio.toFixed(2)}.`);
  } else {
    console.log(`${nombreAlumno}, gracias por tu esfuerzo. Nos vemos pronto en clase. El promedio obtenido es ${promedio.toFixed(2)}.`);
  }
}

function main() {
  rl.question('Ingresa el nombre del alumno: ', (nombreAlumno) => {
    rl.question('Ingresa la materia: ', (materia) => {
      rl.question('Ingresa la primera nota (entre 0 y 10): ', (nota1) => {
        rl.question('Ingresa la segunda nota (entre 0 y 10): ', (nota2) => {
          rl.question('Ingresa la tercera nota (entre 0 y 10): ', (nota3) => {
            const notas = [parseFloat(nota1), parseFloat(nota2), parseFloat(nota3)];
            
            if (notas.every(nota => !isNaN(nota) && nota >= 0 && nota <= 10)) {
              const promedio = calcularPromedio(...notas);
              evaluarPromedio(promedio, nombreAlumno);
            } else {
              console.log('Por favor, asegúrate de ingresar notas válidas dentro del rango (de 0 a 10).');
            }

            rl.close();
          });
        });
      });
    });
  });
}

main();