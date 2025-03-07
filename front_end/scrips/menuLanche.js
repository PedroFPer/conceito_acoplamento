document.addEventListener("DOMContentLoaded", () => {
    const inputCodigoCadas = document.getElementById("inputCodigo");
    const inputNomeLanche = document.getElementById("inputNomeLanche");
    const inputPrecoLanche = document.getElementById("inputPrecoLanche");
    const inputImgLanche = document.getElementById("inputImgLanche");


    document.getElementById("btnCadastraLanche").addEventListener("click", function (event) {

        event.preventDefault();

        const codigoValor = parseInt(inputCodigoCadas.value);
        const nomeValor = inputNomeLanche.value;
        const precoValor = parseFloat(inputPrecoLanche.value);
        const imagValor = inputImgLanche.value;

        if (!codigoValor || !nomeValor || !precoValor || !imagValor) {
            window.alert("Todos os campos são obrigatórios!");
            return;
        }

        const lanche = {
            codigo: codigoValor,
            nome: nomeValor,
            preco: precoValor,
            imagem: imagValor
        };

        fetch("http://localhost:8080/api/cadastrar", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(lanche)
        })
            .then(response => response.json())  
            .then(data => {
                console.log("Resposta da API", data);
                window.alert("Lanche cadastrado com sucesso!");
            })
            .catch(error => {
                console.error("Erro:", error);
                window.alert("Erro ao cadastrar o produto.");
            });
    });
});
