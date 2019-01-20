// Have a 1d6 and 1d20 function which picks a random number and then place it in the arrays where appropriate (ex. you have 1d6 extra fingers).

/**
 *  Changling Tables
*/
var changlingTrueAge = 
[
    'You are a child, 8 years old or younger.',
    'You are an adolescent, 9 to 14 years old.',
    'You are an adolescent, 9 to 14 years old.',
    'You are an adolescent, 9 to 14 years old.',
    'You are an adolescent, 9 to 14 years old.',
    'You are a young adult, 15 to 25 years old.',
    'You are a young adult, 15 to 25 years old.',
    'You are a young adult, 15 to 25 years old.',
    'You are a young adult, 15 to 25 years old.',
    'You are a young adult, 15 to 25 years old.',
    'You are a middle-aged adult, 26 to 40 years old.',
    'You are a middle-aged adult, 26 to 40 years old.',
    'You are a middle-aged adult, 26 to 40 years old.',
    'You are an older adult, 41 to 60 years old.',
    'You are an older adult, 41 to 60 years old.',
    'You are a venerable adult, 61 years old or older.'
  ]
    
  var changlingApparentGender = 
  [
    'You appear to be male.',
    'You appear to be male.',
    'You appear to be male.',
    'You appear to be female.',
    'You appear to be female.',
    'You appear to be female.'
  ]
  
  var changlingApparentAncestry = 
  [
    'You appear to be a goblin.', // Add function to roll apparent ancestry stats
    'You appear to be a goblin.',
    'You appear to be a dwarf.',
    'You appear to be a dwarf.',
    'You appear to be a dwarf.',
    'You appear to be a human.',
    'You appear to be a human.',
    'You appear to be a human.',
    'You appear to be a human.',
    'You appear to be a human.',
    'You appear to be a human.',
    'You appear to be a human.',
    'You appear to be a human.',
    'You appear to be an orc.',
    'You appear to be an orc.',
    'The GM determines your ancestry, age, build, and appearance.'
  ]
  
  var changlingBackground = 
  [
    'You only recently discovered your true nature, and you are having a difficult time adjusting to your new reality. You start the game with 1 Insanity.',
    'You have no idea that you are a changling. You think you are a member of the ancestry whose form you adopted. Add an extra random profession. Until you ' +
    'become incapacitated or touch iron for the first time, you cannot use Steal Identity.',
    'You were enslaved by a hag and forced to perform unspeakable acts as she commanded you. You start the game with 1 Corruption.',
    'You murdered the person whose identity you stole so you could take over that person\'s life. You start the game with 1 Corruption.',
    'When your "parents" learned what you were, they cast you out from your home and you were forced to make your own way in the world.',
    'You ran away from home when you learned what you were and lived among the faerie for many years.',
    'You have earned the enmity of a witch hunter. This foes hunts you and will try to kill you if your paths ever cross.',
    'Fearful townsfolk drove you out of your hometown. You have grown to hate them and plot revenger.',
    'The first time you stole someone\'s identity, you also stole a few of that person\'s memories.',
    'You earned a living working in your profession.',
    'You fell in love, and your lover is not aware of your true identity.',
    'After you were exiled from your hometown, a druid or witch took you in and cared for you. You always have a home with this character.',
    'You worked as an informant for the Inquisition.',
    'You received an education. You know how to read the Common Tongue.',
    'You learned a terrible secret while masquerading as someone else. Work out the nature of that ecret with your Game Master.',
    'Your parents raised you even though they knew what you were. Their love and encouragement gave you the stability you needed to grow into a mature ' +
    'personality.',
    'The elf who made you recently found you and befriended you. You can call in one favor from that elf by speaking into a shell he or she gave you. ' +
    'The extend of the favor\'s power is subject to the GM\'s discretion.',
    'You adopted the form of someone famous, powerful, and important.',
    'You have ties to a criminal organization after being recruited into it for your magical gifts.',
    'You came into a quantity of money and start the game with 2d6 cp.'
  ]
  
  var changlingQuirk = 
  [
    'You always speak in the third person.',
    'Your eyes glow green in the dark.',
    'Animals become nervous around you.',
    'You can adopt only male forms or only female forms.',
    'You are wild and impulsive.',
    'You always revert to the first form you adopted.',
    'The scent of iron sickens you.',
    'You have terrible nightmares.',
    'You sometimes hear voices.',
    'You tend to lose small, inconsequential things.',
    'One night each year, you lose your Steal Identity talent.',
    'You can only assume the appearance of dead people.',
    'You speak in whispers.',
    'You give off an odd, earthy smell.',
    'You can never keep your clothes clean.',
    'You cannot get drunk.',
    'You must always speak the truth as you know it.',
    'You find meat repulsive.',
    'You laugh at inappropriate times.',
    'Forms you adopt have no hair or fingernails.'
  ]
  
  var changlingPersonality = 
  [
    'You steal the forms of others so you can do what you want without facing repercussions. You don\'t care about how this affects other people.',
    'You enjoy taking on forms that let you work mischief.',
    'You enjoy taking on forms that let you work mischief.',
    'You adopt forms that give you power over others. Power ensures your safety.',
    'You take on other forms for profit, usually to gain access to places normally forbidden to you.',
    'You take on other forms for profit, usually to gain access to places normally forbidden to you.',
    'You take on other forms for profit, usually to gain access to places normally forbidden to you.',
    'You take on other forms for profit, usually to gain access to places normally forbidden to you.',
    'You are careful about the forms you take. You try to stay out of trouble and keep secrets safe.',
    'You are careful about the forms you take. You try to stay out of trouble and keep secrets safe.',
    'You are careful about the forms you take. You try to stay out of trouble and keep secrets safe.',
    'You strive to do the right thing and use your disguises to help other people, as well as to protect yourself from your enemies.',
    'Your nature is a gift, and you use it to do what you think is right even if it means upsetting others along the way.',
    'Your nature is a gift, and you use it to do what you think is right even if it means upsetting others along the way.',
    'You tend to stick to one form as long as possible; you crave stability and would do anything to be "normal"',
    'You use your talents to help others, to make the world a better place, and to right wrongs.'
  ]


  /**
   * Changling Functions
   */
function getChanglingBackground()
{
    // TO-DO -> Add if statements checking which ancestry is selected, then
    // do the following for the appropriate array and length.
    var randomNumber = Math.floor(Math.random() * (changlingBackground.length));
    document.getElementById('changlingBackgroundDisplay').innerHTML = changlingBackground[randomNumber];
}

function getChanglingPersonality()
{
    var randomNumber = Math.floor(Math.random() * (changlingPersonality.length));
    document.getElementById('changlingPersonalityDisplay').innerHTML = changlingPersonality[randomNumber];
}

function getChanglingTrueAge()
{
    var randomNumber = Math.floor(Math.random() * (changlingTrueAge.length));
    document.getElementById('changlingTrueAgeDisplay').innerHTML = changlingTrueAge[randomNumber];
}

/*function getChanglingBuild()
{
    var randomNumber = Math.floor(Math.random() * (humanBuilds.length));
    document.getElementById('completeBuildDisplay').innerHTML = humanBuilds[randomNumber];
}*/

function getChanglingApparentancestry()
{
    var randomNumber = Math.floor(Math.random() * (changlingApparentAncestry.length));
    document.getElementById('changlingApparentAncestryDisplay').innerHTML = changlingApparentAncestry[randomNumber];
}

function getChanglingApparentGender()
{
    var randomNumber = Math.floor(Math.random() * (changlingApparentGender.length));
    document.getElementById('changlingApparentGenderDisplay').innerHTML = changlingApparentGender[randomNumber];
}

function getChanglingQuirk()
{
    var randomNumber = Math.floor(Math.random() * (changlingQuirk.length));
    document.getElementById('changlingQuirkDisplay').innerHTML = changlingQuirk[randomNumber];
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
function createCompleteChanglingCharacter()
{
    getChanglingBackground();
    getChanglingPersonality();
    getChanglingTrueAge();
    //getChanglingBuild();
    getChanglingApparentancestry();
    getChanglingApparentGender();
    getChanglingQuirk();
}