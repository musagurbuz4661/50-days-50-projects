const panels = document.querySelectorAll(".panel")

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasess()
        panel.classList.add('active')

    })
})

function removeActiveClasess() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}

