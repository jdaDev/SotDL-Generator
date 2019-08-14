    /**
 * Goblin Tables
*/
var goblinAge = [
    'You are a child, 6 years old or younger.',
    'You are an adolescent, 7 to 10 years old.',
    'You are an adolescent, 7 to 10 years old.',
    'You are an adolescent, 7 to 10 years old.',
    'You are an adolescent, 7 to 10 years old.',
    'You are a young adult, 11 to 25 years old.',
    'You are a young adult, 11 to 25 years old.',
    'You are a young adult, 11 to 25 years old.',
    'You are a young adult, 11 to 25 years old.',
    'You are a young adult, 11 to 25 years old.',
    'You are a middle-aged adult, 26 to 50 years old.',
    'You are a middle-aged adult, 26 to 50 years old.',
    'You are a middle-aged adult, 26 to 50 years old.',
    'You are an older adult, 51 to 75 years old.',
    'You are an older adult, 51 to 75 years old.',
    'You are a venerable adult, 76 years old or older.'
  ]
  
  var goblinBuild = [
      'You are short and spindly.',
      'You are short and round.',
      'You are short.',
      'You are short.',
      'You are wiry.',
      'You are wiry.',
      'You fall within the normal height and weight ranges for goblins.',
      'You fall within the normal height and weight ranges for goblins.',
      'You fall within the normal height and weight ranges for goblins.',
      'You fall within the normal height and weight ranges for goblins.',
      'You are pudgy.',
      'You are pudgy.',
      'You are tall.',
      'You are tall.',
      'You are tall and lanky.',
      'You are very tall and heavy.'
  ]
  
  var goblinDistinctiveAppearance = [
    'You have a long, pointed nose.',
    'You have bright green or orange skin.',
    'You have the head of a dog.',
    'You have a reptilian appearance with small horns sprouting from the top of your head.',
    'You have a wide, leering grin.',
    'You have a pig\'s snout in place of a nose.',
    'You have long, slender fingers.',
    'You have a tooth growing out from your forehead.',
    'You have a tail.',
    'Fur grows thickly on your arms and legs.',
    'You are completely hairless.',
    'You have all the warts.',
    'A large cyst grows on your back.',
    'You have an abnormally long and pointed chin.',
    'A single horn grows out from the side of your head.',
    'You have one eye.',
    'You have 1d6 extra fingers, placed on your body wherever you wish.',
    'You have enormous ears.',
    'You have stubby little legs.',
    'Make something up!'
  ]
  
  var goblinOddHabit = [
    'You save all your secretions in small bottles and give them as gifts to people you like.',
    'You never bathe.',
    'You punctuate your sentences by spitting.',
    'You have tremedous flatulence, yet you seem never to notice when you break wind.',
    'You eat only candy.',
    'You collect the genitals from creatures you kill and wear them as jewelry.',
    'You lick things to claim them as your own.',
    'You dress in fancy clothes.',
    'You refuse to wear shoes.',
    'You keep cockroaches as pets.',
    'You always inspect your bowel movements, spreading the mess around with your fingers.',
    'You keep a bit of iron on your person at all times.',
    'You speak in a singsong voice.',
    'You eat a bit of flesh from any living thing you kill.',
    'You cry a lot.',
    'You tell filthy jokes at inappropriate times.',
    'You wear a child\'s costume and refuse to take it off.',
    'You keep a large collection of spoons.',
    'You like to hide.',
    'Make something up!'
  ]
  
  var goblinBackground = [
    'You spent the last 1d6 years in a drunken stupor. You\'re not proud.',
    'The Goblin King turned you into a toad. You escaped that fate after you convinced an elf maiden to kiss you. When she did and screamed, you killed her. ' +
    'Start the game with 1 Corruption.',
    'You accidentally got your entire tribe killed.',
    'You were orphaned and raised by giant rats.',
    'You accidentally released a demon into the world.',
    'You spent two days believing you were a fearsome dog. You start the game with 1 Insanity.',
    'A hag made you her love slave for 1d6 years.',
    'Dwarfs almost wiped out your tribe. You are one of 1d6 survivors.',
    'You nearly drowned when the sewers flooded.',
    'You earned a living working in your profession.',
    'Choose a character. He or she saved your life and you now owe that character a debt.',
    'You are an unrepentant criminal. Add a random criminal profession to your list of professions.',
    'You traveled extensively. You speak one additional language.',
    'You stole a knife from a dashing knight.',
    'You snuck into Alfheim and stole a lock of hair from the Faerie Queen.',
    'You killed and ate 100 diseased rats.',
    'You were a henchman to a powerful wizard.',
    'You found a signet ring in a sewer.',
    'You are the seventeenth son or daughter of the Goblin King.',
    'YOu came into money and start the game with 2d6 cp.'
  ]
  
  var goblinPersonality = [
    'You are a bully and enjoy tormenting things that are weaker than you.',
    'You like violence, especially when it\'s random and senseless.',
    'You try to rise above the filth and squalor of your people to do good in the world.',
    'You try to rise above the filth and squalor of your people to do good in the world.',
    'You love playing tricks on other people and find their pain hilarious!',
    'You love playing tricks on other people and find their pain hilarious!',
    'You look out for yourself. To hell with everyone else!',
    'You look out for yourself. To hell with everyone else!',
    'You look out for yourself. To hell with everyone else!',
    'You look out for yourself. To hell with everyone else!',
    'You\'re just trying to stay alive!',
    'You\'re just trying to stay alive!',
    'Your people didn\'t deserve exile, but exile you got. You believe you will make places for yourselves and prove to those stinking elves they were wrong.',
    'Your people didn\'t deserve exile, but exile you got. You believe you will make places for yourselves and prove to those stinking elves they were wrong.',
    'You live to serve the strong and mighty.',
    'You hope to redeem your people in the eyes of the Faerie Queen.'
  ]


/**
  * Goblin Stats
  */
 var goblinStrength = 8;
 var goblinAgility = 12;
 var goblinIntellect = 10;
 var goblinWill = 9;
 var goblinPerception = goblinIntellect + 1;
 var goblinDefense = goblinAgility;
 var goblinHealth = goblinStrength;
 var goblinHealingRate = Math.floor(goblinHealth / 4);
 var goblinSize = 1/2;
 var goblinSpeed = 10;
 var goblinPower = 0;
 var goblinDamage = 0;
 var goblinInsanity = 0;
 var goblinCorruption = 0;  


/**
 * Functions for complete Goblin character
 */
function getGoblinBackground()
{
    // TO-DO -> Add if statements checking which ancestry is selected, then
    // do the following for the appropriate array and length.
    var randomNumber = Math.floor(Math.random() * (goblinBuild.length));
    document.getElementById('goblinBackgroundDisplay').innerHTML = goblinBackground[randomNumber];
}

function getGoblinPersonality()
{
    var randomNumber = Math.floor(Math.random() * (goblinPersonality.length));
    document.getElementById('goblinPersonalityDisplay').innerHTML = goblinPersonality[randomNumber];
}

function getGoblinOddHabit()
{
    var randomNumber = Math.floor(Math.random() * (goblinOddHabit.length));
    document.getElementById('goblinOddHabitDisplay').innerHTML = goblinOddHabit[randomNumber];
}

function getGoblinAge()
{
    var randomNumber = Math.floor(Math.random() * (goblinAge.length));
    document.getElementById('goblinAgeDisplay').innerHTML = goblinAge[randomNumber];
}

function getGoblinBuild()
{
    var randomNumber = Math.floor(Math.random() * (goblinBuild.length));
    document.getElementById('goblinBuildDisplay').innerHTML = goblinBuild[randomNumber];
}

function getGoblinDistinctiveAppearance()
{
    var randomNumber = Math.floor(Math.random() * (goblinDistinctiveAppearance.length));
    document.getElementById('goblinDistinctiveAppearanceDisplay').innerHTML = goblinDistinctiveAppearance[randomNumber];
}

/**
 * Function to create a complete character with the click of a button.
 */
function createCompleteGoblinCharacter()
{
    getGoblinAge();
    getGoblinBuild();
    getGoblinDistinctiveAppearance();
    getGoblinOddHabit();
    getGoblinBackground();
    getGoblinPersonality();
}