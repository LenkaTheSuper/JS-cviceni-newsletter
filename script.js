const odber = document.querySelector("#odber")
const email = document.querySelector("#email")
const text2 = document.querySelector("#text2")

const myFce = (event) => {
    event.preventDefault()
    if (email.value.length == 0) {
        text2.textContent = "*prosím vyplňte pole"
        text2.classList.add("red")
    } else {
        odber.textContent = `Děkujeme za váš zájem. Těšte se na novinky ze světa frontendu a UX na vaší adrese ${email.value}`
        odber.classList.add("filled")
    }
}

odber.addEventListener("submit", myFce)