# quiz

Interactive quizzes for the **Product Thinking** course by the
[Institute of Digital Government](https://www.youtube.com/@idg-sndg).

## Live

**<https://vcherchu.github.io/quiz/>**

## Part 1 — Introduction

Eight multiple-choice questions on
[Product Thinking – Introduction (1 of 7)](https://www.youtube.com/watch?v=DqGP6BvyRdk).
Answer a question and the explanation appears immediately, along with a link that
jumps to the exact moment in the video where the point is made.

| File | What it is |
| --- | --- |
| `quiz/index.html` | The app — markup, styles and logic in one file |
| `quiz/questions.js` | The questions, answers and explanations |

## Running it locally

No build step and no dependencies. Either open `quiz/index.html` directly, or:

```bash
cd quiz
python -m http.server 8000   # then visit http://localhost:8000
```

## Adding more quizzes

Every question lives in `quiz/questions.js`. To add or change one, edit that file —
the app renders whatever the array contains, so no app code needs touching.

```js
{
  question: "...",
  options: ["...", "...", "...", "..."],
  answer: 2,          // 0-based index of the correct option
  time: 75,           // second in the video where the point is made
  explanation: "..."
}
```

Pushing to `main` redeploys the site automatically via `.github/workflows/deploy-pages.yml`.
