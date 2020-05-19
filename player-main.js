let players = {}

let dropdownSelect = document.querySelector('#player-dropdown')
let ds = dropdownSelect

$.get('http://127.0.0.1:8080/assets/players.json').done((data) => {
    players = data.Players
    players.forEach((player) => {
        const option = document.createElement('option')
        option.textContent = `${player.displayName}, ${player.team}`
        option.value = player.playerId
        ds.appendChild(option)
    })
})

ds.addEventListener('change', (e) => {
    let player_index = ds.options[ds.selectedIndex].value
    let player = players[player_index]
    for (const [attribute, a_value] of Object.entries(player)) {
        let individualAttribute = document.getElementById(attribute)
        individualAttribute.textContent = a_value
    }
})
