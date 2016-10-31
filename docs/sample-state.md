```js
{
  currentUser: {
    id: 1,
    username: "n_gaged"
  },
  forms: {
    signUp: {errors: []},
    logIn: {errors: []},
    createList: {errors: ["Title can't be blank"]}
    createItem: {errors: []}
    createEvent: {errors: []}
  },
  wishlistItems: {
    1: {
      title: "Sample State",
      body: "is useful to plan",
      author_id: 1,
      notebook_id: 1
      tags: {
        1: {
          id: 1
          name: "Coding"
        }
      }
    }
  },
  wishlists: {
    1: {
      title: "Redux",
      author_id: 1,
      description: "is cool"
    }
  }
  tagFilters: [1, 7, 14] // Used to track selected Tags for filtering of items
}
```
