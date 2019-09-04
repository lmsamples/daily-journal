
        function entryList(singleEntry) {
            var ListString = ""
            `<div class="journal-entry">
            <article>
            <h2>${singleEntry.concept}</h2>
            <h4>${singleEntry.date}</h4>
            <p>${singleEntry.content}</p>
            <p>${singleEntry.mood}</p>
            </article>
            </div>`
            return ListString
          }