/* ============================================================================
   QUESTION BANK — Product Thinking (Institute of Digital Government)

   Each attempt draws `perAttempt` questions at random from `questions` below.
   Every question carries a `module` number; the app shows that module's name
   on the card and links back to the right video.

   TO ADD A MODULE
   ---------------
   1. Add its entry to `modules` (number -> title, video, length).
   2. Append its questions to `questions` with the matching `module` number.
   No app code needs changing — index.html renders whatever is here.

   QUESTION SHAPE
   --------------
   {
     module: 1,                  // which video it came from
     question: "...",
     options: ["...", "..."],    // any number, 4 is typical
     answer: 2,                  // 0-based index of the correct option
     time: 75,                   // second in the video where the point is made
     explanation: "..."          // why the right answer is right
   }
   ============================================================================ */

const QUIZ_DATA = {
  title: "Product Thinking",
  subtitle: "Institute of Digital Government",

  // How many questions to draw per attempt (falls back to the whole bank if smaller).
  perAttempt: 8,

  modules: {
    1: {
      title: "Introduction",
      video: "https://www.youtube.com/watch?v=DqGP6BvyRdk",
      length: "2:39"
    }
    // 2: { title: "...", video: "https://www.youtube.com/watch?v=...", length: "0:00" },
    // 3: { ... }   ... through 7
  },

  questions: [

    /* ---------------------------------------------------------------
       MODULE 1 — Introduction
       --------------------------------------------------------------- */

    {
      module: 1,
      question: "The video opens with a scenario: you have a budget, a team and a deadline. Your director says “We need AI” and your team says “We need a super app.” Where should you start?",
      options: [
        "With AI — the director sets the direction, so align to it",
        "With the super app — the team knows the build effort best",
        "With neither — start with the problem you are trying to solve",
        "With the deadline — scope the work to what fits the timeline"
      ],
      answer: 2,
      time: 9,
      explanation: "The video answers its own question bluntly: “The answer is neither.” Great digital products don’t start with solutions, they start with problems. Both AI and the super app are answers proposed before anyone has established what the actual problem is — and picking either one just means committing your budget to an untested guess."
    },
    {
      module: 1,
      question: "How does the video describe what this course is actually about?",
      options: [
        "How to be a product manager",
        "How to build a product",
        "How to find answers quickly",
        "How to solve a problem"
      ],
      answer: 3,
      time: 19,
      explanation: "The narrator rules out the first three by name: “This course isn’t about how to be a product manager. It’s not about how to build a product. It’s about how to solve a problem.” It also isn’t about finding answers quickly — it’s about asking the right questions first."
    },
    {
      module: 1,
      question: "The video calls statements like “We need more AI” and “We need a super app” a specific kind of trap. What is it?",
      options: [
        "They are solutions dressed up as problems",
        "They are outcomes dressed up as outputs",
        "They are too vague to estimate or cost",
        "They are technically unrealistic for most teams"
      ],
      answer: 0,
      time: 59,
      explanation: "The exact phrase used is “solutions dressed up as problems.” They arrive sounding like a need, so a team can spend an entire budget delivering one without ever checking whether it addresses a real user difficulty. The trap isn’t vagueness or feasibility — a super app is perfectly buildable; it’s that the solution was chosen before the problem was understood."
    },
    {
      module: 1,
      question: "Instead of asking “What should we build?”, which set of questions does the video recommend?",
      options: [
        "What is our budget? Who approves it? When must it ship?",
        "Who are our users? What are they trying to do? What is getting in their way?",
        "What are competitors shipping? What is the market size? What is our edge?",
        "Which technology is proven? Who maintains it? What does it cost to run?"
      ],
      answer: 1,
      time: 64,
      explanation: "These are named as “the more useful questions” and they form the first of the three principles: focus on the problem, not the solution. Note that all three centre on the user, not on the organisation — and the third one, “what is getting in their way?”, is what surfaces the actual problem worth solving."
    },
    {
      module: 1,
      question: "The video contrasts “a website with five buttons” against “more citizens completing transactions.” What is the difference, and which should you chase?",
      options: [
        "The first is an outcome, the second an output — chase the output",
        "Both are outputs — chase whichever is easier to measure",
        "The first is an output, the second an outcome — chase the outcome",
        "Both are outcomes — chase whichever ships soonest"
      ],
      answer: 2,
      time: 72,
      explanation: "This is the second principle: chase outcomes, not outputs. The website is an output — a thing you produced, and you can ship it and declare victory while nothing improves for anyone. Citizens actually completing transactions is an outcome — a real change in the world. “Chase the outcome.”"
    },
    {
      module: 1,
      question: "What is the third thing the video says helps officers create the conditions for their teams to succeed?",
      options: [
        "Integrate policy, operations and technology",
        "Hire specialists for each discipline",
        "Adopt agile delivery across the organisation",
        "Secure multi-year funding before starting"
      ],
      answer: 0,
      time: 84,
      explanation: "The three principles are: focus on the problem not the solution; chase outcomes not outputs; and integrate policy, ops and tech. On the third, the video is emphatic — “no initiative succeeds when these three work in silos.” Hiring, agile and funding may all help, but none of them fixes the silo problem, which is about the three functions working as one."
    },
    {
      module: 1,
      question: "Grab began by making taxis safer and easier to book. Amazon began with books alone. Netflix began by making DVD rentals cheaper and more reliable. What pattern does the video draw from these?",
      options: [
        "Pick a large market first, because scale attracts investment",
        "Solve one problem first, then scale",
        "Start with superior technology, then broaden the offering",
        "Launch many small experiments and keep whichever succeeds"
      ],
      answer: 1,
      time: 130,
      explanation: "“The pattern is the same every time. Solve one problem first, then scale.” Each company is a household name today — Grab is a super app, Amazon is the everything store — but none of them started there. That is the point: the super app is where Grab arrived, not where it began, so demanding one at the outset inverts the very pattern that made it work."
    },
    {
      module: 1,
      question: "According to the video, what is a public officer’s role in building digital products?",
      options: [
        "To build the product themselves, since they understand the policy",
        "To approve the requirements and then review the finished product",
        "To create the conditions for their teams to succeed",
        "To choose the technology platform the team will build on"
      ],
      answer: 2,
      time: 45,
      explanation: "The video is explicit: “our role isn’t just to build the product ourselves — it’s to create the conditions for our teams to succeed.” The three principles are precisely how you do that."
    },
    {
      module: 1,
      question: "The video says the course is “not even about finding answers quickly.” What does it say matters instead?",
      options: [
        "Asking the right questions first",
        "Shipping a prototype early to learn faster",
        "Reaching consensus among stakeholders",
        "Documenting requirements thoroughly"
      ],
      answer: 0,
      time: 27,
      explanation: "“It’s not even about finding answers quickly. It’s about asking the right questions first.” Speed to an answer is worthless if it is an answer to the wrong question — which is exactly how you end up building a super app nobody needed. Prototyping and consensus are ways of working, not the point being made here."
    },
    {
      module: 1,
      question: "How does the video distinguish what the best organisations in the world do?",
      options: [
        "They build faster than everyone else",
        "They don’t just build things — they build the right things",
        "They build with bigger budgets and better talent",
        "They build in-house rather than outsourcing"
      ],
      answer: 1,
      time: 33,
      explanation: "“The best organizations in the world, they don’t just build things. They build the right things.” The distinction is about direction, not speed or resources — and the video repeats it near the end as “the best organizations solve problems, they don’t just build solutions.”"
    },
    {
      module: 1,
      question: "What single goal did Grab start with, according to the video?",
      options: [
        "To build a payments platform for South-east Asia",
        "To compete with international ride-hailing companies",
        "To make taxis safer, more reliable and easier to book",
        "To become a super app serving everyday needs"
      ],
      answer: 2,
      time: 137,
      explanation: "“Grab started with one single goal: to make taxis safer, more reliable, and easier to book.” The super app came later — “Today, it’s a super app, but it didn’t start there.” That sequencing is the whole point of the example, and it is why the team’s opening demand for a super app gets the order backwards."
    },
    {
      module: 1,
      question: "How does the video describe Amazon’s starting point?",
      options: [
        "One category — books — made more accessible and more affordable",
        "A logistics network built before any storefront existed",
        "A marketplace open to third-party sellers from day one",
        "A cloud platform that funded the retail business"
      ],
      answer: 0,
      time: 147,
      explanation: "“Amazon started with books, one category, and more accessible and more affordable. Today, it’s the everything store.” The narrowness is deliberate — one category, solved well — and it is what earned the right to expand. The marketplace, logistics and cloud all came after."
    },
    {
      module: 1,
      question: "According to the video, what did Netflix start by doing?",
      options: [
        "Streaming films over the internet",
        "Making DVD rentals cheaper and more reliable",
        "Producing its own original programming",
        "Building recommendation algorithms"
      ],
      answer: 1,
      time: 156,
      explanation: "“Netflix started by making DVD rentals cheaper and more reliable.” The sophisticated recommendation algorithms the company is known for came later — “Today, it runs sophisticated recommendation algorithms.” Mistaking the mature capability for the starting point is exactly the error the video is warning against."
    },
    {
      module: 1,
      question: "Which of these does the video list as something the course will go on to cover?",
      options: [
        "Negotiating vendor contracts and procurement",
        "Crafting a sharp problem statement and finding the right metrics",
        "Designing user interfaces and accessibility standards",
        "Running agile ceremonies and sprint planning"
      ],
      answer: 1,
      time: 145,
      explanation: "The closing lists what is ahead: diagnosing why problems happen, crafting a sharp problem statement, finding the right metrics, and handling assumptions and risks. Every item is about understanding and framing the problem — consistent with a course that is “about how to solve a problem,” not about procurement, UI craft or delivery ceremony."
    }

  ]
};
