var content = document.querySelector("#dom")
const submit = document.querySelector("#entry-submit")
submit.addEventListener("click", function(){

    let entryConcept = document.querySelector("#entry-concept").value
    let entryDate = document.querySelector("#entry-date").value
    let entryContent = document.querySelector("#entry-content").value
    let entryMood = document.querySelector("#entry-mood").value

    var singleEntryPost = {
    concept: entryConcept,
    date: entryDate,
    content: entryContent,
    mood: entryMood
    }
    console.log(singleEntryPost)

    fetch("http://localhost:3000/entries", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(singleEntryPost)
      }).then(() => {
   
        fetch("http://localhost:3000/entries")
        .then(response => response.json())
        .then(parsedEntry => {

            printStudentsToDOM(parsedEntry)
        })
      });
    });


