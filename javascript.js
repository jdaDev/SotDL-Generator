var humanBackgrounds = [
    'You died and returned to life. You start the game with 1d6 insanity.', // 1
    'You were briefly possessed by a demon. You start the game with 1 corruption.', // 2
    'You spent 1d6 years as a prisoner in a dungeon.',  // 3
    'You murdered someone in cold blood. You start the game with 1 corruption.',    // 4
    'You caught and recovered from a terrible disease.', // 5
    'You belonged to a strange cult and saw many strange things. You start the game with 1 insanity.',  // 6
    'The faerie held you prisoner for 1s20 years.', // 7
    'You lost a loved one and their loss haunts you still.',    // 8
    'You lost a finger, a few teeth, or an ear, or you gained a scar.',
    'You earned a living working in your profession.',
    'You fell in love and the relationship ended well or is ongoing.',
    'You have a spouse and 1d6 - 2 children (minimum 0).',
    'You traveled extensively. you speak one additional language.',
    'You received an education. You know how to read the Common Tongue.',
    'You saved your town from terrible monsters.',
    'You foiled a plot to kill someone important or you brought a killer to justice.',
    'You performed a great deed and are a hero to the people of your hometown.',
    'You found an old treasure map.',
    'Someone important and powerful owes you a favor.',
    'You came into money and start the game with 2d6 cp.'
]

var humanPersonalities = [
    'You are cruel, wicked, and self-serving. You enjoy making others suffer.',
    'You are erratic and unpredictable. You have a hard time keeping your word and tend toward capricious behavior.',
    'Might makes right. Obedience to authority is the highest ideal.',
    'Might makes right. Obedience to authority is the highest ideal.',
    'You look after yourself first and foremost. You are not above double-crossing friends.',
    'You look after yourself first and foremost. You are not above double-crossing friends.',
    'You put your interests and those of your friends above all else.',
    'You put your interests and those of your friends above all else.',
    'You put your interests and those of your friends above all else.',
    'You put your interests and those of your friends above all else.',
    'You help others because it is the right thing to do.',
    'You help others because it is the right thing to do.',
    'You try to do what you think is right, even if it breaks laws and social conventions.',
    'You try to do what you think is right, even if it breaks laws and social conventions.',
    'Your honor and duty guide everything you do.',
    'You are committed to good and noble causes, and you never stray from your beliefs even if your insistence would cost you your life.'
]

function newBackground(){
    // TO-DO -> Add if statements checking which ancestry is selected, then
    // do the following for the appropriate array and length.
    var randomNumber = Math.floor(Math.random() * (humanBackgrounds.length));
    document.getElementById('backgroundDisplay').innerHTML = humanBackgrounds[randomNumber];
}

function newPersonality(){
    var randomNumber = Math.floor(Math.random() * (humanPersonalities.length));
    document.getElementById('personalityDisplay').innerHTML = humanPersonalities[randomNumber];
}

function newReligion(){

}

function newAge(){

}

function newBuild(){

}

function newAppearance(){

}