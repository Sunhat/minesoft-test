1. How long did you spend on the coding test?
    - Worked 8am to ~9am
    - Worked 2pm to ~5pm, including this FOLLOWUP
    - Not without some distractions

2. Which parts were the most challenging?

Nothing overly challenging about this task. Having chosen TypeScript and React, I did add significant overhead for time on the frontend. I think if I had used Blades & jQuery, I'd have achieved a better UI faster, albeit less maintainable/scalable.

As I was trying to move fast, I did not introduce Axios for API requests, use a global state management, and used Inertia + redirects to refresh data

3. What would you add to your solution if you had time? What further improvements or features would you add?

- Ensure Inertia isn't reloading data unnecessarily by using responses to edit global/parent state
- Pagination
- UI/UX considerations for the forms. Create Todo row should have "Add an Item" button, that on press reveals the form. Submission hides again.
- Re-ordering / sorting
- Trello Lists each todo-list and its items. Much nicer UI, but a lot do.
- Saving more than one todo item clears the other edited fields, due to Inertia reload

4. How would you track down a performance issue in production? Have you ever had to do this?

Track down? Performance may come from backend or frontend. 

This could be related to inefficient data sorting, large datasets, inefficient database queries,

On the frontend, I've generally used manual debugging to add/remove components to track down which is causing issues, or using browser profiling, but not too familiar with it.

For backend, using xdebug, clockwork, statistical monitoring (database, CPU, memory, response times, etc)

Yes I have had to do this for Database queries (n+1), for finding an infinite loops of an API calling itself, crashing production.
