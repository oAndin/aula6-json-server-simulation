console.log("Hello World!");

async function listarProdutos() {
    try {    
        let request = await fetch("http://localhost:3000/produtos");
        let lista = await request.json();
        lista.map((item) => {
            listaDeProdutos.innerHTML += `
            <li>
            <h3>${item.nome}</h3>
            <img src="${item.image_url}" alt="${item.nome}" />
            <h4>R$ ${item.valor}</h4>
            </li>
            `
        })
    } catch(error) {
        alert(error.message)
    }
}
listarProdutos();