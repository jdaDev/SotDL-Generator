/**
 * Dwarf Tables
*/
var dwarfAge = [
    'You are a child, 20 years old or younger.',
    'You are an adolescent, 20 to 30 years old.',
    'You are an adolescent, 20 to 30 years old.',
    'You are an adolescent, 20 to 30 years old.',
    'You are an adolescent, 20 to 30 years old.',
    'You are a young adult, 31 to 50 years old.',
    'You are a young adult, 31 to 50 years old.',
    'You are a young adult, 31 to 50 years old.',
    'You are a young adult, 31 to 50 years old.',
    'You are a young adult, 31 to 50 years old.',
    'You are a middle-aged adult, 51 to 100 years old.',
    'You are a middle-aged adult, 51 to 100 years old.',
    'You are an older adult, 101 to 150 years old.',
    'You are an older adult, 101 to 150 years old.',
    'You are a venerable adult, 151 years old or older.'
  ]
  
  var dwarfBuild = [
    'You are short and scrawny.',
    'You are short and fat.',
    'You are short and fat.',
    'You are short and fat.',
    'You stand a bit shorter than other dwarfs.',
    'You stand a bit shorter than other dwarfs.',
    'You are average in height and build.',
    'You are average in height and build.',
    'You are average in height and build.',
    'You are average in height and build.',
    'You have a magnificent belly.',
    'You have a magnificent belly.',
    'You have a magnificent belly.',
    'You are tall.',
    'You are tall.',
    'You are tall and heavy.'
  ]
  
  var dwarfAppearance = [
    'You have a monstrous appearance, likely due to hard living and several near misses. Your face is a mass of scar tissue, probably missing an ear, an ' +
    'eye, or your nose. You also display some unusual habit, such as pounding nails into your skull or greasing your body with troll fat.',
    'You have a monstrous appearance, likely due to hard living and several near misses. Your face is a mass of scar tissue, probably missing an ear, an ' +
    'eye, or your nose. You also display some unusual habit, such as pounding nails into your skull or greasing your body with troll fat.',
    'You have several interesting features that work together to make you one ugly brute. Filth from digging in the dirt, mites infesting your hair, skin ' +
    'lashed with healing scars, and a rich aroma of vomit -- all these contribute to your distinctive style.',
    'You have several interesting features that work together to make you one ugly brute. Filth from digging in the dirt, mites infesting your hair, skin ' +
    'lashed with healing scars, and a rich aroma of vomit -- all these contribute to your distinctive style.',
    'You look like a typical dwarf, being hairy, portly, and grubby.',
    'You look like a typical dwarf, being hairy, portly, and grubby.',
    'You take better care of yourself than most dwarfs and keep your facial hair well groomed.',
    'You take better care of yourself than most dwarfs and keep your facial hair well groomed.',
    'You take better care of yourself than most dwarfs and keep your facial hair well groomed.',
    'You take pride in your appearance. You stay clean, oil your facial hair, and perhaps braid it or tie it with metal rings.',
    'You take pride in your appearance. You stay clean, oil your facial hair, and perhaps braid it or tie it with metal rings.',
    'You take pride in your appearance. You stay clean, oil your facial hair, and perhaps braid it or tie it with metal rings.',
    'You take pride in your appearance. You stay clean, oil your facial hair, and perhaps braid it or tie it with metal rings.',
    'You are quite fetching for a dwarf. You have regal features, good bearing, and a deep voice. You take pride in your appearance.',
    'You are quite fetching for a dwarf. You have regal features, good bearing, and a deep voice. You take pride in your appearance.',
    'You are quite fetching for a dwarf. You have regal features, good bearing, and a deep voice. You take pride in your appearance.'
  ]
  
  var dwarfHatred = [
    'You hate Ogres.',
    'You hate Ogres.',
    'You hate Troglodytes.',
    'You hate Troglodytes.',
    'You hate Beastmen.',
    'You hate Beastmen.',
    'You hate Orcs.',
    'You hate Orcs.',
    'You hate Goblins.',
    'You hate Goblins.',
    'You hate Elves.',
    'You hate Elves.',
    'You hate Trolls.',
    'You hate Trolls.',
    'You hate Giants.',
    'You hate Giants.',
    'You hate Dragons.',
    'You hate Dragons.',
    'You hate Demons.',
    'You hate Demons.'
  ]
  
  var dwarfBackground = [
    'You sold your soul to a devil to gain wealth. The devil betrayed you and left you penniless. You start the game with 1 Corruption.',
    'Your ancestors appeared to you in a vision and sent you to recover a fabled relic.',
    'You accidentally killed someone close to you.',
    'You stole gold from a rival clan and the theft shames you.',
    'You fought against the creatures you hate and lost.',
    'You brought shame to yourself and your clan. You live as an exile, searching for redemption, even if that redemption comes with a glorius death.',
    'You were taken prisoner by the creatures you hate. You lived as a slave for 2d6 years.',
    'The creatures you hate overran your home and wiped out your clan.',
    'You survived a cave-in and get a bit nervous when underground.',
    'You earned a living working in your profession.',
    'You are a sworn servant of the Dwarf King',
    'You are a gifted artisan. Add artisan (any one) to your list of professions.',
    'You traveled extensively. You speak one additional language.',
    'You inherited a battleaxe or a warhammer from an ancestor.',
    'You discovered a vein of gold under your mountain home.',
    'You hunted down and helped kill a creature you hate.',
    'You performed a great deed, and you are a hero to your clan.',
    'You have a key to an ancient treasure vault lost to dwarfs long ago.',
    'You are the rightful heir to a stronghold overrun by the enemies of your people.',
    'You came into money and start the game with 2d6 cp.'
  ]
  
  var dwarfPersonality = [
    'Your hatred is a living thing. It drives you, gives you strength, and helps you triumph over your enemies.',
    'You seek a glorious death killing your enemies.',
    'You love gold more than anything. You love the way it feels, the sound it makes, and the taste of it.',
    'You love gold more than anything. You love the way it feels, the sound it makes, and the taste of it.',
    'You believe other people covet your wealth. It is your duty to protect what is yours -- at any cost.',
    'You believe other people covet your wealth. It is your duty to protect what is yours -- at any cost.',
    'Your honor is your life. You would never do anything to bring shame to your people.',
    'Your honor is your life. You would never do anything to bring shame to your people.',
    'Your honor is your life. You would never do anything to bring shame to your people.',
    'Your honor is your life. You would never do anything to bring shame to your people.',
    'You surrender to the will of your ancestors, the customs of your people, and the good of all.',
    'You surrender to the will of your ancestors, the customs of your people, and the good of all.',
    'You believe your people must rise above their greed and suspicion. In these dark times, you must band together to overcome the doom that awaits you all.',
    'You believe your people must rise above their greed and suspicion. In these dark times, you must band together to overcome the doom that awaits you all.',
    'You don\'t trust or like non-dwarfs, but they have their uses.',
    'You have little use for the customs of your people. It\'s time to move past the dusty caves and seek out fortunes elsewhere.'
  ]


/**
* Dwarf Functions
*/
function getDwarfAge()
{
    // TO-DO -> Add if statements checking which ancestry is selected, then
    // do the following for the appropriate array and length.
    var randomNumber = Math.floor(Math.random() * (dwarfAge.length));
    document.getElementById('dwarfAgeDisplay').innerHTML = dwarfAge[randomNumber];
}

function getDwarfBuild()
{
    var randomNumber = Math.floor(Math.random() * (dwarfBuild.length));
    document.getElementById('dwarfBuildDisplay').innerHTML = dwarfBuild[randomNumber];
}

function getDwarfAppearance()
{
    var randomNumber = Math.floor(Math.random() * (dwarfAppearance.length));
    document.getElementById('dwarfAppearanceDisplay').innerHTML = dwarfAppearance[randomNumber];
}

function getDwarfHatred()
{
    var randomNumber = Math.floor(Math.random() * (dwarfHatred.length));
    document.getElementById('dwarfHatredDisplay').innerHTML = dwarfHatred[randomNumber];
}

function getDwarfBackground()
{
    var randomNumber = Math.floor(Math.random() * (dwarfBackground.length));
    document.getElementById('dwarfBackgroundDisplay').innerHTML = dwarfBackground[randomNumber];
}

function getDwarfPersonality()
{
    var randomNumber = Math.floor(Math.random() * (dwarfPersonality.length));
    document.getElementById('dwarfPersonalityDisplay').innerHTML = dwarfPersonality[randomNumber];
}

/**
 * Function to create a complete character with the click of a button.
 */
function createCompleteDwarfCharacter()
{
    getDwarfAge();
    getDwarfBuild();
    getDwarfAppearance();
    getDwarfHatred();
    getDwarfBackground();
    getDwarfPersonality();
}