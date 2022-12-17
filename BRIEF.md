[Back to README.md](README.md)

# Coding Exercise

We are interested in seeing your coding and problem-solving skills. We would like you to build the following system.

For the purpose of this exercise, SEEK is in the process of rewriting its job ads checkout system.

We want to offer different products to recruiters:

| Name        | Description                                                                          | Retail Price |
| ----------- | ------------------------------------------------------------------------------------ | -----------: |
| Classic Ad  | Offers the most basic level of advertisement                                         |     \$269.99 |
| StandOut Ad | Allows advertisers to use a company logo and use a longer presentation text          |     \$322.99 |
| Premium Ad  | Same benefits as StandOut, but also puts the advertisement at the top of the results |     \$394.99 |

We have established a number of special pricing rules for a small number of privileged customers:

1. SecondBite

   - Gets a **3 for 2 deal** on **Classic Ads**

2. Axil Coffee Roasters

   - Gets a discount on **StandOut Ads** where the price drops to **\$299.99** per ad

3. MYER

   - Gets a **5 for 4** deal on **StandOut Ads**

   - Gets a discount on **Premium Ads** where the price drops to **\$389.99** per ad

These details are regularly renegotiated, so we need the pricing rules to be as flexible as possible as they can change in the future with little notice.

## Example scenarios

Below are example test cases. Given the provided items the total should be as such.

- **Customer:** default
- **Items:** `classic`, `standout`, `premium`
- **Total:** \$987.97

* **Customer:** SecondBite
* **Items:** `classic`, `classic`, `classic`, `premium`
* **Total:** \$934.97

- **Customer:** Axil Coffee Roasters
- **Items:** `standout`, `standout`, `standout`, `premium`
- **Total:** \$1294.96

## Example interface

Below is an example of how you might interface with your checkout. This is just an example, the actual interface is up to you.

```js
const products = ["classic", "classic", "classic", "premium"];
const customer = "SecondBite";

const total = checkout(products, customer);
```

## Tips

We recommend you use [Node.js](https://nodejs.org/en/) and [TypeScript](https://www.typescriptlang.org/).

We value strongly-typed code and well considered API design and will be looking for these practices in your solution.

We value work-life balance and do not want you to lose a weekend trying to solve this problem. Only spend enough time required to produce an **appropriate**, **clean**, **testable** and **maintainable** solution to the stated problem. You should focus on delivering the core code, there is no need to build a user interface. Keep it simple.

We recommend the use of a [.bundle](https://git-scm.com/docs/git-bundle) to package up your solution.

Good luck, have fun with it, and we look forward to meeting you soon!