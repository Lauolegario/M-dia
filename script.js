let nota1 = 8;
let nota2 = 6;
let nota3 = 4;
let media = (nota1 + nota2 + nota3) / 3;

console.log(media);

if (media < 5) {
   console.log(" Aluno reprovado");
} else if (media > 5 && media < 7) {
   console.log(" Aluno de recuperação");
} else if (media > 7) {
   console.log(" Aluno aprovado");
}