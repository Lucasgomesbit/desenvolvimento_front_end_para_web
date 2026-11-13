function calcularMedia(notas){
	let soma = 0;
	for(let nota of notas){
		soma = soma + nota;
	}
	return soma / notas.length;
}

let notas = [];

	for (let i = 1; i <= 3; i++){
	let nota = Number(prompt("Digite a nota " + i));
}

	let media = calcularMedia(notas);

	console.log("Notas :", notas);
	console.log("Média ", media);

	if(media >= 6){
		console.log("Aluno Aprovado");
	}else{
		console.log("Alunos reprovado.")
}