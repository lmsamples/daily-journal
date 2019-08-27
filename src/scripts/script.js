entryArray = [
    {
        title: "I'm exhausted",
        date: "8/12/2019",
        content: "javascript hurts my head"
    },
    {
        title: "I wanna sleep",
        date: "8/113/2019",
        content: "I'm gonna eat at schlotsky's"
    }
]
console.log(entryArray)


var content = document.querySelector("#dom")

var submit = document.querySelector("#entry-submit")

submit.addEventListener("click", function(){

    let entryTitle = document.querySelector("#entry-title").value
    let entryDate = document.querySelector("#entry-date").value
    let entryContent = document.querySelector("#entry-content").value

    var entryString = {
    title: entryTitle,
    date: entryDate,
    content: entryContent
    }
    entryArray.push(entryString)
    console.log(entryArray)

    for (i = 0 ; i < entryArray.length ; i++){

        const domString = `
            <h2>${entryArray[i].title}</h2>
            <h4>${entryArray[i].date}</h4>
            <p>${entryArray[i].content}</p>
        `
        console.log(domString)
        content.innerHTML += domString
    }
})
