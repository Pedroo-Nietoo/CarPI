let placa, marca, modelo, ano;
function obterPlaca() {
    placa = document.getElementById("placa")
    if (placa.value.length == 7) {
        return true
    } else {
        return false
    }
}

placa.addEventListener("keypressed", (e) => {
    if (e.key === "Enter") document.getElementById("btn").click();
});

function buscarDados() {
    if (obterPlaca()) {
        // var url = `https://my-json-server.typicode.com/pedroo-nietoo/carpi/placas/?placa=${placa.value.toUpperCase()}`
        // fetch(url)
        //     .then(res => res.json())
        //     .then(data => {
        //         marca = data[0].marca
        //         modelo = data[0].modelo
        //         ano = data[0].ano
        //         alert(`Placa: ${placa.value}\nMarca: ${marca}\nModelo: ${modelo}\nAno: ${ano}`)
        //     })
        var url = `./db.json`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                for (let carro of data.carros) {
                    if (placa.value == carro.placa) {
                        alert(`Placa: ${carro.placa}\nMarca: ${carro.marca}\nModelo: ${carro.modelo}\nAno: ${carro.ano}`)
                    }
                }
            })
    } else {
        alert("Placa inválida")
    }
}