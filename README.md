# QuillBot's UI Dev assessment

## Prompt

Build a mini movie application similar to the design provided.

## How to approach the challenge

To complete this challenge, you should:

- Fork the provided repository
- Contribute to the project
- Commit your changes regularly so that we can follow your progress
- When you are done, invite us to your repository

## Design

We've created a minimal design for you to follow.

[Figma Design](https://www.figma.com/design/reE0SZpcntGfzQ5rUsOAPp/Exercise?node-id=0-1&t=6g0b8zH3m7PQNPry-1)

[Prototype](https://www.figma.com/proto/reE0SZpcntGfzQ5rUsOAPp/Exercise?node-id=116-3&starting-point-node-id=116%3A3&t=ERd62rKFUayEDGpv-1)

You can use the design as a reference for desktop and try to make it pixel perfect. For mobile design, feel free to give it your own touch. We value a good user experience, so make sure the app is easy to use.

## Requirements

Your application should meet the following requirements:

- Build a search input to allow the user to enter any movie title. Use the [Data](./data.json) provided in the repository to search for movies.
- Render these results below the search input on every keypress (typeahead).
- Implement all the animations provided in the prototype.
  - By clicking on the first card, you get the details for that movie. You need to implement the same animation for all the cards.
  - When you click on the 6th card, you will be able to know how the cards which are in between open up.
  - Please check the search box animation as well, by clicking on the search icon.
- We recommend to use [MUI](https://mui.com/system/getting-started/) for styling.

This assessment is not about building a perfect app. We are looking for candidates who can deliver production-ready features. We are interested in a polished final product, and how you approach the problem, structure code, and deliver solid features. Add comments to your code where you think it's necessary or when you should add more code to make it better.

## Get started

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

To get started, run the following commands:

```sh
npm install # Install dependencies
npm start   # Start the project in development mode
```

A development server will start at `http://localhost:3000/`. The page will automatically reload when you make changes.
