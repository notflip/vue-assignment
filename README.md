# Vue Assignment Appeel

## Setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Unit Tests
```
npm run test:unit
```

## Filtering
Filtering happens after all commits have been fetched, using the search functionality of github requires the author of the commits to be authenticated.

## ES6 Features

Destructuring, to receive only the commit from the complete state object

```
load: ({ commit }, repositoryId) => {
```

Filter and fat arrow function, for clean one-liners, in this case for filtering commits based on a search term

```
return this.commits.filter(commit => commit.message.toLowerCase().includes(this.search.toLowerCase()))
```