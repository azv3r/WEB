export async function jigglypuff() {
    let data = await fetch('https://pokeapi.co/api/v2/pokemon/jigglypuff/')
    let jsonValue = await data.json()

    
    function jigglyInfo(value) {
        let template = ''
        template += `<img style="width: 300px" src="${value.sprites.front_default}">`
        template += `<h3>${value.name}<h3/>`
        template += `
        <h5>Abilities</h5>
        <ul>
        `
        value.abilities.map(item => {
            template += `<li>${item.ability.name}</li>`
        })

        template += '</ul>'

        app.innerHTML = template
    }

    jigglyInfo(jsonValue)
}