/**
 * Ferren Tables
 */

var ferrenAge =
[
    'You are a child, 11 years or younger. You are Size 1/2. Halve your height and weight.'
    + 'After 1d6 + 2 years, your Size becomes 1 and you double your height and weight.',
    'You are an adolescent, from 12 to 17 years old.',
    'You are an adolescent, from 12 to 17 years old.',
    'You are a young aduly, from 18 to 25 years old.',
    'You are a young aduly, from 18 to 25 years old.',
    'You are a young aduly, from 18 to 25 years old.',
    'You are an adult, from 26 to 35 years old.',
    'You are an adult, from 26 to 35 years old.',
    'You are an adult, from 26 to 35 years old.',
    'You are an adult, from 26 to 35 years old.',
    'You are a middle-aged adult, from 36 to 55 years old.',
    'You are a middle-aged adult, from 36 to 55 years old.',
    'You are a middle-aged adult, from 36 to 55 years old.',
    'You are an older adult, from 56 to 75 years old.',
    'You are an older adult, from 56 to 75 years old.',
    'You are a venerable adult, 76 years old or older.'
]

var ferrenBuild =
[
    'You are short and either thin or heavy.',
    'You are heavy.',
    'You are heavy.',
    'You are short.',
    'You are short.',
    'You are short.',
    'You are of average height and weight.',
    'You are of average height and weight.',
    'You are of average height and weight.',
    'You are of average height and weight.',
    'You are tall.',
    'You are tall.',
    'You are tall.',
    'You are thin.',
    'You are thin.',
    'You are tall and either thin or heavy.'
]

var ferrenHumanAppearance = 
[
    'You are hideous.',
    'You are ugly.',
    'You are ugly.',
    'You are plain and homely.',
    'You are plain and homely.',
    'You are plain and homely.',
    'You are average-looking.',
    'You are average-looking.',
    'You are average-looking.',
    'You are average-looking.',
    'You are pretty or handsome.',
    'You are pretty or handsome.',
    'You are pretty or handsome.',
    'You are striking.',
    'You are striking.',
    'You are beautiful.'
]

var felineAppearance =
[
    'As a feline, you are mitted, locket, or harlequin.',
    'As a feline, you are solid.',
    'As a feline, you are solid.',
    'As a feline, you are bicolor.',
    'As a feline, you are bicolor.',
    'As a feline, you are bicolor.',
    'As a feline, you are tabby.',
    'As a feline, you are tabby.',
    'As a feline, you are tabby.',
    'As a feline, you are tabby.',
    'As a feline, you are tuxedo.',
    'As a feline, you are tuxedo.',
    'As a feline, you are tuxedo.',
    'As a feline, you are tortoiseshell.',
    'As a feline, you are tortoiseshell.',
    'As a feline, you are hairless.'
]

var ferrenMannerism =
[
    'You are fastidious about cleanliness.',
    'You are fastidious about cleanliness.',
    'You like to knock things over.',
    'You like to knock things over.',
    'You sleep as often as you can.',
    'You sleep as often as you can.',
    'You like to hide or climb.',
    'You like to hide or climb.',
    'You are attracted to small moving things.',
    'You are attracted to small moving things.',
    'You are given to sudden outbursts of manic energy.',
    'You are given to sudden outbursts of manic energy.',
    'You tend to shred things you handle.',
    'You tend to shred things you handle.',
    'You hiss when you get angry or frightened.',
    'You hiss when you get angry or frightened.',
    'You always bury your excrement.',
    'You always bury your excrement.',
    'You are attracted to water, especially running water.'
]

var ferrenPersonality =
[
    'You are vicious and hateful. You lash out at everyone.',
    'You are an asshole. You make a mess and you don\'t care who has to clean it up.',
    'You are an asshole. You make a mess and you don\'t care who has to clean it up.',
    'You are lazy. You find it hard to make yourself do much of anything.',
    'You are lazy. You find it hard to make yourself do much of anything.',
    'You are lazy. You find it hard to make yourself do much of anything.',
    'You are inquisitive. Your curiosity often lands you in trouble.',
    'You are inquisitive. Your curiosity often lands you in trouble.',
    'You are inquisitive. Your curiosity often lands you in trouble.',
    'You are inquisitive. Your curiosity often lands you in trouble.',
    'You are warm and pleasant. You make friends easily.',
    'You are warm and pleasant. You make friends easily.',
    'You are warm and pleasant. You make friends easily.',
    'You are aloof, disinterested in other people.',
    'You are aloof, disinterested inother people.',
    'You are loyal to your friends, and you support them in all they do.'
]

var ferrenBackground =
[
    'A nasty fight left you scarred.',
    'You were seduced by a devil. Gain 1 Corruption.',
    'You spent a few years in the wilderness. Gain a random wilderness profession.',
    'You killed someone in cold blood. Gain 1 Corruption.',
    'You fell in love with a human and had a child.',
    'You were raised by priestesses of the Moon Maiden.',
    'You stumbled into a hidden kingdom and remained there for 1d6 years.',
    'Someone important to you died, and the loss haunts you still.',
    'Some rotten child mistook you for a cat and took you home. You only just escaped with your life.',
    'You earned a living working in one of your professions.',
    'You traveled extensively. You can speak one additional language.',
    'Someone discovered your true nature and mistook you for a skinchanger. You left everything behind'
    + ' to start over somewhere else.',
    'You received an education. You know how to read the Common Tongue.',
    'You helped defend a community from a beastmen attack.',
    'You found a scroll containing an incantation of a rank 0 spell (chosen by the GM).',
    'You unmasked a killer or a cultist at large in your community.',
    'You created a lasting piece of art. Add artist to your list of professions.',
    'You found a potion (of the GM\'s choice).',
    'Someone important owes you a big favor.',
    'You came into money. Start the game with 2d6 cp.'
]


/**
   * Ferren Functions
   */
  function getFerrenBackground()
  {
      // TO-DO -> Add if statements checking which ancestry is selected, then
      // do the following for the appropriate array and length.
      var randomNumber = Math.floor(Math.random() * (ferrenBackground.length));
      document.getElementById('ferrenBackgroundDisplay').innerHTML = ferrenBackground[randomNumber];
  }
  
  function getFerrenPersonality()
  {
      var randomNumber = Math.floor(Math.random() * (ferrenPersonality.length));
      document.getElementById('ferrenPersonalityDisplay').innerHTML = ferrenPersonality[randomNumber];
  }
  
  function getFerrenAge()
  {
      var randomNumber = Math.floor(Math.random() * (ferrenAge.length));
      document.getElementById('ferrenAgeDisplay').innerHTML = ferrenAge[randomNumber];
  }
  
  function getFerrenBuild()
  {
      var randomNumber = Math.floor(Math.random() * (ferrenBuild.length));
      document.getElementById('ferrenBuildDisplay').innerHTML = ferrenBuild[randomNumber];
  }
  
  function getFerrenHumanAppearance()
  {
      var randomNumber = Math.floor(Math.random() * (ferrenHumanAppearance.length));
      document.getElementById('ferrenHumanAppearanceDisplay').innerHTML = ferrenHumanAppearance[randomNumber];
  }
  
  function getFelineAppearance()
  {
      var randomNumber = Math.floor(Math.random() * (felineAppearance.length));
      document.getElementById('felineAppearanceDisplay').innerHTML = felineAppearance[randomNumber];
  }
  
  function getFerrenBackground()
  {
      var randomNumber = Math.floor(Math.random() * (ferrenBackground.length));
      document.getElementById('ferrenBackgroundDisplay').innerHTML = ferrenBackground[randomNumber];
  }
  
  function getFerrenMannerism()
  {
      var randomNumber = Math.floor(Math.random() * (ferrenMannerism.length));
      document.getElementById('ferrenMannerismDisplay').innerHTML = ferrenMannerism[randomNumber];
  }
  
  /**
   * Function to create a complete character with the click of a button.
   */
  function createCompleteFerrenCharacter()
  {
      getFerrenAge();
      getFerrenBuild();
      getFerrenHumanAppearance();
      getFelineAppearance();
      getFerrenMannerism();
      getFerrenPersonality();
      getFerrenBackground();
  }