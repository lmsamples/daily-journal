entryArray = [
    {
        concept: "Defining Variables",
        date: "8/12/2019",
        content: "javascript hurts my head",
        mood: "bored"
    },
    {
        concept: "Looping Arrays",
        date: "8/113/2019",
        content: "I'm gonna eat at schlotsky's",
        mood: "tired"
    }
]

console.log(entryArray)


var content = document.querySelector("#dom")

var submit = document.querySelector("#entry-submit")

submit.addEventListener("click", function(){

    let entryConcept = document.querySelector("#entry-concept").value
    let entryDate = document.querySelector("#entry-date").value
    let entryContent = document.querySelector("#entry-content").value
    let entryMood = document.querySelector("#entry-mood").value

    var entryString = {
    concept: entryConcept,
    date: entryDate,
    content: entryContent,
    mood: entryMood
    }
    entryArray.push(entryString)
    console.log(entryArray)

    for (i = 0 ; i < entryArray.length ; i++){

        content.innerHTML += `
        <article>
            <h2>${entryArray[i].concept}</h2>
            <h4>${entryArray[i].date}</h4>
            <p>${entryArray[i].content}</p>
            <p>${entryArray[i].mood}</p>
        </article>
        `
    }
})
