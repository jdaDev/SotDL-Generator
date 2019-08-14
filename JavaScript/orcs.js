/**
 * Orc Tables
*/
var orcAge = [
    'You are a child, 8 years old or younger.',
    'You are an adolescent, 8 to 12 years old.',
    'You are an adolescent, 8 to 12 years old.',
    'You are an adolescent, 8 to 12 years old.',
    'You are an adolescent, 8 to 12 years old.',
    'You are a young adult, 13 to 18 years old.',
    'You are a young adult, 13 to 18 years old.',
    'You are a young adult, 13 to 18 years old.',
    'You are a young adult, 13 to 18 years old.',
    'You are a young adult, 13 to 18 years old.',
    'You are a middle-aged adult, 19 to 26 years old.',
    'You are a middle-aged adult, 19 to 26 years old.',
    'You are a middle-aged adult, 19 to 26 years old.',
    'You are an older adult, 27 to 32 years old.',
    'You are an older adult, 27 to 32 years old.',
    'You are a venerable adult, 33 years old or older.'
  ]
  
  var orcBuild = [
    'You are short and wiry.',
    'You are short and muscular.',
    'You are short.',
    'You are short.',
    'You are thin.',
    'You are thin.',
    'You are of average height and weight.',
    'You are of average height and weight.',
    'You are of average height and weight.',
    'You are of average height and weight.',
    'You are corpulent.',
    'You are corpulent.',
    'You are tall.',
    'You are tall.',
    'You are tall and gaunt.',
    'You are a giant among orcs.'
  ]
  
  var orcAppearance = [
    'You are grotesque. Your face is a mass of scar tissue. Thick scars crisscross your body, held together with crude, leather stitching. Swaths of open ' +
    'sores weep streams of pus, and you reek of excrement, blood, and rot.',
    'You are grotesque. Your face is a mass of scar tissue. Thick scars crisscross your body, held together with crude, leather stitching. Swaths of open ' +
    'sores weep streams of pus, and you reek of excrement, blood, and rot.',
    'You are grotesque. Your face is a mass of scar tissue. Thick scars crisscross your body, held together with crude, leather stitching. Swaths of open ' +
    'sores weep streams of pus, and you reek of excrement, blood, and rot.',
    'You are monstrous, with thick, brutish features, weird growths sprouting from your skin, and nasty scars that cut jagged lines across your thick hide.',
    'You are monstrous, with thick, brutish features, weird growths sprouting from your skin, and nasty scars that cut jagged lines across your thick hide.',
    'You are monstrous, with thick, brutish features, weird growths sprouting from your skin, and nasty scars that cut jagged lines across your thick hide.',
    'You are ugly. You have thick tusks jutting from your broad jaw, a sloping forehead, and tiny eyes set deep into your skull.',
    'You are ugly. You have thick tusks jutting from your broad jaw, a sloping forehead, and tiny eyes set deep into your skull.',
    'You are ugly. You have thick tusks jutting from your broad jaw, a sloping forehead, and tiny eyes set deep into your skull.',
    'You are ugly. You have thick tusks jutting from your broad jaw, a sloping forehead, and tiny eyes set deep into your skull.',
    'You are an orc of typical appearance, dirty and unkempt.',
    'You are an orc of typical appearance, dirty and unkempt.',
    'You are an orc of typical appearance, dirty and unkempt.',
    'Your features are somewhat less brutish, though you might have odd skin coloration, extra fur, and thick features.',
    'Your features are somewhat less brutish, though you might have odd skin coloration, extra fur, and thick features.',
    'You stand out from other orcs. Your body is remarkably free from the scars and injuries that maim your fellows, and you are in pretty good health.'
  ]
  
  var orcBackground = [
    'You butchered helpless people. Gain 2 Corruption.',
    'You were briefly possessed by a demon. Gain 2 Corruption.',
    'You spent 1d6 years in the fighting pit, testing your skills against other orcs for the amusement of the crowds.',
    'You stayed loyal to the Empire and fought against other orcs. You were branded as a traitor and cast out.',
    'You caught the rot and lost your nose and ears.',
    'You were chained to the oars in a slave ship for 1d6 years.',
    'You were made a eunuch and stood guard over the emporer\'s concubines.',
    'You have scar tissue over half your body from when you were caught in the blast of a spell.',
    'You escaped your slavery and have lived in the wilderness ever since.',
    'You earned a living working in your profession.',
    'You fell in love with a human and were spurned for your affections.',
    'You sired or gave birth to 3d6 children. Roll 3d6 again and subtract that total from your total number of children to find out how may are still alive.',
    'You traveled extensively. You speak one additional language.',
    'You received an education. You know how to read the Common Tongue.',
    'You fought bravely for the Emporer and were awarded a medal for your courage.',
    'You sved an important noble from an assassination attempt.',
    'A human broke your chains and freed you to find your fortunes in the world.',
    'You took a sword from the corpse of a warrior you killed.',
    'The Gods of Blood and Iron visit you in your dreams. You start the game with 1 Insanity.',
    'You came into money and start the game with 2d6 cp.'
  ]
  
  var orcPersonality = [
    'You fight to liberate your people from slavery.',
    'Orcs are more than the killers the Emporer made them to be. They are people, with hearts and souls, dreams and ambitions. You believe you must rise ' +
    'above the savagery and find your place.',
    'The world is going to Hell. You say, let it.',
    'The world is going to Hell. You say, let it.',
    'You take care of yourself, take what you want, and do what you want.',
    'You take care of yourself, take what you want, and do what you want.',
    'Kill!',
    'Kill!',
    'Kill!',
    'Kill!',
    'You never question orders. You always do as you\'re commanded.',
    'You never question orders. You always do as you\'re commanded.',
    'You want revenge and you\'ll kill anyone that gets in your way.',
    'You want revenge and you\'ll kill anyone that gets in your way.',
    'You believe you were made for a reason. Without your chains, you have no purpose.',
    'You believe your people have committed great acts of evil in the Empire\'s name. You strive to right the wrongs.'
  ]

/**
  * Orc Stats
  */
 var orcStrength = 11;
 var orcAgility = 10;
 var orcIntellect = 9;
 var orcWill = 9;
 var orcPerception = orcIntellect + 1;
 var orcDefense = orcAgility;
 var orcHealth = orcStrength;
 var orcHealingRate = Math.floor(orcHealth / 4);
 var orcSize = 1;
 var orcSpeed = 12;
 var orcPower = 0;
 var orcDamage = 0;
 var orcInsanity = 0;
 var orcCorruption = 1; 

/**
* Orc Functions
*/
function getOrcAge()
{
    // TO-DO -> Add if statements checking which ancestry is selected, then
    // do the following for the appropriate array and length.
    var randomNumber = Math.floor(Math.random() * (orcAge.length));
    document.getElementById('orcAgeDisplay').innerHTML = orcAge[randomNumber];
}

function getOrcBuild()
{
    var randomNumber = Math.floor(Math.random() * (orcBuild.length));
    document.getElementById('orcBuildDisplay').innerHTML = orcBuild[randomNumber];
}

function getOrcAppearance()
{
    var randomNumber = Math.floor(Math.random() * (orcAppearance.length));
    document.getElementById('orcAppearanceDisplay').innerHTML = orcAppearance[randomNumber];
}

function getOrcBackground()
{
    var randomNumber = Math.floor(Math.random() * (orcBackground.length));
    document.getElementById('orcBackgroundDisplay').innerHTML = orcBackground[randomNumber];
}

function getOrcPersonality()
{
    var randomNumber = Math.floor(Math.random() * (orcPersonality.length));
    document.getElementById('orcPersonalityDisplay').innerHTML = orcPersonality[randomNumber];
}

/**
 * Function to create a complete character with the click of a button.
 */
function createCompleteOrcCharacter()
{
    getOrcAge();
    getOrcBuild();
    getOrcAppearance();
    getOrcBackground();
    getOrcPersonality();
}
  