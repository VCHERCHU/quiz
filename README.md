# quiz

Interactive quizzes for the **Product Thinking** course by the
[Institute of Digital Government](https://www.youtube.com/@idg-sndg).

## Live

**<https://vcherchu.github.io/quiz/>**

## How it works

Questions live in a shared **question bank**. Each attempt draws 8 of them at
random, so no two runs are the same. Every question is tagged with the module it
came from, and that module is shown on the card. Answer a question and the
explanation appears immediately, along with a link that jumps to the exact
moment in that module's video where the point is made.

| File | What it is |
| --- | --- |
| `quiz/index.html` | The app — markup, styles and logic in one file |
| `quiz/questions.js` | The question bank and the module registry |

## Modules

| # | Module | Questions | Video |
| --- | --- | --- | --- |
| 1 | Introduction | 14 | [2:39](https://www.youtube.com/watch?v=DqGP6BvyRdk) |
| 2–7 | _not yet added_ | — | — |

## Running it locally

No build step and no dependencies. Either open `quiz/index.html` directly, or:

```bash
cd quiz
python -m http.server 8000   # then visit http://localhost:8000
```

## Adding a module

Everything lives in `quiz/questions.js` — no app code needs touching.

1. Register the module:

```js
modules: {
  2: { title: "Diagnosing the problem",
       video: "https://www.youtube.com/watch?v=...", length: "3:12" }
}
```

2. Append its questions, tagged with that module number:

```js
{
  module: 2,
  question: "...",
  options: ["...", "...", "...", "..."],
  answer: 2,          // 0-based index of the correct option
  time: 75,           // second in the video where the point is made
  explanation: "..."
}
```

The draw size is `perAttempt` (currently 8). If the bank ever holds fewer than
that, the app simply uses every question it has.

Pushing to `main` redeploys the site automatically via `.github/workflows/deploy-pages.yml`.
