



const submit = document.querySelector("#entry-submit").addEventListener("click", function(){

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

            printEntriesToDOM(parsedEntry)
        })
      });
    });

    document.querySelector("body").addEventListener("click", () => {
        if (event.target.id.includes("delete-")) {
          const wordArray = event.target.id.split("-");
          const idToDelete = wordArray[1];

         fetch(`http://localhost:3000/entries/${idToDelete}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
              },
            }).then(() => {
                
                fetch("http://localhost:3000/entries")
                .then(response => response.json())
                .then(parsedEntry => {
        
                printEntriesToDOM(parsedEntry)
            });
          });
        }
      });