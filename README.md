# Friend Finder

https://friend-finder-mrgm.herokuapp.com/

After filling out the survey, you will be matched with the person you are most similar with.

---

## Implementation

### Node
- Running JavaScript on the backend
- Ability to use code snippets from other packages

### Express
- Framework for setting up a server
- Routing
- Initiate listening of server
- Decode POST method body

###  API

| HTTP Method | Route | Return Type | Purpose |
| ----------- | ----- | ----------- | ------- |
| GET | / | HTML page | Displays home page |
| GET | /survey | HTML page | Displays survey page |
| GET | /friends | JSON | Gets friend data |
| POST | /friends | JSON | Adds to friend data |

### Bootstrap
- Layout
- Form
- Custom CSS

### jQuery
- Get values from form
- Use `.ajax` method to call API

---

## Package Dependencies

| Package | Purpose |
| ------- | ------- |
| [Express](https://www.npmjs.com/package/express) | Node.js framework for creating a server |