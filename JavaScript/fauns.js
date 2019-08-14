/**
 * Faun Tables
*/
var faunAge = [
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
    'You are a venerable adult, 76 years or older.'
  ]
  
  var faunBuild = [
    'You are short and scrawny, likely due to the harshness of your upbringing.',
    'You are short and round, obviously well fed.',
    'You are short for your kind, no taller than 3 and a half feet.',
    'You are short for your kind, no taller than 3 and a half feet.',
    'You are slender and wiry.',
    'You are slender and wiry.',
    'You have a typical height and weight for a faun.',
    'You have a typical height and weight for a faun.',
    'You have a typical height and weight for a faun.',
    'You have a typical height and weight for a faun.',
    'You are heavy, unusually curvaceous or plump.',
    'You are heavy, unusually curvaceous or plump.',
    'You stand a full foot taller than other fauns.',
    'You stand a full foot taller than other fauns.',
    'You are tall and gaunt.',
    'You tower over other fauns, have large curling ram horns, and a muscled body. Increase your Strength by 2 and reduce your Agility by 2.'
  ]
  
  var faunAppearance = [
    'Little trace of your human heritage appears in your features, and your face is strange and angular. Unusual whorls mark your leathery hide. Others ' +
    'might become uncomfortable when they see you.',
    'You are brutish, more like a wild animal than a person. Your eyes are those of a goat, and your posture is hunched, your gait lurching.',
    'Nothing about you is attractive. Human qualities are evident here and therem but your abundant animal traits overshadow them.',
    'Nothing about you is attractive. Human qualities are evident here and therem but your abundant animal traits overshadow them.',
    'Your animal traits are subdued--your horns are mere nubs, and the fur covering your legs is thin.',
    'Your animal traits are subdued--your horns are mere nubs, and the fur covering your legs is thin.',
    'You look like most other fauns, with small horns on your brow and legs covered in fur down to your cloven feet.',
    'You look like most other fauns, with small horns on your brow and legs covered in fur down to your cloven feet.',
    'You look like most other fauns, with small horns on your brow and legs covered in fur down to your cloven feet.',
    'You look like most other fauns, with small horns on your brow and legs covered in fur down to your cloven feet.',
    'You have an appealing appearance, such as a well-formed body, bright eyes, or warm smile. Your appearance can put others more at ease.',
    'You have an appealing appearance, such as a well-formed body, bright eyes, or warm smile. Your appearance can put others more at ease.',
    'You are quite attractive.',
    'You are quite attractive.',
    'You are so striking to behold that others often want to be around you.',
    'You inherited the very best qualities from your mortal and immortal parents. You have a perfect physique, exotic features, and an air about you ' +
    'that captures the attention of everyone you meet.'
  ]
  
  var faunBackground = [
    'Hunters captured you and subjected you to horrific abuse. You escaped after murdering one or more of your captors.',
    'You were a fool in an elf noble\'s court and have known nothing but mockery and disdain your whole life.',
    'You spent several years as a prisoner of a wizard who believed your blood contained magical power.',
    'You fell in love with a human and had an affair that lasted for a few months before the tryst was exposed and you were chased off.',
    'Zealots of the New God descended on your village and slew everyone but you. Your attackers thought the village was full of beastmen.',
    'You were the plaything of a nymph for many years.',
    'You spent many years living alone in the wilderness.',
    'You had a small family in a remote corner of the Empire, but you lost them to disease or a monster attack.',
    'Poor treatment at faerie or human hands has left you scarred, mentally or physically, or both.',
    'You lived in a human settlement for many years and there learned your profession.',
    'A druid raised you from a baby, and you learned much of the Old Faith.',
    'You grew up in the house of your human parent, where you were loved.',
    'You were a second or third generation faun. You were raised in a remote part of the world, such as a deep forest or a high mountain vale.',
    'A troupe of performers took you in as a small child and raised you. YOu grew up facing the stares of the people who paid a few bits to see you.',
    'A wizard or witch found you and cared for you until you came of age.',
    'You worked as a spy for an inquisitor, who recently died.',
    'A wizard raised you and gave you a formal education. You can read the Common Tongue.',
    'You warned a human village of a monstrous threat. You are always welcoem there.',
    'You befriended a leshy long ago, but you haven\'t seen it in years.',
    'You found or stole a bag of coins. Add 2d6 copper pennie to your starting equipment.'
  ]
  
  var faunPersonality = [
    'You have known nothing but sorrow your whole life. It\'s time to repay others for how they have treated you.',
    'The world is a cruel and unforgiving place. You do whatever you must to survive, even if that means stealing, cheating, or killing.',
    'The world is a cruel and unforgiving place. You do whatever you must to survive, even if that means stealing, cheating, or killing.',
    'You do and say what you please. You try not to hurt other people, but if it happens, there\'s not much you can do about it.',
    'You do and say what you please. You try not to hurt other people, but if it happens, there\'s not much you can do about it.',
    'You do and say what you please. You try not to hurt other people, but if it happens, there\'s not much you can do about it.',
    'You survive by looking after yourself. You have a hard time trusting others or taking them at their word.',
    'You survive by looking after yourself. You have a hard time trusting others or taking them at their word.',
    'You survive by looking after yourself. You have a hard time trusting others or taking them at their word.',
    'You survive by looking after yourself. You have a hard time trusting others or taking them at their word.',
    'You trust yourself to do what is right, even if others disagree with your tactics.',
    'You trust yourself to do what is right, even if others disagree with your tactics.',
    'You trust yourself to do what is right, even if others disagree with your tactics.',
    'You put your best foot forward. If you can prove your heart is good, maybe others will give you a chance.',
    'You put your best foot forward. If you can prove your heart is good, maybe others will give you a chance.',
    'You were born for a reason, to accomplish some great task, to fulfill a great purpose. You hope to find your destiny and do what you were meant to do.'
  ]

/**
  * Faun Stats
  */
 var faunStrength = 10;
 var faunAgility = 11;
 var faunIntellect = 11;
 var faunWill = 9;
 var faunPerception = faunIntellect + 1;
 var faunDefense = faunAgility;
 var faunHealth = faunStrength;
 var faunHealingRate = Math.floor(faunHealth / 4);
 var faunSize = '1/2 or 1';
 var faunSpeed = 12;
 var faunPower = 0;
 var faunDamage = 0;
 var faunInsanity = 0;
 var faunCorruption = 0;


/**
* Faun Functions
*/
function getFaunAge()
{
    // TO-DO -> Add if statements checking which ancestry is selected, then
    // do the following for the appropriate array and length.
    var randomNumber = Math.floor(Math.random() * (faunAge.length));
    document.getElementById('faunAgeDisplay').innerHTML = faunAge[randomNumber];
}

function getFaunBuild()
{
    var randomNumber = Math.floor(Math.random() * (faunBuild.length));
    document.getElementById('faunBuildDisplay').innerHTML = faunBuild[randomNumber];
}

function getFaunAppearance()
{
    var randomNumber = Math.floor(Math.random() * (faunAppearance.length));
    document.getElementById('faunAppearanceDisplay').innerHTML = faunAppearance[randomNumber];
}

function getFaunBackground()
{
    var randomNumber = Math.floor(Math.random() * (faunBackground.length));
    document.getElementById('faunBackgroundDisplay').innerHTML = faunBackground[randomNumber];
}

function getFaunPersonality()
{
    var randomNumber = Math.floor(Math.random() * (faunPersonality.length));
    document.getElementById('faunPersonalityDisplay').innerHTML = faunPersonality[randomNumber];
}

/**
 * Function to create a complete character with the click of a button.
 */
function createCompleteFaunCharacter()
{
    getFaunAge();
    getFaunBuild();
    getFaunAppearance();
    getFaunBackground();
    getFaunPersonality();
}