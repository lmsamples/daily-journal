const apiManager = {
    getAllEntries: () => {
      return fetch("http://localhost:3000/entries")
      .then(entries => entries.json())
      .then(parsedEntry => parsedEntry.foreach(singleEntry)
      )
    }