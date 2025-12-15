"use strict";

function classifyHero(nome, xp) {
	let nivel = "";
	if (xp < 1000) {
		nivel = "Ferro";
	} else if (xp <= 2000) {
		nivel = "Bronze";
	} else if (xp <= 5000) {
		nivel = "Prata";
	} else if (xp <= 7000) {
		nivel = "Ouro";
	} else if (xp <= 8000) {
		nivel = "Platina";
	} else if (xp <= 9000) {
		nivel = "Ascendente";
	} else if (xp <= 10000) {
		nivel = "Imortal";
	} else {
		nivel = "Radiante";
	}
	return nivel;
}

// Variáveis para um herói (pedido do exercício)
const nome = "ExemploHeroi";
const xp = 8500;

const nivel = classifyHero(nome, xp);
console.log(`O Herói de nome ${nome} está no nível de ${nivel}`);

// Demonstração do uso de laço de repetição com vários heróis
const heroes = [
	{ nome: "Aris", xp: 500 },
	{ nome: "Breno", xp: 1500 },
	{ nome: "Clara", xp: 3000 },
	{ nome: "Diana", xp: 6000 },
	{ nome: "Eron", xp: 7500 },
	{ nome: "Fiona", xp: 8200 },
	{ nome: "Galo", xp: 9200 },
	{ nome: "Hera", xp: 15000 }
];

for (let i = 0; i < heroes.length; i++) {
	const h = heroes[i];
	const lvl = classifyHero(h.nome, h.xp);
	console.log(`O Herói de nome ${h.nome} está no nível de ${lvl}`);
}

