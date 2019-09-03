var content = document.querySelector("#dom")

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
    entries.push(entryString)
    console.log(entries)


})

content.innerHTML += `
<article>
    <h2>${entries.concept}</h2>
    <h4>${entries.date}</h4>
    <p>${entries.content}</p>
    <p>${entries.mood}</p>
</article>
`