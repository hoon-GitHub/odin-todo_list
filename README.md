# odin-todo_list
## The Odin Project: Todo List
Project assignment page: [Project: Todo List](https://www.theodinproject.com/lessons/node-path-javascript-todo-list)\
Project started on: **5/6/2024**\
Project finished on: **TBD**

### Project Planning
- Each todo item will be an object with properities (title, description, dueDate, priority, completion, project, ...).
- There will be multiple todo lists (projects): probably use tabbed-browsing? Maybe make them to be simply filtered list?
- User should be able to add new item to the list and edit/delete an existing item.
- I should use webpack, and try to learn to utilize some other npm libraries.
- As instructed, I should use localStorage to store all data - I will be learning how to interact with JSON data!
- Just like the previous TicTacToe project, I will try to work separately on the UI portion from the fully-functioning console version of the application. So work on backend first, then the frontend.
- My goal is a simple and intuitive app, with a modern and minimalist design (look at community solutions for ideas/inspiration).

### Mid-Project Thoughts/Progress
- Took some time to brainstorm how to structure building blocks (todo items, projects, ...).
- Decided to use CLASS for popularity, rather than regular constructor or factory function.
- Debated if I should add project property to Todo vs. make a separate class to contain a list of Todo items. Decided to go with a separate class.
- Decided to keep classes simple (at least to start out with) - constructor, add, remove, print..
- Later decided to remove the whole Project class, and instead add a property to Todo, to act similarly as tags (was a fairly major overhaul).
- Also decided to get rid of tags. Project property will act similarly as a tag, although not 100% identical.
- Data entry validation will need to be implemented, especially for the `dueDate` and making the `title` field required.
- Still pending:
  - Data entry validation, making `title` required and validating `dueDate` format (use date selector?)
  - Utilizing `localStorage` to store the data
  - Maybe I should try adding some animations?

### Post-Project Remarks
- Using variables for colors (and maybe other things) in css, was very convenient and helpful!
- Learned when to use `onclick` instead of `addEventListener('click')` - without caution EventListener can get added multiple times!
- Assignment instruction was asking to separate app logics (backend) from DOM-related stuff (frontend). I tried doing that but it feels like some frontend modules contain SOME app logics? Would it be possible to fully separate front and back?
