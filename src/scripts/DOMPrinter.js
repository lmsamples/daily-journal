const printEntriesToDOM = (entriesArray) => {
    document.querySelector("#dom-list").innerHTML = ""
    entriesArray.forEach(singleEntry => {
        document.querySelector("#dom-list").innerHTML +=     `
        <li class="journal-entry">
          <a href="#">
            <h2 class="entry-head">${singleEntry.concept}</h2>
            <h4 class="entry-date">${singleEntry.date}</h4>
            <p class="entry-content">${singleEntry.content}</p>
            <br>
            <center><p class="entry-mood">${singleEntry.mood}</p>
            <br>
            <div class="button-area">
            <button class="delete-button" id="delete-${singleEntry.id}">Delete</button></center>
            </div>
         </a>
         </li>
         `
    })
}