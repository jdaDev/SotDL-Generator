function resetPage()
{
    location.reload();
}

function rollCharacter(){
    var e = document.getElementById("ancestry");
    var selectedAncestry = e.value;

    if(selectedAncestry == "changling"){
        createCompleteChanglingCharacter();
    }
    else if(selectedAncestry == "human"){
        createCompleteHumanCharacter();
    }
}