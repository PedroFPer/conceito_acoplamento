document.addEventListener("DOMContentLoaded", () => {
    const inputCodigoCadas = document.getElementById("inputCodigo");
    const inputNomeLanche = document.getElementById("inputNomeLanche");
    const inputPrecoLanche = document.getElementById("inputPrecoLanche");
    const inputImgLanche = document.getElementById("inputImgLanche");
    const formCadas = document.getElementById("formCadastro")

    //CadastroLanche
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

    //Listar Lanche

    async function listarLanches() {
        try {
            const resposta = await fetch("http://localhost:8080/api/listarLanche");
            const dados = await resposta.json();

            const tbody = document.querySelector("#tabelLanc tbody");

            tbody.innerHTML = '';

            dados.forEach(item => {
                const linha = document.createElement("tr");

                linha.classList.add("linhaTabela");

                Object.values(item).forEach(valor => {
                    const celula = document.createElement("td");
                    celula.textContent = valor;
                    linha.appendChild(celula);

                    celula.classList.add("celulaTabela");
                })
                
                tbody.appendChild(linha);
            });
            
        } catch (error) {
            console.error("Erro ao buscar dados:", erro);
        }
        
    }












    //Função Menu Hamburger
    function menuHambu(toggleInfo) {
        if (toggleInfo.style.display == "flex") {
            toggleInfo.style.display = "none"
        } else {
            toggleInfo.style.display = "flex";
        }
    }

    document.getElementById("btnCadas").addEventListener("click", () => menuHambu(formCadas));
    document.getElementById("btnListarLanche").addEventListener("click", () => {
        menuHambu(tabelLanc);
        listarLanches();
    });
});
