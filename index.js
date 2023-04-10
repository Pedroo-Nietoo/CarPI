let placa, marca, modelo, ano;
function obterPlaca() {
    placa = document.getElementById("placa")
}

placa = addEventListener("keypressed", (e) => {
    if (e.key === "Enter") document.getElementById("btn").click();
})

function buscarDados() {
    obterPlaca()
    var url = `https://my-json-server.typicode.com/pedroo-nietoo/carpi/placas/?placa=${placa.value.toUpperCase()}`
    fetch(url)
        .then(res => res.json())
        .then(data => {
            marca = data[0].marca
            modelo = data[0].modelo
            ano = data[0].ano
            alert(`Placa: ${placa.value}\nMarca: ${marca}\nModelo: ${modelo}\nAno: ${ano}`)
        })
}