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
