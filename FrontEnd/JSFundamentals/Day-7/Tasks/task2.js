//Solve each using destructuring only (no manual indexing):
//1. Swap two variables `a` and `b` without a temp variable
//2. Extract `id` and `email` from a deeply nested API response: `{ user: { profile: { id, email } } }`
//3. Write a function `formatAddress({ street, city, country = 'India' })` with a default
//4. Extract the first item and "the rest" from an array of scores

const swapVariables = (a, b) => {
  [a, b] = [b, a];
  return [a, b];
}

//2. Extract `id` and `email` from a deeply nested API response
const extractUserInfo = (response) => {
  const { user: { profile: { id, email } } } = response;
  return { id, email };
}

//3. Write a function `formatAddress({ street, city, country = 'India' })` with a default
const formatAddress = ({ street, city, country = 'India' }) => {
  return `${street}, ${city}, ${country}`;
};

//4. Extract the first item and "the rest" from an array of scores
const extractFirstAndRest = (scores) => {
  const [first, ...rest] = scores;
  return { first, rest };
};
