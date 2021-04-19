

    // fetch('https://pokeapi.co/api/v2/pokemon?limit=898')
    // .then(response => response.json())
    // .then(data => {
    //     var nombre, tipo, tipo2


    //     console.log(data);
    //     console.log(data.results[0].name)
    //     return data
    //     // var pokecard = document.getElementById('pokecard')
    // })
    // .catch(err => console.log(err))

    

    // fetch('https://pokeapi.co/api/v2/pokemon/1/')
    // .then(response => response.json())
    // .then(data => {
    //         console.log(data);
        
    //     return data
    //     // var pokecard = document.getElementById('pokecard')
    // })
    // .catch(err => console.log(err))




    // data.game_indices[3].game_index           indice del pokemon

//  for (let i = 1; i <= 898; i++){
//             fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`)
//             .then(response => response.json())
//             .then(data => {
//                 let tbody = document.getElementsByTagName('tbody')
//                 if (data.types.length < 2){
//                     tbody = `
//                     <tr>
//                     <th scope="row">${i}</th>
//                     <td>${data.forms[0].name}</td>
//                     <td>${data.types[0].type.name}</td>
//                     <td></td>
//                     </tr>
//                     `
//                 }else{
//                     tbody = `
//                     <tr>
//                     <th scope="row">${i}</th>
//                     <td>${data.forms[0].name}</td>
//                     <td>${data.types[0].type.name}</td>
//                     <td>${data.types[1].type.name}</td>
//                     </tr>
//                     `
//                 }

                
//             })
//         }
const typeColor = {
    grass: '#78c850',
    poison: '#a040a0',
    fire: '#f08030',
    water: '#6890f0',
    bug: '#99a81d',
    normal: '#a8a878',
    flying: '#a890f0',
    ground: '#debe67',
    electric: '#f8d030',
    fairy:  '#fb9fbb',
    fighting: '#c03028',
    psychic: '#f8638f',
    rock: '#b8a038',
    ghost: '#5d497e',
    dark: '#705848',
    steel: '#b8b8d0',
    ice: '#98d8d8',
    dragon: '#5930bb'
}


            const createPokemonCard = pokemon => {
                let tbody = document.getElementById('listaPokemon');
                var color = pokemon.types[0].type.name;
                const name = pokemon.name;
                const type1 = pokemon.types[0].type.name;
                
                color = typeColor[color]

                if(pokemon.types.length < 2) {
                    tbody.innerHTML += `
                    <tr id="${}" style="background-color: ${color}">
                    <th scope="row">${pokemon.id}</th>
                    <td><span><img src=${pokemon.sprites.front_default}></span></td>
                    <td>${name}</td>
                    <td>${type1}</td>
                    <td></td>
                    </tr>
                    <tr>
                    `
                }else{   
                    var color2 = pokemon.types[1].type.name
                    color2 = typeColor[color2]     
                    const type2 = pokemon.types[1].type.name  

                    tbody.innerHTML += `
                    <tr style="background: linear-gradient(90deg, ${color}, ${color2}) ${color}">
                    <th scope="row">${pokemon.id}</th>
                    <td><span><img src=${pokemon.sprites.front_default}></span></td>
                    <td>${name}</td>
                    <td>${type1}</td>
                    <td>${type2}</td>
                    </tr>
                    <tr>
                    `
                }
            }

            const getPokemons = async id => {
                const url = `https://pokeapi.co/api/v2/pokemon/${id}/`;
                const res = await fetch(url)
                const pokemon = await res.json()
                await createPokemonCard(pokemon)
                return pokemon;
            }

            const fetchedPokemons = async () => {
                for(let i = 1; i <= 898; i++){
                    await getPokemons(i);
                }
                const tr = document.getElementsByTagName('tr');
                console.log(tr);
                return tr
            }
            fetchedPokemons()
            