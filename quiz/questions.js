/* Quiz content for "Product Thinking — Introduction (1 of 7)".
   Edit freely: add/remove items in `questions`, keep the same shape.
   `answer` is the 0-based index of the correct option.
   `time`   is the second in the video where the point is made (used to build a jump link). */

const QUIZ_DATA = {
  title: "Product Thinking — Introduction",
  subtitle: "Part 1 of 7 · Institute of Digital Government",
  video: "https://www.youtube.com/watch?v=DqGP6BvyRdk",
  videoLabel: "Watch the video (2:39)",

  questions: [
    {
      question: "The video opens with a scenario: you have a budget, a team and a deadline. Your director says \u201cWe need AI\u201d and your team says \u201cWe need a super app.\u201d Where should you start?",
      options: [
        "With AI \u2014 the director sets the direction, so align to it",
        "With the super app \u2014 the team knows the build effort best",
        "With neither \u2014 start with the problem you are trying to solve",
        "With the deadline \u2014 scope the work to what fits the timeline"
      ],
      answer: 2,
      time: 9,
      explanation: "The video answers its own question bluntly: \u201cThe answer is neither.\u201d Great digital products don\u2019t start with solutions, they start with problems. Both AI and the super app are answers proposed before anyone has established what the actual problem is \u2014 and picking either one just means committing your budget to an untested guess."
    },
    {
      question: "How does the video describe what this course is actually about?",
      options: [
        "How to be a product manager",
        "How to build a product",
        "How to find answers quickly",
        "How to solve a problem"
      ],
      answer: 3,
      time: 19,
      explanation: "The narrator rules out the first three by name: \u201cThis course isn\u2019t about how to be a product manager. It\u2019s not about how to build a product. It\u2019s about how to solve a problem.\u201d It also isn\u2019t about finding answers quickly \u2014 it\u2019s about asking the right questions first. The distinction matters because the best organisations \u201cdon\u2019t just build things, they build the right things.\u201d"
    },
    {
      question: "The video calls statements like \u201cWe need more AI\u201d and \u201cWe need a super app\u201d a specific kind of trap. What is it?",
      options: [
        "They are solutions dressed up as problems",
        "They are outcomes dressed up as outputs",
        "They are too vague to estimate or cost",
        "They are technically unrealistic for most teams"
      ],
      answer: 0,
      time: 59,
      explanation: "The exact phrase used is \u201csolutions dressed up as problems.\u201d They arrive sounding like a need, so a team can spend an entire budget delivering one without ever checking whether it addresses a real user difficulty. The trap isn\u2019t vagueness or feasibility \u2014 a super app is perfectly buildable; it\u2019s that the solution was chosen before the problem was understood."
    },
    {
      question: "Instead of asking \u201cWhat should we build?\u201d, which set of questions does the video recommend?",
      options: [
        "What is our budget? Who approves it? When must it ship?",
        "Who are our users? What are they trying to do? What is getting in their way?",
        "What are competitors shipping? What is the market size? What is our edge?",
        "Which technology is proven? Who maintains it? What does it cost to run?"
      ],
      answer: 1,
      time: 64,
      explanation: "These are named as \u201cthe more useful questions\u201d and they form the first of the three principles: focus on the problem, not the solution. Note that all three centre on the user, not on the organisation \u2014 and the third one, \u201cwhat is getting in their way?\u201d, is what surfaces the actual problem worth solving."
    },
    {
      question: "The video contrasts \u201ca website with five buttons\u201d against \u201cmore citizens completing transactions.\u201d What is the difference, and which should you chase?",
      options: [
        "The first is an outcome, the second an output \u2014 chase the output",
        "Both are outputs \u2014 chase whichever is easier to measure",
        "The first is an output, the second an outcome \u2014 chase the outcome",
        "Both are outcomes \u2014 chase whichever ships soonest"
      ],
      answer: 2,
      time: 72,
      explanation: "This is the second principle: chase outcomes, not outputs. The website is an output \u2014 a thing you produced, and you can ship it and declare victory while nothing improves for anyone. Citizens actually completing transactions is an outcome \u2014 a real change in the world. \u201cChase the outcome.\u201d"
    },
    {
      question: "What is the third thing the video says helps officers create the conditions for their teams to succeed?",
      options: [
        "Integrate policy, operations and technology",
        "Hire specialists for each discipline",
        "Adopt agile delivery across the organisation",
        "Secure multi-year funding before starting"
      ],
      answer: 0,
      time: 84,
      explanation: "The three principles are: focus on the problem not the solution; chase outcomes not outputs; and integrate policy, ops and tech. On the third, the video is emphatic \u2014 \u201cno initiative succeeds when these three work in silos.\u201d Hiring, agile and funding may all help, but none of them fixes the silo problem, which is about the three functions working as one."
    },
    {
      question: "Grab began by making taxis safer and easier to book. Amazon began with books alone. Netflix began by making DVD rentals cheaper and more reliable. What pattern does the video draw from these?",
      options: [
        "Pick a large market first, because scale attracts investment",
        "Solve one problem first, then scale",
        "Start with superior technology, then broaden the offering",
        "Launch many small experiments and keep whichever succeeds"
      ],
      answer: 1,
      time: 130,
      explanation: "\u201cThe pattern is the same every time. Solve one problem first, then scale.\u201d Each company is a household name today \u2014 Grab is a super app, Amazon is the everything store \u2014 but none of them started there. That is the point: the super app is where Grab arrived, not where it began, so demanding one at the outset inverts the very pattern that made it work."
    },
    {
      question: "According to the video, what is a public officer\u2019s role in building digital products?",
      options: [
        "To build the product themselves, since they understand the policy",
        "To approve the requirements and then review the finished product",
        "To create the conditions for their teams to succeed",
        "To choose the technology platform the team will build on"
      ],
      answer: 2,
      time: 45,
      explanation: "The video is explicit: \u201cour role isn\u2019t just to build the product ourselves \u2014 it\u2019s to create the conditions for our teams to succeed.\u201d The three principles are precisely how you do that. This framing is also why the course goes on to cover diagnosing why problems happen, crafting a sharp problem statement, finding the right metrics, and managing assumptions and risks \u2014 the officer\u2019s work, not the builder\u2019s."
    }
  ]
};
