const words = document.getElementById('words');
const wordList = ["apple", "brick", "jungle", "lamp", "smile", "pencil", "dream", "cloud", "button", "shadow", "flute", "puzzle", "river", "garden", "rocket", "sneeze", "candle", "window", "bucket", "bridge", "forest", "socks", "rabbit", "castle", "planet", "whistle", "tunnel", "crystal", "sunset", "mirror", "bubble", "ladder", "pirate", "island", "tiger", "wallet", "pillow", "shovel", "pencil", "treasure", "helmet", "dragon", "glove", "balloon", "sketch", "storm", "cactus", "banana", "hammer", "comet", "ocean", "sparrow", "feather", "quartz", "plasma", "ticket", "jacket", "rocket", "basket", "compass", "guitar", "window", "sailor", "anchor", "copper", "marble", "arrow", "breeze", "tulip", "horizon", "lantern", "sunbeam", "wizard", "carpet", "sequin", "acorn", "gemstone", "pepper", "scroll", "mountain", "mantis", "vortex", "flower", "canvas", "meadow", "velvet", "zebra", "potion", "ribbon", "harvest", "petal", "boulder", "saturn", "violet", "kitten", "daisy", "mirror", "dragon", "quiver", "hollow", "paddle", "orbit", "beacon", "crescent", "petal", "zipper", "ginger", "nugget", "blizzard", "canyon", "skater", "pencil", "thunder", "walrus", "ember", "riddle", "cupcake", "jigsaw", "cobalt", "vortex", "pickle", "shimmer", "crescent", "lizard", "portal", "trumpet", "asteroid", "icicle", "napkin", "tornado", "freckle", "juniper", "pyramid", "bamboo", "raven", "candle", "muscle", "geyser", "sparrow", "camera", "castle", "mantis", "jigsaw", "ribbon", "violet", "goblin", "jelly", "pebble", "spark", "parrot", "gravel", "butter", "stripe", "tunnel", "cricket", "stream", "blossom", "galaxy", "fiddle", "whistle", "meteor", "shadow", "icicle", "pepper", "amber", "wizard", "garden", "sphinx", "orchid", "hurdle", "feather", "dandelion", "prism", "cocoon", "carrot", "prism"];
let lives = 3;
let seenWords = [];
let score = 0;

function displayNewWord() {
    const probability = Math.random();
    if(seenWords.length < 5 || probability < 0.6) {
        const word = wordList[Math.floor(Math.random() * wordList.length)];
        document.getElementById('words').textContent = word;
    } else {
        const word = seenWords[Math.floor(Math.random() * seenWords.length)];
        document.getElementById('words').textContent = word;
    }
}

document.getElementById('new').addEventListener('click', function() {
    const curWord = document.getElementById('words').textContent;
    if (seenWords.includes(curWord)) {
        lives -= 1;
        if (lives === 0) {
            alert('Game Over');
            location.reload();
        }
        document.getElementById('lives').textContent = "Lives: " + lives;
    } else {
        seenWords.push(curWord);
        score += 1;
        document.getElementById('score').textContent = "Score: " + score;
    }
    displayNewWord();
});

document.getElementById('seen').addEventListener('click', function() {
    const curWord = document.getElementById('words').textContent;
    if(!seenWords.includes(curWord)) {
        lives -= 1;
        if (lives === 0) {
            alert('Game Over');
            location.reload();
        }
        document.getElementById('lives').textContent = "Lives: " + lives;
    } else {
        score += 1;
        document.getElementById('score').textContent = "Score: " + score;
    }
    displayNewWord();
});

displayNewWord();
