function verificarIdade(idade){
	if(idade >= 18){
		return "Maior de idade";	
	}else{
		return "Menor de idade";}

	}
}

let idade = Number(prompt("Digite sua idade: "));

console.log(verificarIdade(idade));