/**
 * Halfing Tables
*/
var halflingAge = [
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
    'You are an older adult 56 to 75 years old.',
    'You are a venerable adult, 76 years or older.'
  ]
  
  var halflingBuild = [
    'You are quite small for a halfling, standing just 2 feet tall and weighing 40 pounds.',
    'You grew horizontally instead of vertically. You have a rounded body and short, stubby limbs.',
    'You are short for a halfling.',
    'You are short for a halfling.',
    'You are skinny no matter how much you eat.',
    'You are skinny no matter how much you eat.',
    'You are normal height and weight for a halfling.',
    'You are normal height and weight for a halfling.',
    'You are normal height and weight for a halfling.',
    'You are normal height and weight for a halfling.',
    'Good living has rewarded you with considerable bulk.',
    'Good living has rewarded you with considerable bulk.',
    'You are tall by halfling standards and can pass for a short human.',
    'You are tall by halfling standards and can pass for a short human.',
    'You are tall and slender, with a willowy body. Your family claims you have faerie blood.',
    'You are enormous for a halfling, standing 5 feet tall and weighing close to 200 pounds. Increase your Size to 1.'
  ]
  
  var halflingAppearance = [
    'Luck saved your life, but you did not escape death unscathed. You bear horrific scars, your appearance a mess that evokes revulsion in anyone ' +
    'who lays eyes on you.',
    'You are downright ugly. Your features look like they wandered around your head and settled in where they felt comfortable.',
    'You have an unattractive quality that ruins your otherwise plain appearance.',
    'You have an unattractive quality that ruins your otherwise plain appearance.',
    'You have no distincitve physical qualities. People sometimes forget you are there.',
    'You have no distincitve physical qualities. People sometimes forget you are there.',
    'You are perfectly average and unremarkable.',
    'You are perfectly average and unremarkable.',
    'You are perfectly average and unremarkable.',
    'You are perfectly average and unremarkable.',
    'Other halflings find you attractive, likely due to your winning personality.',
    'Other halflings find you attractive, likely due to your winning personality.',
    'You are attractive.',
    'You are attractive.',
    'You are striking, catching the eye of halflings and humans alike.',
    'You are a great beauty, an individual perfect by the standards of your people and others. When you enter a room, people notice.'
  ]
  
  var halflingBackground = [
    'Your curiosity led you to a very dark place, where you witnessed something that unhinged your mind. You start the game with 1d3 + 1 Insanity.',
    'You discovered a terrible secret. To keep your family safe, you decided to disappear.',
    'Hard times forced you to make ends meet by committing crimes. Gain one criminal profession.',
    'You stole something of great importance. Someone else took the blame and was executed for the crime.',
    'A nasty plague wiped out your community. You were the sole survivor.',
    'An orc captured you and kept you as a prisoner for 1d6 years. The orc believed you were a lucky charm.',
    'You went spelunking and became lost until a group of gnomes rescued you.',
    'You have terrible wanderlust. You can\'t stay put for more than a few weeks at a time. Add one language to the list of languages you can speak.',
    'You worked a series of terrible jobs in a large city.',
    'You earned a living working in your profession.',
    'A human fell in love with you, but you rejected the relationship.',
    'You have a large immediate family with 2d6 + 3 members.',
    'You befriended a powerful witch or wizard who came to visit your community.',
    'You received an education. You know how to read the Common Tongue.',
    'When your town came under attack, you led the people to safety.',
    'One time, an ogre swallowed you whole. Somehow, you survived and came out the other end, filthy but intact.',
    'You were abducted by faeries, but you managed to escape.',
    'You went on a long journey with a band of dwarfs. You plan to write about your experiences one day.',
    'You found an odd treasure in a cave. Start the game with one enchanted object of the GM\'s choice.',
    'You came into money and start the game with 3d6 copper pennies.'
  ]
  
  var halflingReligion = [
    'You belong to the cult of the New God.',
    'You belong to the cult of the New God.',
    'You studied a bit of witchcraft.',
    'You studied a bit of witchcraft.',
    'You follow the tenets of the Old Faith.',
    'You follow the tenets of the Old Faith.',
    'You have little use for the gods or religion.',
    'You have little use for the gods or religion.',
    'You have little use for the gods or religion.',
    'You have little use for the gods or religion.',
    'You don\'t believe the gods exist.',
    'You don\'t believe the gods exist.',
    'You don\'t believe the gods exist.',
    'You don\'t believe the gods exist.',
    'You don\'t believe the gods exist.',
    'You don\'t believe the gods exist.'
  ]
  
  var halflingPersonality = [
    'Something is wrong with you. YOu dream about hurting people, cutting them up and making them scream. You worry that you may one day act out on these fantasies.',
    'You have a hard time paying attention. You are easily distracted and tend to abandon whatever you\'re doing to do something else.',
    'You keep your head down and try not to cause trouble.',
    'You keep your head down and try not to cause trouble.',
    'You do what you want, when you want. You won\'t let anyone get in your way. You can\'t soar with the eagles when you\'re scratching with the turkeys.',
    'You do what you want, when you want. You won\'t let anyone get in your way. You can\'t soar with the eagles when you\'re scratching with the turkeys.',
    'You try to do right by your friends, provided doing so doesn\'t slow you down.',
    'You try to do right by your friends, provided doing so doesn\'t slow you down.',
    'You try to do right by your friends, provided doing so doesn\'t slow you down.',
    'You try to do right by your friends, provided doing so doesn\'t slow you down.',
    'You are a good person who enjoys helping others.',
    'You are a good person who enjoys helping others.',
    'You look after your people, whether they are other halflings or the people you call your friends. You would do anything for them.',
    'You look after your people, whether they are other halflings or the people you call your friends. You would do anything for them.',
    'You always do what you think is right, even if doing so gets you into trouble.',
    'You are concerned about what others think of you and alter your behavior to make others like you.'
  ]


/**
* Halfling Functions
*/
function getHalflingAge()
{
    // TO-DO -> Add if statements checking which ancestry is selected, then
    // do the following for the appropriate array and length.
    var randomNumber = Math.floor(Math.random() * (halflingAge.length));
    document.getElementById('halflingAgeDisplay').innerHTML = halflingAge[randomNumber];
}

function getHalflingBuild()
{
    var randomNumber = Math.floor(Math.random() * (halflingBuild.length));
    document.getElementById('halflingBuildDisplay').innerHTML = halflingBuild[randomNumber];
}

function getHalflingAppearance()
{
    var randomNumber = Math.floor(Math.random() * (halflingAppearance.length));
    document.getElementById('halflingAppearanceDisplay').innerHTML = halflingAppearance[randomNumber];
}

function getHalflingBackground()
{
    var randomNumber = Math.floor(Math.random() * (halflingBackground.length));
    document.getElementById('halflingBackgroundDisplay').innerHTML = halflingBackground[randomNumber];
}

function getHalflingReligion()
{
  var randomNumber = Math.floor(Math.random() * (halflingReligion.length));
  document.getElementById('halflingReligionDisplay').innerHTML = halflingReligion[randomNumber];
}

function getHalflingPersonality()
{
    var randomNumber = Math.floor(Math.random() * (halflingPersonality.length));
    document.getElementById('halflingPersonalityDisplay').innerHTML = halflingPersonality[randomNumber];
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
function createCompleteHalflingCharacter()
{
    getHalflingAge();
    getHalflingBuild();
    getHalflingAppearance();
    getHalflingBackground();
    getHalflingReligion();
    getHalflingPersonality();
}