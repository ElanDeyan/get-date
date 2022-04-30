function start() {
    let buttons = document.querySelectorAll('button')
    buttons.forEach(btn => {
        btn.addEventListener('click', (event) => {
            let element = event.target
            let elementClass = element.id

            switch (elementClass) {
                case 'now':
                    const nowDate = new Date()
                    element.nextElementSibling.innerText = `Data no momento do clique: ${nowDate}`
                    break;
                case 'yesterday':
                    let yesterdayDate = new Date()
                    yesterdayDate.setDate(yesterdayDate.getDate() - 1)
                    element.nextElementSibling.innerText = `Data de ontem no momento do clique atual: ${yesterdayDate}`
                    break;
                case 'ten-years-before':
                    let tenYearsBefore = new Date()
                    tenYearsBefore.setFullYear(tenYearsBefore.getFullYear() - 10)
                    element.nextElementSibling.innerText = `Data de 10 anos atrás no momento do clique atual: ${tenYearsBefore}`
                    break;
                case 'next-week':
                    let nextWeek = new Date()
                    nextWeek.setDate(nextWeek.getDate() + 7)
                    element.nextElementSibling.innerText = `Data da próxima semana no momento do clique atual: ${nextWeek}`
                    break;
                default:
                    break;
            }
        })
    })
}
window.addEventListener('load', start)