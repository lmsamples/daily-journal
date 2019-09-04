var content = document.querySelector("#dom")
const submit = document.querySelector("#entry-submit")
submit.addEventListener("click", function(){

    let entryConcept = document.querySelector("#entry-concept").value
    let entryDate = document.querySelector("#entry-date").value
    let entryContent = document.querySelector("#entry-content").value
    let entryMood = document.querySelector("#entry-mood").value

    var singleEntry = {
    concept: entryConcept,
    date: entryDate,
    content: entryContent,
    mood: entryMood
    }
    console.log(singleEntry)

    document.querySelector("#dom").innerHTML = ""
    apiManager.getAllEntries(singleEntry)

})



