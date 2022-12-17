# Technical Assessment - SEEK

Response by David Dembo, Dec 2022 to [this brief](BRIEF.md)

## Getting Started

In your terminal, run `npm install`, then run `npm start` from the project directory.


## Discussion

### Design decisions

The brief says not to focus on the UI for this project, however, by using Chakra, I'm able to rapidly create a far nicer prototype with virtually zero additional effort, compared with using raw unstyled HTML elements.

I decided to use the library SWR to simulate data fetching from a `/cart` endpoint, and simply provide it with a mocked fetcher function. This more closely mimics a real-world solution, and also allows me to strongly type the response with a common interface. It also allows me to cleanly isolate the logic required to calculate the discount for a customer, which makes it easier to test, and is much faster than creating a mock API.

In a real-world application, the cart would likely be created/modified/returned by a backend service. This or another service would probably also contain the business logic to check if any discounts should be applied, and their value, and then return this data along with the cart.

Since completely mocking a response with these additional fields pre-calculated would mean I wouldn't have to implement the very logic which is the focus of this assessment, I am instead creating a custom hook, `useCart` and calculating it on the front-end.