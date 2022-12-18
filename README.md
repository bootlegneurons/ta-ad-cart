# Technical Assessment - SEEK

Response by David Dembo, Dec 2022 to [this brief](BRIEF.md)

## Getting Started

In your terminal, run `npm install`, then run `npm start` from the project directory.

Run unit tests with `npm test`.

## Discussion

### Design decisions

The brief says not to focus on the UI for this project, however, by using Chakra, I'm able to rapidly create a far nicer prototype with virtually zero additional effort, compared with using raw unstyled HTML elements.

I decided to use the library SWR to simulate data fetching from a `/cart` endpoint, and provide it with a mocked fetcher function. This more closely mimics a real-world solution, and also allows me to strongly type the response with a common interface. It also allows me to cleanly isolate the logic required to calculate the discount for a customer, which makes it easier to test, and is much faster than creating a mock API.

In a real-world application, the cart would likely be created/modified/returned by a backend service. This or another service would probably also contain the business logic to check if any discounts should be applied, and their value, and then return this data along with the cart.

Since completely mocking a response with these additional fields pre-calculated would mean I wouldn't have to implement the very logic which is the focus of this assessment, I am instead creating a custom hook, `useCart` and calculating it on the front-end with a mocked fetcher.

I also decided to limit the quantity of line items to 9 - this seemed like a sensible default given the requirements, and ensured that I'd always be working with integer quantities.

I made an effort to design some additional flexibility into my solution - for example I've accounted for scenarios such as customers triggering the same discount multiple times, and multiple different offers.

## Reflection

Overall I'm pretty happy with my response to the brief as a starting point. This took approx 8-10 hours of coding to complete, works correctly, and meets all main requirements. Like is often the case with programming, however, it's not perfect the first time. But this feels Good Enough™️ for a prototype  designed to prompt discussion once, and then be forgotten forever. :)

In a real-world scenario there'd be a lot of ways this could be improved - either before shipping it, or as a fast-follow. I've tagged some such opportunities in the code with `TODO:` comments, and discuss more here.

I attempted to design the solution in such a way that it is modular and easy to test and maintain. I've extracted some React components, and refactored somewhat as I worked. There's comments in the code identifying some additional obvious opportunities... in a real-world scenarios this would either be done before shipping, or as a fast follow, depending on factors such as other priorities.

I'm not completely happy with the design of the interfaces and mock data - this is mostly a symptom of timeboxing. I made some decisions early and stuck with them. In a real-world scenario, this would largely be a non-issue, as much more of the logic and data would live on the back-end, so interfaces on the front-end can be simpler (and probably partially generated e.g. for the structure of the query response).

These issues flowed on in places to some of my helper functions, making the logic more complex than my gut tells me it probably needs to be (e.g. accessing individual items from an array of Records). But again, this is mostly a symptom of an unrealistic architecture due to the nature of the exercise.

Next steps might also include extracting additional util functions (for example to handle converting between LineItems and Cart's items), but again these helpers would be largely unnecessary if the validation were being done in the back end where it belongs. :)

In hindsight, the only other major decision I might've made differently up front, would be to make Offers more flexible by associating each with a validation callback that would be called when assessing LineItem eligibility. This would allow completely arbitrary offer types beyond "Buy X get Y" or flat discounts.