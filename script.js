// setTimeout( () => {
//     console.log(123)
// },2000)
// const handdleInterval = setInterval( () => {
//     console.log('its interval')
// },2000
//
// const handlInterval = () => {
//     clearInterval(handdleInterval)
// }
// setTimeout() => {
//     handlClear()
// },10000
//
// console.log(333)
// console.log('hello')

// )

const name = document.querySelector('#name')
const color = document.querySelector('#color')
const submit = document.querySelector('#submit')
const vehicle = document.querySelector('#vehicle')
const model = document.querySelector('#model')
const manufacturer = document.querySelector('#manufacturer')

submit.addEventListener( 'click', () => {
    let value = input.value
    // console.log(value)
    fetch(`https:/swapi.dev/api/people/${value}`)
        .then(res => res.json())

        .then(json => {
            console.log(json.name)
            name.innerHTML = json.name
            color.innerHTML = json.hair_color
            vehicleUrl = json.vehicles[0]
                fetch(vehicleUrl)
                // vehicle.innerHTML =' '
                .then(res => res.json())

                .then(json => {
                    vehicle.innerHTML = json.name
                    model.innerHTML = json.model
                    manufacturer.innerHTML = json.manufacturer
                })
        })
})
