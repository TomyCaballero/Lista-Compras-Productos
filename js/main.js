let mainProds = document.getElementById("mainProductos");


function getData(){
    let promesa = fetch("https://fakestoreapi.com/products/", {
        method: "GET"
    });

    promesa.then((response)=>{

            response.json().then( (data)=>{
                createCards(data);
            }//data

            )//then json
            .catch((error)=>{
                console.error("Error en el formato de la respuesta " + error.message);
            })//catch json
        }//response
    )//then
    .catch ( (error)=>{
        console.error("Error en la solicitud " + error.message);
    })//catch

}//getData

function createCards(prods){
    prods.forEach(prod => {
        mainProds.insertAdjacentHTML("beforeend",
        `<div class="card" style="width: 18rem; display: inline-block;">
                <img src="${prod.image}" class="card-img-top" alt="${prod.description}">
            <div class="card-body">
                <h5 class="card-title">${prod.title}</h5>
                <p class="card-text">${prod.category}</p>
                <p class="card-text">${prod.description.slice(0,80)}</p>
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal_${prod.id}">Más Info</button>
            </div>
        </div> <!--Aqui termina el card-->
        <div class="modal fade" id="exampleModal_${prod.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">${prod.title}</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
            ${prod.description}
            <p class="text-end"><strong> $ ${prod.price} MXN </strong></p>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        </div>
        </div>
        </div>
    </div>   
        `)
    });

}//createCards



getData();