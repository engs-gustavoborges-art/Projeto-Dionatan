const carros = {
ferrari: {
    nome: "Ferrari SF90",
    velocidade: "340 km/h",
    aceleracao: "2.5s",
    preco: "R$ 4 milhões"
},
lambo: {
    nome: "Lamborghini Aventador",
    velocidade: "350 km/h",
    aceleracao: "2.9s",
    preco: "R$ 3 milhões"
},
onix: {
    nome: "Onix",
    velocidade: "180 km/h",
    aceleracao: "10s",
    preco: "R$ 80 mil"
},
civic: {
    nome: "Honda Civic",
    velocidade: "200 km/h",
    aceleracao: "8s",
    preco: "R$ 130 mil"
},
corolla: {
    nome: "Toyota Corolla",
    velocidade: "190 km/h",
    aceleracao: "9s",
    preco: "R$ 140 mil"
},
bmw: {
    nome: "BMW M3",
    velocidade: "290 km/h",
    aceleracao: "3.9s",
    preco: "R$ 600 mil"
},
gol: {
    nome: "Gol 1.0 2014",
    velocidade: "160 km/h",
    aceleracao: "12s",
    preco: "R$ 25 mil"
},
uno: {
    nome: "Fiat Uno 1.0 2012",
    velocidade: "155 km/h",
    aceleracao: "13s",
    preco: "R$ 20 mil"
},
corsa: {
    nome: "Chevrolet Corsa Premium 1.4 2010",
    velocidade: "165 km/h",
    aceleracao: "11s",
    preco: "R$ 18 mil"
},
jetta: {
    nome: "Volkswagen Jetta GLI 2.0 2023",
    velocidade: "240 km/h",
    aceleracao: "6.5s",
    preco: "R$ 200 mil"
},
fox: {
    nome: "Volkswagen Fox 1.6 2011",
    velocidade: "170 km/h",
    aceleracao: "10s",
    preco: "R$ 30 mil"
},
polo: {
    nome: "Volkswagen Polo Sedan 2.0 2013",
    velocidade: "210 km/h",
    aceleracao: "8.5s",
    preco: "R$ 50 mil"
},
peugeot: {
    nome: "Peugeot 408 Griffe 1.6 Turbo 2015",
    velocidade: "215 km/h",
    aceleracao: "7.5s",
    preco: "R$ 65 mil"
},
compass: {
    nome: "Jeep Compass 2.0 2017",
    velocidade: "190 km/h",
    aceleracao: "9s",
    preco: "R$ 100 mil"
},
siena: {
    nome: "Fiat Siena Sublime 1.6 2018",
    velocidade: "180 km/h",
    aceleracao: "9.5s",
    preco: "R$ 40 mil"
}
};
function comparar() {
    // Pega os valores selecionados
    let c1 = document.getElementById("carro1").value;
    let c2 = document.getElementById("carro2").value;

    // Verifica se ambos os carros foram selecionados
    if (c1 === "" || c2 === "") {
        alert("Escolha dois carros!");
        return;
    }

    // Preenche a tabela com os dados do carro 1
    document.getElementById("nome1").innerText = carros[c1].nome;
    document.getElementById("v1").innerText = carros[c1].velocidade;
    document.getElementById("a1").innerText = carros[c1].aceleracao;
    document.getElementById("p1").innerText = carros[c1].preco;

    // Preenche a tabela com os dados do carro 2
    document.getElementById("nome2").innerText = carros[c2].nome;
    document.getElementById("v2").innerText = carros[c2].velocidade;
    document.getElementById("a2").innerText = carros[c2].aceleracao;
    document.getElementById("p2").innerText = carros[c2].preco;
}