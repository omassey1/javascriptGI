let medium = prompt("Type the word Hello...")

function typeOfSpeech(medium) {
    if (medium.toUpperCase()=== medium) {
        prompt('Why are you shouting?')
    } else if (medium.toLowerCase() === medium) {
        prompt('Can you speak up?')
    } else {
        prompt('Thank you!')
    }
}
typeOfSpeech(medium)
