const printEntriesToDOM = (entriesArray) => {
    document.querySelector("#dom").innerHTML = ""
    entriesArray.forEach(singleEntry => {
        document.querySelector("#dom").innerHTML +=     `
        <div class="journal-entry">
         <article class="entry-data">
         <h2 class="entry-head">${singleEntry.concept}</h2>
         <h4 class="entry-date">${singleEntry.date}</h4>
         <p class="entry-content">${singleEntry.content}</p>
         <p class="entry-mood">${singleEntry.mood}</p>
         </article>
         </div>
         `
       
       
    })
}