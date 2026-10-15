const form = document.getElementById("form_to-do")
const input = document.getElementById("input_to-do")
const lista = document.getElementById("listaElemento")

form.addEventListener('submit', function(event){
    event.preventDefault()

    const taskText = input.value
    
    const li = document.createElement("li")
    li.textContent = taskText

    const deleteBtn = document.createElement("button")
    deleteBtn.textContent = "X"
    deleteBtn.classList.add("delete-btn")

    deleteBtn.addEventListener("click", function() {
        lista.removeChild(li)
    })

    li.appendChild(deleteBtn)
    lista.appendChild(li)

    input.value = ""
    
})
