# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A single static quiz site for the **Product Thinking** course by the Institute of
Digital Government. No build step, no dependencies, no test suite, no package
manager. Two files carry the whole product:

| File | Role |
| --- | --- |
| `quiz/index.html` | The entire app — markup, styles and logic in one file |
| `quiz/questions.js` | Data only: the module registry and the question bank |

The local directory is named `Agentic Course`; the remote is `VCHERCHU/quiz`.
Live at <https://vcherchu.github.io/quiz/>.

## Commands

```bash
# Run locally (from the repo root — serve the repo, not quiz/, so paths match the deploy)
python -m http.server 8765 --bind 127.0.0.1
# then open http://127.0.0.1:8765/quiz/index.html

# Deploy: push to main. That is the whole release process.
git push origin main
gh run watch <run-id> --repo VCHERCHU/quiz --exit-status
gh run list --repo VCHERCHU/quiz --workflow deploy-pages.yml --limit 1
```

`deploy-pages.yml` publishes `./quiz` as the site root and **only triggers on
pushes touching `quiz/**`**. A README-only commit will not produce a deploy run —
that is expected, not a broken pipeline.

`node` is not installed in this environment and `yt-dlp` is not on `PATH`; use
`python -m yt_dlp`. Bash heredocs containing the curly quotes used throughout
`questions.js` have failed to parse here — write large content blocks with the
Write tool and splice them in with Python rather than fighting the shell.

## Architecture

**Data and app are strictly separated.** `index.html` renders whatever
`QUIZ_DATA` contains and reads no module or question by name. Adding a module is
a pure data change — register it under `modules`, append questions tagged with
that number, and the badges, jump links, per-module scoring and the "N of M
questions · K modules" header all pick it up with no app edit.

**Attempt lifecycle.** `newAttempt()` draws `perAttempt` questions at random from
the full bank, then maps each through `withShuffledOptions()`. Everything
downstream reads `qs[i]` — the per-attempt copy — never the bank entry.

**`picked` is the single source of truth.** It holds one chosen option index per
question in the current attempt, `null` when unanswered. `update()` recomputes
the score, progress bar, recap pips and per-module breakdown from `picked` alone;
nothing else accumulates state. Answers lock on first click.

### The invariant that matters

`answer` is a 0-based index into `options`. `withShuffledOptions()` permutes
`options` and remaps `answer` in the same step, so the two can never drift.
Two consequences when authoring content:

- **Explanations must never reference option positions** ("the first three", "the
  last option"). Options are reordered on every attempt, so positional prose goes
  wrong. Refer to answers by their content instead.
- Never reorder `options` in the bank without moving `answer` with it.

## Writing questions

Every question is drawn from the module's video transcript, and `time` is the
second in that video where the point is made — the app builds a `?t=<n>s` deep
link from it, so a wrong timestamp sends people to the wrong moment. Keep `time`
inside the module's `length`.

```js
{
  module: 4,
  question: "...",
  options: ["...", "...", "...", "..."],   // 4 is the convention; LETTERS supports up to 6
  answer: 2,                               // 0-based index into options
  time: 75,                                // second in the video where the point is made
  explanation: "..."                       // quotes the video, says why the right answer is right
}
```

Explanations quote the narration directly and explain why the distractors fail,
rather than restating the correct option.

### Getting the source material

The seven course videos are **unlisted on YouTube** — they do not appear on the
channel's videos tab or in search. Their IDs are recoverable from the Next.js
flight payload on the module pages under
<https://www.idg.gov.sg/product-thinking/>. Module numbering follows the videos'
own titles (`(1 of 7)` … `(7 of 7)`), which matches the course page order — note
that "Starting With the Why" is module 2 and "Crafting a Clear Problem
Statement" is module 3.

```bash
python -m yt_dlp --skip-download --write-auto-sub --write-sub \
  --sub-lang en --sub-format json3 -o "%(id)s" "https://www.youtube.com/watch?v=<id>"
```

### Sanity-checking the bank

There is no test suite. `questions.js` is JS, not JSON, so validating it means
stripping comments and quoting bare keys before `json.loads`. Worth checking
after any bulk edit: answer indices in range, four distinct options, `time`
within the module `length`, and every `module` present in `modules`.

## Other workflows

`claude.yml` and `claude-code-review.yml` run Claude on `@claude` mentions in
issues and PRs, and on PR review. They are unrelated to the quiz itself.
