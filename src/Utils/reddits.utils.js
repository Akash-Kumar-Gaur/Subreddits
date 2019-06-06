/**
 * Redits
 * 
 * Politics
 * News
 * Videos
 * Futurology
 * Gaming
 * Gifs
 * Gadgets
 * Jokes
 * Sports
 * Movies
 * Memes
 * Science
 * Gameofthrones
 * Technology
 */

export function getAllReddits() {
    return (
        [{
            name: 'Politics',
            endPoint: 'https://www.reddit.com/r/politics.json',
            icon: 'fas fa-bullhorn',
            isSelected: false
        }, {
            name: 'Videos',
            endPoint: 'https://www.reddit.com/r/videos.json',
            icon: 'fas fa-film',
            isSelected: false
        }, {
            name: 'Futurology',
            endPoint: 'https://www.reddit.com/r/Futurology.json',
            icon: 'fab fa-battle-net',
            isSelected: false
        }, {
            name: 'Gaming',
            endPoint: 'https://www.reddit.com/r/gaming.json',
            icon: 'fas fa-gamepad',
            isSelected: false
        }, {
            name: 'Gifs',
            endPoint: 'https://www.reddit.com/r/gifs.json',
            icon: 'fas fa-gift',
            isSelected: false
        }, {
            name: 'Gadgets',
            endPoint: 'https://www.reddit.com/r/gadgets.json',
            icon: 'fas fa-dice',
            isSelected: false
        },{
            name: 'Sports',
            endPoint: 'https://www.reddit.com/r/sports.json',
            icon: 'fas fa-skiing',
            isSelected: false
        }, {
            name: 'Science',
            endPoint: 'https://www.reddit.com/r/science.json',
            icon: 'fas fa-flask',
            isSelected: false
        }, {
            name: 'Memes',
            endPoint: 'https://www.reddit.com/r/memes.json',
            icon: 'fab fa-mastodon',
            isSelected: false
        }, {
            name: 'GOT',
            endPoint: 'https://www.reddit.com/r/gameofthrones.json',
            icon: 'fas fa-chess',
            isSelected: false
        }]
    )
}