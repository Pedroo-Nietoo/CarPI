let placa;

placa = document.getElementById("placa")
placa = addEventListener("keypressed", (e) => {
    if (e.key === "Enter") document.getElementById("btn").click();
})

function buscarDados() {
    var url =
        fetch(url)
            .then(res => res.json())
            .then(data => {
                marca.value = data[0]
            })
}