document.addEventListener('DOMContentLoaded', (getData) => {
    //const randomBeer = document.querySelector('.random-beer')
    const beerTitle = document.querySelector('.beer-name')
    const descriptionDisplay = document.querySelector('.description')

    function getData(e) {
        e.preventDefault()

        fetch('https://api.punkapi.com/v2/beers/random')
            .then(response => {
                return response.json()
            })
            .then(data => {
                const name = data[0].name
                console.log(name)
                const description = data[0].description
                //const { volume } = data[0]
                    //const volumeValue = volume.value
                    //const volumeUnit = volume.volumeUnit

                beerTitle.innerHTML = name
                descriptionDisplay.innerHTML = description
            })
    }

})