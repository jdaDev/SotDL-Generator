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