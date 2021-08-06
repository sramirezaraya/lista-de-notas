const $input = document.querySelector("input")
const $add = document.querySelector("button")
const $ul = document.querySelector("ul")

$add.onclick = () =>{
    if (!$input.value)
        return alert("Porfavor, ingrese algo!")
    const html = 
    `<li>
        <span>${$input.value}</span>
        <button onclick="borrar(this)">Eliminar</button>
    </li>`

    $ul.insertAdjacentHTML("beforeend", html)
}

function borrar($elemento) {
    $elemento.parentElement.remove()
}