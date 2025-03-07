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


    //Calcular lanche

    const inputCodibus = document.getElementById("inputCodi");
    const inputQua = document.getElementById("inputQua");
    const outputValorTotal = document.getElementById("outValorTot");

    document.getElementById("btnEfetCalc").addEventListener("click", async function (event) {
        event.preventDefault();

        let cod = parseInt(inputCodibus.value);
        let qtd = parseInt(inputQua.value); 

        if (isNaN(cod) || isNaN(qtd)) { 
            window.alert("Todos os campos devem estar preenchidos corretamente.");
            return;
        }

        try {
            const resposta = await fetch(`http://localhost:8080/api/calcularLanche/${cod}/${qtd}`);
            const dados = await resposta.json();

            outputValorTotal.textContent = dados; 
        } catch (erro) {
            console.error("Erro ao buscar dados:", erro);
            outputValorTotal.textContent = "Erro ao calcular o valor.";
        }
    });


    //Excluir lanche
    const inputCodiExclu = document.getElementById("inputCodiExclu");

    document.getElementById("btnExcluitLanc").addEventListener("click", async function (event) {
        event.preventDefault();

        let codExcluir = parseInt(inputCodiExclu.value);

        if (isNaN(codExcluir)) {
            window.alert("Todos os campos devem estar preenchidos corretamente.");
            return;
        }

        try {
            const resposta = await fetch(`http://localhost:8080/api/excluirLanche/${codExcluir}`, {
                method: 'DELETE' 
            });

            if (!resposta.ok) {
                throw new Error(`Erro ao excluir o item. Código: ${resposta.status}`);
            }

            window.alert("Item excluído com sucesso");

        } catch (erro) {
            console.error("Erro ao excluir dados:", erro);
            window.alert("Erro ao excluir o item. Tente novamente.");
        }
    });


    //Atualizar Lanche


    const atualCodigo = document.getElementById("inputCodiAtua");
    const atualNome = document.getElementById("inputNomeLancheAtua");
    const atualPreco = document.getElementById("inputPrecoLancheAtua");
    const atualImagem = document.getElementById("inputCodiAtua");

    document.getElementById("btnAtualizar").addEventListener("click", function (event) {

        event.preventDefault();

        const codigoValor = parseInt(atualCodigo.value);
        const nomeValor = atualNome.value;
        const precoValor = parseFloat(atualPreco.value);
        const imagValor = atualImagem.value;

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

        fetch(`http://localhost:8080/api/atualizarLanche/${codigoValor}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(lanche)
        })
            .then(response => response.json())
            .then(data => {
                console.log("Resposta da API", data);
                window.alert("Lanche Atualizado com sucesso!");
            })
            .catch(error => {
                console.error("Erro:", error);
                window.alert("Erro ao atualizar o produto.");
            });
    });





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
    document.getElementById("btnCalculLan").addEventListener("click", () => menuHambu(formCalcLanche));
    document.getElementById("btnExcluirLan").addEventListener("click", () => menuHambu(formExcluirLanche));
    document.getElementById("btnAtulizarLan").addEventListener("click", () => menuHambu(formAtuaLanche));

    
});
