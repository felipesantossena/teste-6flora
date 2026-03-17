// scroll suave

document.querySelector(".btn-clientes").addEventListener("click", function (e) {

    e.preventDefault()

    document.querySelector("#clientes").scrollIntoView({

        behavior: "smooth"

    })

})



// animação quando aparece na tela

const cards = document.querySelectorAll(".card")

window.addEventListener("scroll", () => {

    cards.forEach(card => {

        let pos = card.getBoundingClientRect().top

        let alturaTela = window.innerHeight

        if (pos < alturaTela - 100) {

            card.style.opacity = 1
            card.style.transform = "translateY(0)"

        }

    })

})

// MENU MOBILE

const toggle = document.querySelector(".menu-toggle")
const menu = document.querySelector(".nav-links")

toggle.addEventListener("click", () => {

    menu.classList.toggle("active")

})


// SCROLL SUAVE

document.querySelectorAll('.nav-links a').forEach(link => {

    link.addEventListener('click', function (e) {

        e.preventDefault()

        const id = this.getAttribute('href')

        document.querySelector(id).scrollIntoView({

            behavior: "smooth"

        })

    })

})

//teste 1
