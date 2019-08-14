// function to reload the page (clean up)
function resetPage()
{
    location.reload();
}

function clearBox(elementID)
{
    document.getElementById(elementID).innerHTML = "";
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

// Depending on which ancestry is selected from drop-down menu,
// this function will create the appropriate character with said ancestry.
function rollCharacter(){
    // Maybe use getElementByClassName???
    var e = document.getElementById("ancestry");
    var selectedAncestry = e.value;

    /* Clear page. Clear all ancestry paragraphs. This is not efficient code,
       but it gets the job done for now. */
    // human
    clearBox("humanBackgroundDisplay");
    clearBox("humanPersonalityDisplay");
    clearBox("humanReligionDisplay");
    clearBox("humanAgeDisplay");
    clearBox("humanBuildDisplay");
    clearBox("humanAppearanceDisplay");

    // changling
    clearBox("changlingBackgroundDisplay");
    clearBox("changlingPersonalityDisplay");
    clearBox("changlingTrueAgeDisplay");
    clearBox("changlingApparentAncestryDisplay");
    clearBox("changlingApparentGenderDisplay");
    clearBox("changlingQuirkDisplay");

    // clockwork
    clearBox("clockworkAgeDisplay");
    clearBox("clockworkPurposeDisplay");
    clearBox("clockworkFormDisplay");
    clearBox("clockworkAppearanceDisplay");
    clearBox("clockworkBackgroundDisplay");
    clearBox("clockworkPersonalityDisplay");

    // dwarf
    clearBox("dwarfAgeDisplay");
    clearBox("dwarfBuildDisplay");
    clearBox("dwarfAppearanceDisplay");
    clearBox("dwarfHatredDisplay");
    clearBox("dwarfBackgroundDisplay");
    clearBox("dwarfPersonalityDisplay");

    // goblin
    clearBox("goblinBackgroundDisplay");
    clearBox("goblinPersonalityDisplay");
    clearBox("goblinOddHabitDisplay");
    clearBox("goblinAgeDisplay");
    clearBox("goblinBuildDisplay");
    clearBox("goblinDistinctiveAppearanceDisplay");

    // orc
    clearBox("orcAgeDisplay");
    clearBox("orcBuildDisplay");
    clearBox("orcAppearanceDisplay");
    clearBox("orcBackgroundDisplay");
    clearBox("orcPersonalityDisplay");

    // faun
    clearBox("faunAgeDisplay");
    clearBox("faunBuildDisplay");
    clearBox("faunAppearanceDisplay");
    clearBox("faunBackgroundDisplay");
    clearBox("faunPersonalityDisplay");

    // ferren
    clearBox("ferrenAgeDisplay");
    clearBox("ferrenBuildDisplay");
    clearBox("ferrenHumanAppearanceDisplay");
    clearBox("felineAppearanceDisplay");
    clearBox("ferrenMannerismDisplay");
    clearBox("ferrenPersonalityDisplay");
    clearBox("ferrenBackgroundDisplay");

    // halfling
    clearBox("halflingAgeDisplay");
    clearBox("halflingBuildDisplay");
    clearBox("halflingAppearanceDisplay");
    clearBox("halflingBackgroundDisplay");
    clearBox("halflingReligionDisplay");
    clearBox("halflingPersonalityDisplay");

    // if changling is selected, clear text and create character.
    if(selectedAncestry == "changling"){
        createCompleteChanglingCharacter(); 
    }
    else if(selectedAncestry == "human"){
        createCompleteHumanCharacter();
    }
    else if(selectedAncestry == "orc"){
        createCompleteOrcCharacter();
    }
    else if(selectedAncestry == "goblin"){
        createCompleteGoblinCharacter();
    }
    else if(selectedAncestry == "faun"){
        createCompleteFaunCharacter();
    }
    else if(selectedAncestry == "clockwork"){
        createCompleteClockworkCharacter();
    }
    else if(selectedAncestry == "dwarf"){
        createCompleteDwarfCharacter();
    }
    else if(selectedAncestry == "halfling"){
        createCompleteHalflingCharacter();
    }
    else if(selectedAncestry == "ferren"){
        createCompleteFerrenCharacter();
    }
}

// Get stats depending on which Ancestry is selected
function getStats(){
    var e = document.getElementById("ancestry");
    var selectedAncestry = e.value;

    if(selectedAncestry == "changling"){
        document.getElementById('strength').innerHTML = changlingStrength;
        document.getElementById('agility').innerHTML = changlingAgility;
        document.getElementById('intellect').innerHTML = changlingIntellect;
        document.getElementById('will').innerHTML = changlingWill;
        document.getElementById('perception').innerHTML = changlingPerception;
        document.getElementById('defense').innerHTML = changlingDefense;
        document.getElementById('health').innerHTML = changlingHealth;
        document.getElementById('healingRate').innerHTML = changlingHealingRate;
        document.getElementById('size').innerHTML = changlingSize;
        document.getElementById('speed').innerHTML = changlingSpeed;
        document.getElementById('power').innerHTML = changlingPower;
        document.getElementById('damage').innerHTML = changlingDamage;
        document.getElementById('insanity').innerHTML = changlingInsanity;
        document.getElementById('corruption').innerHTML = changlingCorruption;
    }
    else if(selectedAncestry == "human"){
        document.getElementById('strength').innerHTML = humanStrength;
        document.getElementById('agility').innerHTML = humanAgility;
        document.getElementById('intellect').innerHTML = humanIntellect;
        document.getElementById('will').innerHTML = humanWill;
        document.getElementById('perception').innerHTML = humanPerception;
        document.getElementById('defense').innerHTML = humanDefense;
        document.getElementById('health').innerHTML = humanHealth;
        document.getElementById('healingRate').innerHTML = humanHealingRate;
        document.getElementById('size').innerHTML = humanSize;
        document.getElementById('speed').innerHTML = humanSpeed;
        document.getElementById('power').innerHTML = humanPower;
        document.getElementById('damage').innerHTML = humanDamage;
        document.getElementById('insanity').innerHTML = humanInsanity;
        document.getElementById('corruption').innerHTML = humanCorruption;
    }
    else if(selectedAncestry == "orc"){
        document.getElementById('strength').innerHTML = orcStrength;
        document.getElementById('agility').innerHTML = orcAgility;
        document.getElementById('intellect').innerHTML = orcIntellect;
        document.getElementById('will').innerHTML = orcWill;
        document.getElementById('perception').innerHTML = orcPerception;
        document.getElementById('defense').innerHTML = orcDefense;
        document.getElementById('health').innerHTML = orcHealth;
        document.getElementById('healingRate').innerHTML = orcHealingRate;
        document.getElementById('size').innerHTML = orcSize;
        document.getElementById('speed').innerHTML = orcSpeed;
        document.getElementById('power').innerHTML = orcPower;
        document.getElementById('damage').innerHTML = orcDamage;
        document.getElementById('insanity').innerHTML = orcInsanity;
        document.getElementById('corruption').innerHTML = orcCorruption;
    }
    else if(selectedAncestry == "goblin"){
        document.getElementById('strength').innerHTML = goblinStrength;
        document.getElementById('agility').innerHTML = goblinAgility;
        document.getElementById('intellect').innerHTML = goblinIntellect;
        document.getElementById('will').innerHTML = goblinWill;
        document.getElementById('perception').innerHTML = goblinPerception;
        document.getElementById('defense').innerHTML = goblinDefense;
        document.getElementById('health').innerHTML = goblinHealth;
        document.getElementById('healingRate').innerHTML = goblinHealingRate;
        document.getElementById('size').innerHTML = goblinSize;
        document.getElementById('speed').innerHTML = goblinSpeed;
        document.getElementById('power').innerHTML = goblinPower;
        document.getElementById('damage').innerHTML = goblinDamage;
        document.getElementById('insanity').innerHTML = goblinInsanity;
        document.getElementById('corruption').innerHTML = goblinCorruption;
    }
    else if(selectedAncestry == "faun"){
        document.getElementById('strength').innerHTML = faunStrength;
        document.getElementById('agility').innerHTML = faunAgility;
        document.getElementById('intellect').innerHTML = faunIntellect;
        document.getElementById('will').innerHTML = faunWill;
        document.getElementById('perception').innerHTML = faunPerception;
        document.getElementById('defense').innerHTML = faunDefense;
        document.getElementById('health').innerHTML = faunHealth;
        document.getElementById('healingRate').innerHTML = faunHealingRate;
        document.getElementById('size').innerHTML = faunSize;
        document.getElementById('speed').innerHTML = faunSpeed;
        document.getElementById('power').innerHTML = faunPower;
        document.getElementById('damage').innerHTML = faunDamage;
        document.getElementById('insanity').innerHTML = faunInsanity;
        document.getElementById('corruption').innerHTML = faunCorruption;
    }
    else if(selectedAncestry == "clockwork"){
        document.getElementById('strength').innerHTML = clockworkStrength;
        document.getElementById('agility').innerHTML = clockworkAgility;
        document.getElementById('intellect').innerHTML = clockworkIntellect;
        document.getElementById('will').innerHTML = clockworkWill;
        document.getElementById('perception').innerHTML = clockworkPerception;
        document.getElementById('defense').innerHTML = clockworkDefense;
        document.getElementById('health').innerHTML = clockworkHealth;
        document.getElementById('healingRate').innerHTML = clockworkHealingRate;
        document.getElementById('size').innerHTML = clockworkSize;
        document.getElementById('speed').innerHTML = clockworkSpeed;
        document.getElementById('power').innerHTML = clockworkPower;
        document.getElementById('damage').innerHTML = clockworkDamage;
        document.getElementById('insanity').innerHTML = clockworkInsanity;
        document.getElementById('corruption').innerHTML = clockworkCorruption;
    }
    else if(selectedAncestry == "dwarf"){
        document.getElementById('strength').innerHTML = dwarfStrength;
        document.getElementById('agility').innerHTML = dwarfAgility;
        document.getElementById('intellect').innerHTML = dwarfIntellect;
        document.getElementById('will').innerHTML = dwarfWill;
        document.getElementById('perception').innerHTML = dwarfPerception;
        document.getElementById('defense').innerHTML = dwarfDefense;
        document.getElementById('health').innerHTML = dwarfHealth;
        document.getElementById('healingRate').innerHTML = dwarfHealingRate;
        document.getElementById('size').innerHTML = dwarfSize;
        document.getElementById('speed').innerHTML = dwarfSpeed;
        document.getElementById('power').innerHTML = dwarfPower;
        document.getElementById('damage').innerHTML = dwarfDamage;
        document.getElementById('insanity').innerHTML = dwarfInsanity;
        document.getElementById('corruption').innerHTML = dwarfCorruption;
    }
    else if(selectedAncestry == "halfling"){
        document.getElementById('strength').innerHTML = halflingStrength;
        document.getElementById('agility').innerHTML = halflingAgility;
        document.getElementById('intellect').innerHTML = halflingIntellect;
        document.getElementById('will').innerHTML = halflingWill;
        document.getElementById('perception').innerHTML = halflingPerception;
        document.getElementById('defense').innerHTML = halflingDefense;
        document.getElementById('health').innerHTML = halflingHealth;
        document.getElementById('healingRate').innerHTML = halflingHealingRate;
        document.getElementById('size').innerHTML = halflingSize;
        document.getElementById('speed').innerHTML = halflingSpeed;
        document.getElementById('power').innerHTML = halflingPower;
        document.getElementById('damage').innerHTML = halflingDamage;
        document.getElementById('insanity').innerHTML = halflingInsanity;
        document.getElementById('corruption').innerHTML = halflingCorruption;
    }
    else if(selectedAncestry == "ferren"){
        document.getElementById('strength').innerHTML = ferrenStrength;
        document.getElementById('agility').innerHTML = ferrenAgility;
        document.getElementById('intellect').innerHTML = ferrenIntellect;
        document.getElementById('will').innerHTML = ferrenWill;
        document.getElementById('perception').innerHTML = ferrenPerception;
        document.getElementById('defense').innerHTML = ferrenDefense;
        document.getElementById('health').innerHTML = ferrenHealth;
        document.getElementById('healingRate').innerHTML = ferrenHealingRate;
        document.getElementById('size').innerHTML = ferrenSize;
        document.getElementById('speed').innerHTML = ferrenSpeed;
        document.getElementById('power').innerHTML = ferrenPower;
        document.getElementById('damage').innerHTML = ferrenDamage;
        document.getElementById('insanity').innerHTML = ferrenInsanity;
        document.getElementById('corruption').innerHTML = ferrenCorruption;
    }
}

function getLanguages(){
    // Maybe use getElementByClassName???
    var e = document.getElementById("ancestry");
    var selectedAncestry = e.value;

    // if changling is selected, clear text and create character.
    if(selectedAncestry == "changling"){
        document.getElementById('languages').innerHTML = changlingLanguages; 
    }
    else if(selectedAncestry == "human"){
        document.getElementById('languages').innerHTML = humanLanguages;
    }
    else if(selectedAncestry == "orc"){
        document.getElementById('languages').innerHTML = orcLanguages;
    }
    else if(selectedAncestry == "goblin"){
        document.getElementById('languages').innerHTML = changlingLanguages;
    }
    else if(selectedAncestry == "faun"){
        document.getElementById('languages').innerHTML = faunLanguages;
    }
    else if(selectedAncestry == "clockwork"){
        document.getElementById('languages').innerHTML = clockworkLanguages;
    }
    else if(selectedAncestry == "dwarf"){
        document.getElementById('languages').innerHTML = dwarfLanguages;
    }
    else if(selectedAncestry == "halfling"){
        document.getElementById('languages').innerHTML = halflingLanguages;
    }
    else if(selectedAncestry == "ferren"){
        document.getElementById('languages').innerHTML = ferrenLanguages;
    }
}