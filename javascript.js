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

var humanReligions = [
    'You belong to a cult dedicated to a dark power.',
    'You belong to a heretical sect.',
    'You were raised in the teachings of witchcraft.',
    'You were raised in the teachings of witchcraft.',
    'You follow the tenets of the Old Faith.',
    'You follow the tenets of the Old Faith.',
    'You follow the tenets of the Old Faith.',
    'You follow the tenets of the Old Faith.',
    'You belong to the Cult of the New God.',
    'You belong to the Cult of the New God.',
    'You belong to the Cult of the New God.',
    'You belong to the Cult of the New God.',
    'You belong to the Cult of the New God.',
    'You have no religion.',
    'You have no religion.',
    'You have no religion.',
]

var humanAges = [
    'You are a child, 11 years old or younger.',
    'You are an adolescent, 12 to 17 years old.',
    'You are an adolescent, 12 to 17 years old.',
    'You are an adolescent, 12 to 17 years old.',
    'You are an adolescent, 12 to 17 years old.',
    'You are a young adult, 18 to 35 years old.',
    'You are a young adult, 18 to 35 years old.',
    'You are a young adult, 18 to 35 years old.',
    'You are a young adult, 18 to 35 years old.',
    'You are a young adult, 18 to 35 years old.',
    'You are a middle-aged adult, 36 to 55 years old.',
    'You are a middle-aged adult, 36 to 55 years old.',
    'You are a middle-aged adult, 36 to 55 years old.',
    'You are an older adult, 56 to 75 years old.',
    'You are an older adult, 56 to 75 years old.',
    'You are a venerable adult, 76 years old or older.'
]

var humanBuilds = [
    'You are short and thin.',
    'You are short and heavy.',
    'You are short.',
    'You are short.',
    'You are slender.',
    'You are slender.',
    'You are average in height and weight.',
    'You are average in height and weight.',
    'You are average in height and weight.',
    'You are average in height and weight.',
    'You are a bit overweight.',
    'You are a bit overweight.',
    'You are tall.',
    'You are tall.',
    'You are tall and thin.',
    'You are very tall and heavy.'
]

var humanAppearances = [
    'You are hideous. You look like a monster. Children cry when they encounter you, the weak of heart faint when they see you, and one person vomited after getting a good look at your face.',
    'You are ugly, and people find your visage unpleasant thanks to a scar, wen, beetling brows, boils, piles, a wandering or weeping eye, or something else of a similar magnitude.',
    'Most consider you homely: not quite ugly, but a bit worse than plain.',
    'Most consider you homely: not quite ugly, but a bit worse than plain.',
    'You are plain and uninteresting to look upon. People notice you, but your appearance fails to make an impression.',
    'You are plain and uninteresting to look upon. People notice you, but your appearance fails to make an impression.',
    'You are perfectly average in appearance. You look like everyone else.',
    'You are perfectly average in appearance. You look like everyone else.',
    'You are perfectly average in appearance. You look like everyone else.',
    'You are perfectly average in appearance. You look like everyone else.',
    'You have a physical quality that makes you attractive to others. You might have pretty eyes, lips, hair, shape, or something else.',
    'You have a physical quality that makes you attractive to others. You might have pretty eyes, lips, hair, shape, or something else.',
    'You have several attractive physical qualities that make you quite comely.',
    'You have several attractive physical qualities that make you quite comely.',
    'You are one of the great beauties in the land, an individual of almost unsurpassed form and appearance. People notice you.',
    'You put beautiful people to shame. You are so striking, heads turn to follow you wherever you go. People become infatuated with you, stumbling over their words and feeling flustered when you show them attention. There’s a fine line between love and hate. Should you spurn the attentions of people you enamor, their affection might sour to resentment and even hatred.'
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
    var randomNumber = Math.floor(Math.random() * (humanReligions.length));
    document.getElementById('religionDisplay').innerHTML = humanReligions[randomNumber];
}

function newAge(){
    var randomNumber = Math.floor(Math.random() * (humanAges.length));
    document.getElementById('ageDisplay').innerHTML = humanAges[randomNumber];
}

function newBuild(){
    var randomNumber = Math.floor(Math.random() * (humanBuilds.length));
    document.getElementById('buildDisplay').innerHTML = humanBuilds[randomNumber];
}

function newAppearance(){
    var randomNumber = Math.floor(Math.random() * (humanAppearances.length));
    document.getElementById('appearanceDisplay').innerHTML = humanAppearances[randomNumber];
}


/**
 * Functions for complete character
 */
function completeBackground(){
    // TO-DO -> Add if statements checking which ancestry is selected, then
    // do the following for the appropriate array and length.
    var randomNumber = Math.floor(Math.random() * (humanBackgrounds.length));
    document.getElementById('characterDisplay').innerHTML = humanBackgrounds[randomNumber];
}

function completePersonality(){
    var randomNumber = Math.floor(Math.random() * (humanPersonalities.length));
    document.getElementById('characterDisplay').innerHTML = humanPersonalities[randomNumber];
}

function completeReligion(){
    var randomNumber = Math.floor(Math.random() * (humanReligions.length));
    document.getElementById('characterDisplay').innerHTML = humanReligions[randomNumber];
}

function completeAge(){
    var randomNumber = Math.floor(Math.random() * (humanAges.length));
    document.getElementById('characterDisplay').innerHTML = humanAges[randomNumber];
}

function completeBuild(){
    var randomNumber = Math.floor(Math.random() * (humanBuilds.length));
    document.getElementById('characterDisplay').innerHTML = humanBuilds[randomNumber];
}

function completeAppearance(){
    var randomNumber = Math.floor(Math.random() * (humanAppearances.length));
    document.getElementById('characterDisplay').innerHTML = humanAppearances[randomNumber];
}

function rolld6(){
    var randomNumber = Math.floor(Math.random() * (6));
    return randomNumber;
}

function roll2d6(){
    var firstRoll = rolld6();
    var secondRoll = rolld6();
    return firstRoll + secondRoll;
}

function roll3d6(){
    var firstRoll = rolld6();
    var secondRoll = rolld6();
    var thirdRoll = rolld6();
    return firstRoll + secondRoll + thirdRoll;
}

function rolld20(){
    var randomNumber = Math.floor(Math.random() * (20));
    return randomNumber;
}

/**
 * Function to create a complete character with the click of a button.
 */
function createCompleteCharacter(){
    //var randomNumberD6 = Math.floor(Math.random() * (16));
    //var randomNumberD20 = Math.floor(Math.random() * (20));

    completeBackground();
}