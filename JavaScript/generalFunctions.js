// function to reload the page (clean up)
function resetPage()
{
    location.reload();
}

function clearBox(elementID)
{
    document.getElementById(elementID).innerHTML = "";
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
}