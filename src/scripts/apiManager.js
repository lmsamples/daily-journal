const apiManager = {
  getAllEntries:(string) => { 
      return fetch(`http://localhost:3000/entries`)
      .then(response => response.json())
      .then(paresedEntry=>{
          paresedEntry.forEach(singleEntry =>{
          document.querySelector("#dom").innerHTML += entryList(singleEntry)
        })
})
}}