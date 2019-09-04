fetch("http://localhost:3000/entries")
.then(response => response.json())
.then(parsedEntry => {
    printEntriesToDOM(parsedEntry)
})