
let carrito = document.querySelector("#carrito_numero")
let boton = document.querySelector("#Más")
boton.addEventListener("click", function(){
let contador = parseInt(carrito.innerText);

carrito.innerText = contador + 1;
})


let carritoo = document.querySelector("#carrito_numero")
let botonn = document.querySelector("#Máss")
botonn.addEventListener("click", function(){
let contador = parseInt(carritoo.innerText);

carritoo.innerText = contador + 1;
})




const foto = document.getElementById("fotop")

foto.addEventListener("mouseover", function () {
    foto.src = ("static/img/comida-mexicana2.jpg");
});
foto.addEventListener("mouseout", function () {
    foto.src = "static/img/comida-mexicana.jpg"
});

const login = document.querySelector("#loginn")
login.addEventListener("click", function(){
    let email = document.getElementById("email").value;
    alert(`Hola, ${email}`)
})