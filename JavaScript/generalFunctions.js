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

    // if changling is selected, clear text and create character.
    if(selectedAncestry == "changling"){
        clearBox("completeBackgroundDisplay");
        clearBox("completePersonalityDisplay");
        clearBox("completeReligionDisplay");
        clearBox("completeAgeDisplay");
        clearBox("completeBuildDisplay");
        clearBox("completeAppearanceDisplay");
        createCompleteChanglingCharacter(); 
    }
    else if(selectedAncestry == "human"){
        clearBox("changlingBackgroundDisplay");
        clearBox("changlingPersonalityDisplay");
        clearBox("changlingTrueAgeDisplay");
        clearBox("changlingApparentAncestryDisplay");
        clearBox("changlingApparentGenderDisplay");
        clearBox("changlingQuirkDisplay");
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
 /*FUNCTIONS FOR CLEARING CHARACTER TEXT TO MAKE WAY FOR NEW CHARACTER*/

// Function to clear human character
function clearHuman(){
    document.getElementById("completeBackgroundDisplay").innerHTML = "";
    document.getElementById("completePersonalityDisplay").innerHTML = "";
    document.getElementById("completeReligionDisplay").innerHTML = "";
    document.getElementById("completeAgeDisplay").innerHTML = "";
    document.getElementById("completeBuildDisplay").innerHTML = "";
    document.getElementById("completeAppearanceDisplay").innerHTML = "";
}

// Function to clear changling character
function clearChangling(){
    document.getElementById("changlingBackgroundDisplay").innerHTML = "";
    document.getElementById("changlingPersonalityDisplay").innerHTML = "";
    document.getElementById("changlingTrueAgeDisplay").innerHTML = "";
    document.getElementById("changlingApparentAncestryDisplay").innerHTML = "";
    document.getElementById("changlingApparentGenderDisplay").innerHTML = "";
    document.getElementById("changlingQuirkDisplay").innerHTML = "";
}

// Function to clear clockwork character
function clearHuman(){
    document.getElementById("completeBackgroundDisplay").innerHTML = "";
    document.getElementById("completeBackgroundDisplay").innerHTML = "";
    document.getElementById("completeBackgroundDisplay").innerHTML = "";
    document.getElementById("completeBackgroundDisplay").innerHTML = "";
    document.getElementById("completeBackgroundDisplay").innerHTML = "";
    document.getElementById("completeBackgroundDisplay").innerHTML = "";
}

// Function to clear dwarf character
function clearHuman(){
    document.getElementById("completeBackgroundDisplay").innerHTML = "";
    document.getElementById("completeBackgroundDisplay").innerHTML = "";
    document.getElementById("completeBackgroundDisplay").innerHTML = "";
    document.getElementById("completeBackgroundDisplay").innerHTML = "";
    document.getElementById("completeBackgroundDisplay").innerHTML = "";
    document.getElementById("completeBackgroundDisplay").innerHTML = "";
}

// Function to clear goblin character
function clearHuman(){
    document.getElementById("completeBackgroundDisplay").innerHTML = "";
    document.getElementById("completeBackgroundDisplay").innerHTML = "";
    document.getElementById("completeBackgroundDisplay").innerHTML = "";
    document.getElementById("completeBackgroundDisplay").innerHTML = "";
    document.getElementById("completeBackgroundDisplay").innerHTML = "";
    document.getElementById("completeBackgroundDisplay").innerHTML = "";
}

// Function to clear orc character
function clearHuman(){
    document.getElementById("completeBackgroundDisplay").innerHTML = "";
    document.getElementById("completeBackgroundDisplay").innerHTML = "";
    document.getElementById("completeBackgroundDisplay").innerHTML = "";
    document.getElementById("completeBackgroundDisplay").innerHTML = "";
    document.getElementById("completeBackgroundDisplay").innerHTML = "";
    document.getElementById("completeBackgroundDisplay").innerHTML = "";
}

// Function to clear faun character
function clearHuman(){
    document.getElementById("completeBackgroundDisplay").innerHTML = "";
    document.getElementById("completeBackgroundDisplay").innerHTML = "";
    document.getElementById("completeBackgroundDisplay").innerHTML = "";
    document.getElementById("completeBackgroundDisplay").innerHTML = "";
    document.getElementById("completeBackgroundDisplay").innerHTML = "";
    document.getElementById("completeBackgroundDisplay").innerHTML = "";
}

// Function to clear halfling character
function clearHuman(){
    document.getElementById("completeBackgroundDisplay").innerHTML = "";
    document.getElementById("completeBackgroundDisplay").innerHTML = "";
    document.getElementById("completeBackgroundDisplay").innerHTML = "";
    document.getElementById("completeBackgroundDisplay").innerHTML = "";
    document.getElementById("completeBackgroundDisplay").innerHTML = "";
    document.getElementById("completeBackgroundDisplay").innerHTML = "";
}