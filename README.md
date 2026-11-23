# CvSU Mini Store

A React mini product catalog for DCIT26 Laboratory Exercise 3.

## Run locally

```bash
npm install
npm run dev
```

## Guide Answers

1. **Props vs. state:** Props are data passed from a parent to a component. State is data managed and updated by a component itself.
2. **Why props cannot be modified:** Props are read-only inputs used to keep component data flow predictable and one-directional.
3. **How callbacks communicate upward:** A child receives an `onAddToCart` function through props, calls it with the product title, and the parent function updates parent state.
4. **Why keys are required:** Keys help React identify and efficiently update list items. Missing or duplicated keys can cause incorrect rendering or component state reuse.
5. **What children provides:** The `children` prop renders nested JSX placed between a component's opening and closing tags, allowing reusable layouts to accept custom content such as badges.

## Lab 4 Guide Answers

1. **Why use separate search states?** `searchText` updates immediately as the user types, while `debouncedSearch` changes only after typing pauses for 300 milliseconds. This keeps filtering from running on every keystroke.
2. **Why clean up the debounce timer?** Cleanup cancels the previous timer when the text changes, so an outdated search cannot update the results later.
3. **What does the dependency array do?** It controls when an effect reruns. An empty array runs the effect after the initial render; omitting the array runs it after every render.
4. **Why avoid sorting the original array?** Sorting mutates the array in place. Copying it first keeps the imported product data unchanged for other uses.
5. **Should filtered products be state?** No. They are derived from the search, category, sort, and product data, so calculating them during render avoids storing duplicate state that could become out of sync.
