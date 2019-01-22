/**
 * Clockwork tables
 */
var clockworkAge = 
[
    'You are new, 5 years old or younger.',
    'You are new, 5 years old or younger.',
    'You are new, 5 years old or younger.',
    'You are new, 5 years old or younger.',
    'You are new, 5 years old or younger.',
    'You are new, 5 years old or younger.',
    'You are experienced, 6 to 10 years old.',
    'You are experienced, 6 to 10 years old.',
    'You are experienced, 6 to 10 years old.',
    'You are experienced, 6 to 10 years old.',
    'You are old, 11 to 50 years old.',
    'You are old, 11 to 50 years old.',
    'You are old, 11 to 50 years old.',
    'You are very old, 51 to 150 years old.',
    'You are very old, 51 to 150 years old.',
    'You are ancient, more than 150 years old.'
  ]
  
var clockworkPurpose = 
[
  'You were built for war. Increase your Strength or Agility by 2.',
  'You were built for war. Increase your Strength or Agility by 2.',
  'You were built for war. Increase your Strength or Agility by 2.',
  'You were built for war. Increase your strength or Agility by 2.',
  'You were built to work. Increase your Strength by 2.',
  'You were built to work. Increase your Strength by 2.',
  'You were built to work. Increase your Strength by 2.',
  'You were built to work. Increase your Strength by 2.',
  'You were built to use magic. Increase your Intellect or Will by 2.',
  'You were built to use magic. Increase your Intellect or Will by 2.',
  'You were built to use magic. Increase your Intellect or Will by 2.',
  'You were built to use magic. Increase your Intellect or Will by 2.',
  'You were built to gather intelligence about or assassinate targets. Increase your Agility or Intellect by 2.',
  'You were built to gather intelligence about or assassinate targets. Increase your Agility or Intellect by 2.',
  'You were built to gather intelligence about or assassinate targets. Increase your Agility or Intellect by 2.',
  'You were built to gather intelligence about or assassinate targets. Increase your Agility or Intellect by 2.',
  'You were built for an inexplicable purpose. Increase one attribute of your choice by 2.',
  'You were built for an inexplicable purpose. Increase one attribute of your choice by 2.',
  'You were built for an inexplicable purpose. Increase one attribute of your choice by 2.',
  'You were built for an inexplicable purpose. Increase one attribute of your choice by 2.'
]
  
  var clockworkForm = 
  [
    'You are a small winged clockwork. Reduce your Health by 5 and your Size to 1/2. You can fly, but you must land at the end of your movement or fall. ' +
    'You are 3 feet tall and weigh 50 pounds.',
    'You are a small spider-like clockwork with functional hands. Reduce your Size to 1/2. You ignore the effects of difficult terrain when you climb. You ' +
    'are 3 feet tall and weigh 50 pounds.',
    'You are a small spider-like clockwork with functional hands. Reduce your Size to 1/2. You ignore the effects of difficult terrain when you climb. You ' +
    'are 3 feet tall and weigh 50 pounds.',
    'You are a small humanoid clockwork. Reduce your Size to 1/2. You are 4 feet tall and weigh 75 pounds.',
    'You are a small humanoid clockwork. Reduce your Size to 1/2. You are 4 feet tall and weigh 75 pounds.',
    'You are a small humanoid clockwork. Reduce your Size to 1/2. You are 4 feet tall and weigh 75 pounds.',
    'You are a small humanoid clockwork. Reduce your Size to 1/2. You are 4 feet tall and weigh 75 pounds.',
    'You are a humanoid clockwork. You are 6 feet tall and weigh 300 pounds.',
    'You are a humanoid clockwork. You are 6 feet tall and weigh 300 pounds.',
    'You are a humanoid clockwork. You are 6 feet tall and weigh 300 pounds.',
    'You are a humanoid clockwork. You are 6 feet tall and weigh 300 pounds.',
    'You are a humanoid clockwork. You are 6 feet tall and weigh 300 pounds.',
    'You are a humanoid clockwork. You are 6 feet tall and weigh 300 pounds.',
    'You are a large humanoid clockwork. Increase your Size to 2, but reduce your Speed and your Defense by 2. You are 10 feet tall and weigh 750 pounds.',
    'You are a large humanoid clockwork. Increase your Size to 2, but reduce your Speed and your Defense by 2. You are 10 feet tall and weigh 750 pounds.',
    'You are a large clockwork with the lower body of a horse. Increase your Size to 2 and your Speed by 2. Reduce your Defense by 3. You are 6 feet long, ' +
    '6 feet tall, and weigh 750 pounds.'
  ]
  
  var clockworkAppearance = 
  [
    'You have a strange and unsettling appearance.',
    'You appear crude and ill-formed.',
    'You appear battered, broken, and in poor repair.',
    'You appear battered, broken, and in poor repair.',
    'You have no facial features or distinguishing marks.',
    'You have no facial features or distinguishing marks.',
    'You have a mere suggestion of facial features.',
    'You have a mere suggestion of facial features.',
    'You have a mere suggestion of facial features.',
    'You have a mere suggestion of facial features.',
    'You appear well made and in good working condition.',
    'You appear well made and in good working condition.',
    'You have a stylized and ornate body.',
    'You have a stylized and ornate body.',
    'You have an ornate body festooned with etchings and ornamental jewels.',
    'You have an exquisite body festooned with elaborate etchings and ornamental jewels, and trimmed in precious metals. If you are dismantled, your body ' +
    'parts are worth 1d6 gc.'
  ]
  
  var clockworkBackground = 
  [
    'Your soul came from Hell. Start the game with 1d3 Corruption.',
    'Your soul was plucked from the Underworld before it could forget its former life. Start the game with 1d6 Insanity and add an extra profession.',
    'You spent 1d20 years in a dormant state.',
    'Your maker treated you poorly. You escaped and now fear your maker will find you.',
    'Fire, plague, or monsters destroyed your home and you are the sole survivor.',
    'You were stolen from the workshop where you were made and lived as a slave for 1d6 years.',
    'Goblins captured you and almost took you apart for scrap materials. You have replaced your missing components with bits of wood, old weapons, and other ' +
    'rubbish.',
    'You were left to find your own way in the world after your maker died.',
    'You fell off a boat and spent 2 years walking to shore.',
    'You worked to fulfill your purpose for 1d6 years.',
    'Choose a member of the group. That character found you and turned your key. You owe that character a debt.',
    'You were one of the 1d6 other clockworks made at the same time. You hope to find them one day.',
    'You were made to be a translator. You can speak one additional language.',
    'You were made to be a scribe. You know how to read and write the common tongue.',
    'Your maker set you free to find your destiny.',
    'You can\'t remember your past. You don\'t know where you came from or how you came to be where you are.',
    'You built a lasting monument in your community.',
    'You found a cryptic message inside your body. You have not yet deciphered its meaning.',
    'You have a sword grafted to one of your arms.',
    'You came into money and start the game with 2d6 cp.'
  ]
  
  var clockworkPersonality = 
  [
    'You hate living things and take pleasure in pulling them apart.',
    'You are terrified of becoming dormant.',
    'Your body gives you power and strength. You use it to enforce your will on others.',
    'Your body gives you power and strength. You use it to enforce your will on others.',
    'Your body gives you power and strength. You use it to enforce your will on others.',
    'You didn\'t ask for this existence, but you make the most of it while you have it.',
    'You search for meaning in a world in which you have no place.',
    'You search for meaning in a world in which you have no place.',
    'You search for meaning in a world in which you have no place.',
    'You search for meaning in a world in which you have no place.',
    'You search for meaning in a world in which you have no place.',
    'You were made to serve. You commit your existence to aiding others.',
    'You don\'t know how you fit into this world, but you will spend your life trying to find out.',
    'You obey the instructions of anyone you deem to be an authority.',
    'You obey the instructions of anyone you deem to be an authority.',
    'Your maker gave you three commandments and you must obey them.'
  ]


/**
* Clockwork Functions
*/
function getClockworkAge()
{
    // TO-DO -> Add if statements checking which ancestry is selected, then
    // do the following for the appropriate array and length.
    var randomNumber = Math.floor(Math.random() * (clockworkAge.length));
    document.getElementById('clockworkAgeDisplay').innerHTML = clockworkAge[randomNumber];
}

function getClockworkPurpose()
{
    var randomNumber = Math.floor(Math.random() * (clockworkPurpose.length));
    document.getElementById('clockworkPurposeDisplay').innerHTML = clockworkPurpose[randomNumber];
}

function getClockworkForm()
{
    var randomNumber = Math.floor(Math.random() * (clockworkForm.length));
    document.getElementById('clockworkFormDisplay').innerHTML = clockworkForm[randomNumber];
}

function getClockworkAppearance()
{
    var randomNumber = Math.floor(Math.random() * (clockworkAppearance.length));
    document.getElementById('clockworkAppearanceDisplay').innerHTML = clockworkAppearance[randomNumber];
}

function getClockworkBackground()
{
    var randomNumber = Math.floor(Math.random() * (clockworkBackground.length));
    document.getElementById('clockworkBackgroundDisplay').innerHTML = clockworkBackground[randomNumber];
}

function getClockworkPersonality()
{
    var randomNumber = Math.floor(Math.random() * (clockworkPersonality.length));
    document.getElementById('clockworkPersonalityDisplay').innerHTML = clockworkPersonality[randomNumber];
}

/**
 * Function to simulate rolling a d6 die.
 */
function rolld6()
{
    var randomNumber = Math.floor(Math.random() * (6));
    return randomNumber;
}

/**
 * Function to simulate rolling 2d6 dice.
 */
function roll2d6()
{
    var firstRoll = rolld6();
    var secondRoll = rolld6();
    return firstRoll + secondRoll;
}

/**
 * Function to simulate rolling 3d6 dice.
 */
function roll3d6()
{
    var firstRoll = rolld6();
    var secondRoll = rolld6();
    var thirdRoll = rolld6();
    return firstRoll + secondRoll + thirdRoll;
}

/**
 * Function to simulate rolling a d20 die.
 */
function rolld20()
{
    var randomNumber = Math.floor(Math.random() * (20));
    return randomNumber;
}

/**
 * Function to create a complete character with the click of a button.
 */
function createCompleteClockworkCharacter()
{
    getClockworkAge();
    getClockworkPurpose();
    getClockworkForm();
    getClockworkAppearance();
    getClockworkBackground();
    getClockworkPersonality();
}