
const bttnextInicio = document.getElementById("bttnextInicio")
const bttnextPassword = document.getElementById("bttnextPassword")

const emailUsuario = document.getElementById("emailUsuario")
const passwordUsuario = document.getElementById("passwordUsuario")

const form1 = document.getElementById("inicioID")
const form2 = document.getElementById("passwordID")
const form3 = document.getElementById("finalFase")


emailUsuario.addEventListener("input", function (event) {
    event.preventDefault();

    if (emailUsuario.inputMode.concat("hola@hola.com")) {
        bttnextInicio.addEventListener("click", function (event) {
            event.preventDefault();

            if (bttnextInicio.click) {
                form1.classList.add("hide")
                form2.classList.remove("hide")
            }

        })
    }
})



bttnextPassword.addEventListener("click", function (event) {
    event.preventDefault();

    if (bttnextPassword.click) {
        form2.classList.add("hide")
        form3.classList.remove("hide")
    }

})