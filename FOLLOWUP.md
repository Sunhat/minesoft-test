1. How long did you spend on the coding test?
    - Worked 7.30am to 9.30am
    - Worked 2pm to ~4pm


2. Which parts were the most challenging?

Nothing overly challenging about this task. Having chosen TypeScript and React, I did add significant overhead for time on the frontend. I think if I had used Blades & jQuery, I'd have achieved a better UI faster, albeit less maintainable/scalable.

As I was trying to move fast, I did not introduce Axios for API requests, use a global state management, and used Inertia + redirects to refresh data

3. What would you add to your solution if you had time? What further improvements or features would you add?

- Ensure Inertia isn't reloading data unnecessarily by using responses to edit global/parent state
- Pagination
- UI/UX considerations for the forms. Create Todo row should have "Add an Item" button, that on press reveals the form. Submission hides again.
- Re-ordering / sorting
- Trello Lists each todo-list and its items. Much nicer UI, but a lot do.

4. How would you track down a performance issue in production? Have you ever had to do this?

Track down? Performance may come from backend or frontend. 

This could be related to inefficient data sorting, large datasets, inefficient database queries,

On the frontend, I've generally used manual debugging to add/remove components to track down which
