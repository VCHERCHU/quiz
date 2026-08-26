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
    },
    2: {
      title: "Starting With the Why",
      video: "https://www.youtube.com/watch?v=wdzcM6ax5YY",
      length: "3:28"
    },
    3: {
      title: "Crafting a Clear Problem Statement",
      video: "https://www.youtube.com/watch?v=aBSAouM7iaE",
      length: "3:45"
    },
    4: {
      title: "Defining Useful Metrics",
      video: "https://www.youtube.com/watch?v=Rtb_tlSzTJ0",
      length: "4:42"
    },
    5: {
      title: "Testing Assumptions and Mitigating Risks",
      video: "https://www.youtube.com/watch?v=_iZNhzdLd7A",
      length: "5:11"
    },
    6: {
      title: "Designing a Good Customer Experience",
      video: "https://www.youtube.com/watch?v=wMe7WgWzIe8",
      length: "4:08"
    },
    7: {
      title: "Summary and Key Takeaways",
      video: "https://www.youtube.com/watch?v=sI5veUTIzkk",
      length: "2:13"
    }
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
      explanation: "The narrator rules the alternatives out by name: “This course isn’t about how to be a product manager. It’s not about how to build a product. It’s about how to solve a problem.” Nor is it about finding answers quickly — it’s about asking the right questions first."
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

,

    /* ---------------------------------------------------------------
       MODULE 2 — Starting With the Why
       --------------------------------------------------------------- */

    {
      module: 2,
      question: "How does the video describe the five whys exercise?",
      options: [
        "Generate five candidate solutions, then pick the strongest one",
        "Start with a problem you can observe, then ask why five times",
        "Ask five different stakeholders what they think the problem is",
        "Break the project into five milestones and review each one"
      ],
      answer: 1,
      time: 13,
      explanation: "“The premise is straightforward. Start with a problem you can observe, then ask why five times.” Each answer peels back a layer, moving you from symptom to cause. Note the starting point: something observable, not something assumed — and note that the output is a cause, not a shortlist of solutions."
    },
    {
      module: 2,
      question: "The video says many government digital products “start in the wrong place.” What does it mean by that?",
      options: [
        "They begin with a solution already in mind",
        "They begin without an approved budget",
        "They begin with the wrong user group",
        "They begin before the technology is mature enough"
      ],
      answer: 0,
      time: 24,
      explanation: "“Many government digital products start in the wrong place. They begin with a solution in mind.” The three examples that follow — needing more AI, needing a CRM, a product reaching end of life — are all phrased as answers, offered before anyone has established the question."
    },
    {
      module: 2,
      question: "Someone says “we are not using enough AI.” According to the video, what might the real issue be?",
      options: [
        "The agency has fallen behind peer agencies on technology adoption",
        "Officers struggle to make decisions from large, unruly data sets",
        "Existing systems are too old to integrate with modern tooling",
        "Staff have not been trained on the available AI tools"
      ],
      answer: 1,
      time: 35,
      explanation: "“AI is often a means to an end, not an end in itself. The real issue might be that officers struggle to make decisions from large, unruly data sets.” The stated need names a technology; the actual problem is a decision-making difficulty, which may or may not call for AI once it is understood properly."
    },
    {
      module: 2,
      question: "Someone says “we don’t have a CRM platform.” What does the video suggest the underlying problem might actually be?",
      options: [
        "Customer records are duplicated across several systems",
        "The agency cannot report on service performance",
        "Cumbersome processes causing long wait times for citizens",
        "Officers lack a single view of each citizen"
      ],
      answer: 2,
      time: 45,
      explanation: "“But why do we need one? The real issue might be cumbersome processes causing long wait times for citizens.” The request names a category of software. The problem is about how long citizens wait — which reframes the goal from procuring a platform to removing process friction."
    },
    {
      module: 2,
      question: "“Our product is reaching end of life.” What does the video say is really at stake?",
      options: [
        "Rising maintenance costs on unsupported software",
        "Some citizens and officers will lose access to a critical service",
        "Security vulnerabilities that can no longer be patched",
        "The team’s skills becoming obsolete"
      ],
      answer: 1,
      time: 56,
      explanation: "“But what’s really at stake is that some citizens and officers will lose access to some critical service.” End of life is a fact about a system; loss of access is the consequence for people. Stating it the second way is what tells you what actually has to be preserved."
    },
    {
      module: 2,
      question: "What does the video say we risk when we skip proper problem definition?",
      options: [
        "Running over budget and missing the deadline",
        "Losing the support of senior stakeholders",
        "Building the wrong thing entirely — on time, on budget, but completely unhelpful",
        "Having to redo the discovery work later at greater cost"
      ],
      answer: 2,
      time: 66,
      explanation: "“When we skip proper problem definition, we risk building the wrong thing entirely. On time, on budget, but completely unhelpful.” The line is pointed: the usual markers of project success are fully compatible with total failure to help anyone. Delivery discipline cannot rescue a badly chosen problem."
    },
    {
      module: 2,
      question: "In the late-for-work example, the chain ends at a flat battery you forgot to replace. What does the video say the fix is?",
      options: [
        "A new alarm clock",
        "Setting a second, backup alarm",
        "Going to bed earlier",
        "Replacing the battery"
      ],
      answer: 3,
      time: 93,
      explanation: "“The fix isn’t a new alarm clock. It’s replacing the battery. A small intervention solves the entire problem.” The example is chosen precisely because the obvious solution — buy a new device — is both more expensive and less effective than the one the five whys uncovers."
    },
    {
      module: 2,
      question: "In the grants example the chain runs: applicants can’t access grants → applications take too long → officers go back and forth → applications arrive incomplete → the form is full of internal jargon. What does the video identify as the real problem to solve?",
      options: [
        "The processing time",
        "The back-and-forth between officers and applicants",
        "The form itself, written around how the agency works rather than how applicants think",
        "The number of officers assigned to process applications"
      ],
      answer: 2,
      time: 129,
      explanation: "“The last answer here is the real problem to solve. Not processing time, not back and forth, the form itself.” The form is jargon-heavy “because it wasn’t designed around how the agency works, but how applicants think.” Processing time and rework are symptoms — fix the form and they resolve on their own."
    },
    {
      module: 2,
      question: "Must you always fix the last why in the chain?",
      options: [
        "Yes — only the true root cause is worth acting on",
        "No — focus on the causes within your control and strongly connected to the outcomes you want",
        "Yes — otherwise the problem is guaranteed to recur",
        "No — always act on the first why, since it is the cheapest to fix"
      ],
      answer: 1,
      time: 143,
      explanation: "“In practice, problems rarely have a single root cause. There are usually several contributing factors, and that’s okay.” The advice is to strike a balance between meaningful and achievable: “The goal isn’t to find a perfect answer. It’s to identify the causes that are within your control and strongly connected to the outcomes you want to achieve.”"
    },

    /* ---------------------------------------------------------------
       MODULE 3 — Crafting a Clear Problem Statement
       --------------------------------------------------------------- */

    {
      module: 3,
      question: "What are the four C’s of a good problem statement?",
      options: [
        "Context, constraints, criteria, commitment",
        "Customer, cost, capability, cadence",
        "Clarity, consequence, cause, confirmation",
        "Challenge, choice, change, control"
      ],
      answer: 2,
      time: 16,
      explanation: "“A useful way to write one is the four C’s framework: clarity, consequence, cause, and confirmation.” Each covers a distinct dimension — what is broken, what happens if it isn’t fixed, why it exists, and what evidence says it is real."
    },
    {
      module: 3,
      question: "Which questions does “clarity” answer?",
      options: [
        "Who is affected, what they are trying to do, what is broken, and how severe it is",
        "Which team owns the problem and what budget is available",
        "Which solution options exist and which is cheapest",
        "When the problem started and who first reported it"
      ],
      answer: 0,
      time: 24,
      explanation: "“Clarity is where you define the problem precisely. Who are the people affected? What are they trying to do? What’s broken about the current experience? How severe is the problem? How many people and how often?” Severity and frequency belong inside clarity — a precise statement quantifies the damage."
    },
    {
      module: 3,
      question: "You work through “consequence” and the honest answer to “what happens if we don’t solve this?” is “not much.” What does the video say that tells you?",
      options: [
        "Solve it anyway, but with a smaller team",
        "It may not be worth solving",
        "Reframe it as a technical risk instead",
        "Gather more data before deciding"
      ],
      answer: 1,
      time: 43,
      explanation: "“Every problem statement should carry a sense of stakes. If the answer is not much, it may not be worth solving.” Consequence is a filter as much as a description — it is the step that lets you decline a problem, which is often the most valuable outcome of writing the statement at all."
    },
    {
      module: 3,
      question: "What does “confirmation” require?",
      options: [
        "Sign-off from the sponsoring director",
        "Agreement from the delivery team that the work is feasible",
        "Evidence in data that the problem is real, significant and worth prioritising",
        "A confirmed budget and delivery date"
      ],
      answer: 2,
      time: 60,
      explanation: "“Confirmation grounds everything in data. What evidence do we have that this problem is real, significant, and worth prioritizing?” It is not organisational confirmation — not a sign-off — but empirical confirmation. Together the four C’s give you “a clear, defensible problem statement. Not a wish list, not a solution in disguise.”"
    },
    {
      module: 3,
      question: "In the worked example, citizens must re-enter the same personal information across services. How is the scale of that described under clarity?",
      options: [
        "More than 15 times a year, with each form taking 20 to 30 minutes",
        "About 5 times a year, with each form taking around an hour",
        "Once per service, with forms taking under 10 minutes",
        "More than 50 times a year, with forms taking 5 minutes each"
      ],
      answer: 0,
      time: 94,
      explanation: "“They’re required to fill in the same personal information more than 15 times across different platforms. Each form takes 20 to 30 minutes to complete, and many give up before finishing, missing out on benefits they’re entitled to.” The numbers are what turn a complaint into a statement someone can act on."
    },
    {
      module: 3,
      question: "In the same example, what cause is given for citizens having to repeat their information?",
      options: [
        "Legislation prevents agencies from sharing citizen data",
        "Services were built independently by different agencies at different times, with no shared data layer",
        "Citizens use different identities across different services",
        "The forms were designed before digital identity existed"
      ],
      answer: 1,
      time: 130,
      explanation: "“Government services are built independently by different agencies at different times. There is no shared data layer, so every service starts from scratch, asking the same questions again.” The cause is structural, which is what tells you the fix has to be structural too — not another redesigned form."
    },
    {
      module: 3,
      question: "What evidence is offered under “confirmation” in the worked example?",
      options: [
        "A citizen satisfaction survey scoring the process 2 out of 5",
        "Interviews with 30 citizens who abandoned applications",
        "68% of transactions abandoned — roughly 204,000 of 300,000 annually",
        "A 40% year-on-year rise in helpdesk calls about forms"
      ],
      answer: 2,
      time: 147,
      explanation: "“68% of transactions are abandoned due to repeated form-filling frustration. That’s approximately 204,000 incomplete transactions out of 300,000 annually.” Note the form the evidence takes: a rate, and the absolute number behind it. The rate shows severity; the count shows scale."
    },
    {
      module: 3,
      question: "How many main problem statements should a project have?",
      options: [
        "One per stakeholder group, so each feels represented",
        "One main statement covering all four dimensions — if there are many, address them separately",
        "Three to five, ranked by priority",
        "As many as the evidence supports"
      ],
      answer: 1,
      time: 162,
      explanation: "“Now, there is always one main problem statement covering all four dimensions. If there are many, perhaps they should be addressed separately.” Multiple statements are not forbidden — they are a signal that you are looking at multiple problems, each deserving its own framing rather than being bundled into one initiative."
    },
    {
      module: 3,
      question: "What test does the video give for whether you are ready to start building?",
      options: [
        "Whether you can complete all four C’s in one statement",
        "Whether the sponsor has approved the business case",
        "Whether the team has estimated the work",
        "Whether a prototype has been user-tested"
      ],
      answer: 0,
      time: 204,
      explanation: "“If you can’t complete all four themes, you’re probably not ready to build yet.” The gap itself tells you what is missing: no confirmation means no evidence, no consequence means no stakes, no cause means the five whys work hasn’t been done. Each is a reason to keep working on the problem rather than starting on a solution."
    },
    {
      module: 3,
      question: "The video says the worked example shows a shift. What shifted?",
      options: [
        "From short-term fixes to long-term architecture",
        "From individual agencies to whole-of-government ownership",
        "From the tool to the people, and from the technology to the impact",
        "From qualitative complaints to quantitative targets"
      ],
      answer: 2,
      time: 172,
      explanation: "“Notice what changed. The focus shifted from the tool to the people, from the technology to the impact. That’s the difference a proper problem statement makes.” The best solutions are built “not on the technology available or the features someone requested, but on the precise, evidence-backed understanding of what’s actually wrong and who it affects.”"
    },

    /* ---------------------------------------------------------------
       MODULE 4 — Defining Useful Metrics
       --------------------------------------------------------------- */

    {
      module: 4,
      question: "Which three tools does this section cover for defining better metrics?",
      options: [
        "SMART; leading and lagging indicators; the value-cost ratio",
        "OKRs; north star metrics; cohort analysis",
        "Baselines; benchmarks; targets",
        "A/B testing; funnel analysis; net promoter score"
      ],
      answer: 0,
      time: 13,
      explanation: "“First, SMART, a framework for defining what good metrics look like. Second, leading and lagging indicators to help us find the most appropriate metric to track. And third, value-cost ratio, the whole-of-government metric that helps us assess returns on investment.” Each answers a different question: what makes a metric good, which one to track, and what the return is."
    },
    {
      module: 4,
      question: "Why does the video say metrics matter?",
      options: [
        "They let leadership compare teams against one another",
        "They keep us honest — without them we build on instinct, and instincts hardly hold up in a funding review",
        "They are required for whole-of-government reporting",
        "They make it easier to prioritise the backlog"
      ],
      answer: 1,
      time: 37,
      explanation: "“Metrics matter because they keep us honest. They tell us how well we’re solving the problem and to what extent. Without them, we’re building on instinct, and instincts hardly hold up in a funding review.” Two purposes: they tell you whether you are actually solving the problem, and they are what you can defend when someone asks for the money."
    },
    {
      module: 4,
      question: "What does SMART stand for?",
      options: [
        "Simple, measurable, agreed, realistic, tracked",
        "Strategic, meaningful, actionable, reviewed, transparent",
        "Specific, measurable, achievable, relevant, time-bound",
        "Scoped, monitored, accountable, repeatable, targeted"
      ],
      answer: 2,
      time: 54,
      explanation: "“Good metrics share five properties. They are specific, measurable, achievable, relevant, and time-bound.” The video then works through each with a worked contrast — a vague version and a sharp one."
    },
    {
      module: 4,
      question: "Which of these does the video use as its example of a specific metric?",
      options: [
        "Making the website better",
        "Improving the click-through rate from 20% to 25%",
        "Increasing citizen satisfaction",
        "Reducing complaints about the website"
      ],
      answer: 1,
      time: 65,
      explanation: "“Making the website better is not very specific. Improving the click-through rates from 20% to 25% is.” Specificity means naming the quantity, the starting point and the target — not just the direction of travel."
    },
    {
      module: 4,
      question: "The video contrasts “improving citizen happiness” with a metric that is actually measurable. What is it?",
      options: [
        "Net promoter score",
        "Number of complaints received",
        "Time spent on the site",
        "Number of repeat visitors"
      ],
      answer: 0,
      time: 75,
      explanation: "“Improving citizen happiness is not measurable. Net promoter score is measurable.” Happiness is a real thing to care about — the point is that you need a defined instrument that produces a number before it can serve as a metric."
    },
    {
      module: 4,
      question: "What does “relevant” mean in the SMART framework, as the video explains it?",
      options: [
        "The metric matters to senior stakeholders",
        "The metric aligns with the agency’s strategic priorities",
        "The metric should move when the problem is being solved",
        "The metric is comparable with other agencies’ metrics"
      ],
      answer: 2,
      time: 94,
      explanation: "“If NPS increases, users are likely happier. If page load time drops, the experience is likely better. The metric should move when the problem is being solved.” Relevance is a causal test, not a political one: if you could fix the problem entirely and the number wouldn’t budge, it is the wrong number."
    },
    {
      module: 4,
      question: "You are struggling to identify a single right metric. What does the video say that usually signals?",
      options: [
        "The team lacks the data instrumentation to measure it",
        "The problem statement is probably too broad",
        "You need a leading indicator rather than a lagging one",
        "The problem is not worth solving"
      ],
      answer: 1,
      time: 119,
      explanation: "“One useful signal. If you’re struggling to identify a single right metric, the problem statement is probably too broad. Narrow down the problem statement.” The difficulty is diagnostic — it sends you back to the four C’s rather than forward into more measurement tooling."
    },
    {
      module: 4,
      question: "How does the video distinguish leading from lagging indicators?",
      options: [
        "Leading indicators are qualitative; lagging indicators are quantitative",
        "Leading indicators are early signals, measurable frequently and precisely but further from the actual outcome; lagging indicators sit closer to the real problem but take longer to surface",
        "Leading indicators are set by the team; lagging indicators are set by leadership",
        "Leading indicators measure inputs; lagging indicators measure costs"
      ],
      answer: 1,
      time: 142,
      explanation: "“Leading indicators are early signals, measurable frequently and precisely, but perhaps further from the actual outcome. Lagging indicators sit closer to the real problem, but tend to take longer to surface and may be harder to pin down.” And crucially: “Your key metric usually lies somewhere in between.”"
    },
    {
      module: 4,
      question: "In the teachers’ portal example, “how much time did the teachers actually save?” sits closest to the real problem but may only be measurable quarterly. Why track the earlier indicators as well?",
      options: [
        "They are required for quarterly reporting",
        "They are more accurate than the lagging measure",
        "They give faster feedback — low adoption in week two tells you the feature probably isn’t saving anyone time, without waiting for the quarter to end",
        "They are easier to explain to stakeholders"
      ],
      answer: 2,
      time: 199,
      explanation: "“The value of tracking the earlier indicators is that it gives you faster feedback. If a new feature we released shows low adoption rate in week two, you don’t have to wait till the end of the quarter to conclude that it probably isn’t saving anyone’s time.” Earlier indicators buy you time to change course."
    },
    {
      module: 4,
      question: "What does the value-cost ratio (VCR) measure?",
      options: [
        "Total programme benefits minus total programme costs",
        "The units of value generated per dollar spent",
        "The proportion of the budget spent on delivery versus overheads",
        "The payback period of an investment"
      ],
      answer: 1,
      time: 219,
      explanation: "“The value-cost ratio, or VCR, is a metric adopted across the whole of government. It measures the units of value generated per dollar spent.” It is a ratio, not a net figure — which is what lets you compare an extra dollar of investment across very different initiatives."
    },
    {
      module: 4,
      question: "What does the video say about interpreting a VCR figure?",
      options: [
        "It is a verdict — above 1 means proceed, below 1 means stop",
        "It should be compared against a published whole-of-government benchmark",
        "It isn’t a verdict — it doesn’t tell you whether a number is good or bad in isolation, but it enables the right questions",
        "It is only meaningful once a product reaches the maturity phase"
      ],
      answer: 2,
      time: 230,
      explanation: "“VCR isn’t a verdict. It doesn’t tell you whether a number is good or bad in isolation, but it does enable the right questions. How much value do we expect from an extra dollar of investment, and what needs to change for the ratio to improve?” Treating it as a pass/fail threshold is exactly the misreading being warned against."
    },

    /* ---------------------------------------------------------------
       MODULE 5 — Testing Assumptions and Mitigating Risks
       --------------------------------------------------------------- */

    {
      module: 5,
      question: "What three types of risk does the video say every product faces?",
      options: [
        "Market, technical and team risk",
        "Financial, legal and reputational risk",
        "Schedule, scope and budget risk",
        "Security, privacy and compliance risk"
      ],
      answer: 0,
      time: 18,
      explanation: "Market risk: “Will anyone actually use this? And even if they do, will it solve the problem?” Technical risk: “Is this too complex or too costly to build relative to the business impact it delivers?” Team risk: “Do we have the right capabilities in the team to pull this off?”"
    },
    {
      module: 5,
      question: "A project seems entirely risk-free. What does the video say that means?",
      options: [
        "The team has done unusually thorough planning",
        "It is a strong candidate to fast-track",
        "Someone isn’t looking hard enough",
        "The scope is well controlled"
      ],
      answer: 2,
      time: 43,
      explanation: "“There are always risks. If a project seems entirely risk-free, it’s a sign that someone isn’t looking hard enough.” An empty risk register is not a reassuring artefact — it is evidence that the assessment hasn’t happened."
    },
    {
      module: 5,
      question: "What does a proof of concept test, and how is it usually scoped?",
      options: [
        "Whether the solution works — scoped to a single user segment with a single use case",
        "Whether the solution can scale — scoped to several user segments",
        "Whether the business case holds — scoped to a financial model",
        "Whether the team can deliver — scoped to one sprint"
      ],
      answer: 0,
      time: 57,
      explanation: "“A proof of concept tests whether the solution works. It’s usually scoped to a single user segment with a single use case.” Scaling to more segments and more problems is the next phase — proof of value — and the two should not be collapsed into one another."
    },
    {
      module: 5,
      question: "What are the four phases the video describes for de-risking a digital product?",
      options: [
        "Discovery, alpha, beta, live",
        "Proof of concept, proof of value, scale, maturity",
        "Pilot, rollout, optimisation, sunset",
        "Prototype, MVP, product-market fit, growth"
      ],
      answer: 1,
      time: 57,
      explanation: "Proof of concept tests whether the solution works; proof of value tests whether it can scale, moving to more user segments and more problems; “the scale phase is about reaching as many users as possible”; and “maturity is where we continue improving the product over time.”"
    },
    {
      module: 5,
      question: "The video contrasts building a car part by part with the skateboard–scooter–bicycle–motorcycle–car progression. What is the point of the second approach?",
      options: [
        "It is cheaper overall than building the finished product directly",
        "At every stage users have something functional, and at every stage we are learning something",
        "It lets you defer the hardest technical decisions until last",
        "It keeps the team motivated by delivering visible progress"
      ],
      answer: 1,
      time: 107,
      explanation: "“We don’t just build the wheels, the chassis, and then the body, and finally a car. We start with a skateboard, then a scooter, a bicycle, a motorcycle, and finally a car. At every stage, users have something functional. At every stage, we are learning something.” Partial components deliver neither."
    },
    {
      module: 5,
      question: "Which of these does the video cite as a company that started deliberately narrow?",
      options: [
        "Airbnb, which started with the founders’ own spare room",
        "Google, which started with a single search index",
        "Apple, which started with a single computer model",
        "Uber, which started with a single city"
      ],
      answer: 0,
      time: 114,
      explanation: "“Amazon started with books. Facebook launched at a single university. Airbnb started with the founders’ own spare room. Netflix started with DVD rentals. Grab started with taxis. None of them started with the full product we see today. They started with one problem solved well.”"
    },
    {
      module: 5,
      question: "In the vaccination booking example, what was identified as the main risk?",
      options: [
        "Technical risk — whether the booking system could integrate with clinic systems",
        "Team risk — whether the team had the right capabilities",
        "Market risk — whether people would actually book online",
        "Financial risk — whether the programme could be funded at scale"
      ],
      answer: 2,
      time: 157,
      explanation: "The hypothesis was “by making it easier to book, more people will get vaccinated.” The video is explicit: “The main risk was a market risk. Would people actually book online?” Naming which of the three risks dominates is what determines the shape of the cheapest test."
    },
    {
      module: 5,
      question: "How did the team test the vaccination booking idea in its simplest form?",
      options: [
        "A prototype booking app released to a pilot group of clinics",
        "A FormSG form feeding into an Excel sheet, with a product manager manually calling clinics and emailing confirmations",
        "A survey of high-risk groups asking whether they would book online",
        "An integration with the existing national appointment system"
      ],
      answer: 1,
      time: 166,
      explanation: "“A FormSG form feeding into an Excel sheet with a product manager manually calling clinics and sending confirmation via email. Not scalable, but that wasn’t the point. It was the lowest-cost way to validate the approach.” Manual work behind the scenes is a feature of a good first test, not a flaw in it."
    },
    {
      module: 5,
      question: "What did the A/B test find after two weeks?",
      options: [
        "Roughly equal bookings in both groups",
        "12 appointments in the control group and 24 in the treatment group",
        "Zero appointments from the control group and 24 from the treatment group",
        "The test was inconclusive and had to be extended"
      ],
      answer: 2,
      time: 194,
      explanation: "The control group received a standard letter and had to find clinics themselves; the treatment group received a letter with a QR code linking to the booking flow. “At the end of two weeks, there were zero appointments from the control group and 24 from the treatment group.” One variable, clear results."
    },
    {
      module: 5,
      question: "What does the video advise when observing users?",
      options: [
        "Collect structured feedback so results can be compared over time",
        "Watch what they do, not just what they say — behaviour often reveals more than feedback forms",
        "Interview a representative sample before drawing conclusions",
        "Focus on the users who complain, since they are most informative"
      ],
      answer: 1,
      time: 221,
      explanation: "“To address market risk, get the product in front of your real users as early as possible. You want to be roughly correct early, not precisely wrong later… When we observe users, watch what they do, not just what they say. The behaviour often reveals more than feedback forms.”"
    },
    {
      module: 5,
      question: "How does the video say you should structure a team to address team risk?",
      options: [
        "For speed, focus and flexibility",
        "For seniority, specialisation and stability",
        "For scale, standardisation and separation of duties",
        "For autonomy, accountability and alignment"
      ],
      answer: 0,
      time: 232,
      explanation: "Speed, “so that your team can be learning from decisions quickly without getting stuck in processes”; focus, “so that the team can stay locked in to the underlying problem, not just the features”; and flexibility, “so that you can iterate when the evidence tells you to.”"
    },
    {
      module: 5,
      question: "Which two principles does the video say underpin structuring a team well?",
      options: [
        "Hire specialists, and keep teams small",
        "Bring policy and tech expertise into one team with actual levers to act; and establish clear accountabilities for each role",
        "Separate delivery from governance; and review progress monthly",
        "Co-locate the team; and give it a dedicated budget"
      ],
      answer: 1,
      time: 254,
      explanation: "“First, bring together policy and tech expertise in one team with actual levers to act. Second, establish clear accountabilities for each role. Ambiguity about who owns what is where good projects start to stall.” Expertise without levers, or levers without clear ownership, both stall."
    },
    {
      module: 5,
      question: "What does the video say the goal of risk work actually is?",
      options: [
        "To eliminate risk before committing budget",
        "To document risks so they can be escalated appropriately",
        "To identify the biggest risk early and find the lowest-cost way to test our assumptions before over-investing",
        "To transfer risk to delivery partners through contracts"
      ],
      answer: 2,
      time: 282,
      explanation: "“The goal isn’t to eliminate risk entirely, but to identify the biggest risk early and to find the lowest-cost way to test our assumptions before we over-invest. Start with a proof of concept, learn from it, then scale what works.”"
    },

    /* ---------------------------------------------------------------
       MODULE 6 — Designing a Good Customer Experience
       --------------------------------------------------------------- */

    {
      module: 6,
      question: "Why does the video argue good customer experience matters especially for government services?",
      options: [
        "Because government services are held to a higher public standard",
        "Because when services are compulsory, citizens don’t have the option to go elsewhere",
        "Because poor experiences generate more helpdesk cost",
        "Because citizens compare government services with commercial apps"
      ],
      answer: 1,
      time: 17,
      explanation: "“Good customer experience isn’t a nice-to-have. It’s especially important when our services are compulsory because citizens don’t have options to go elsewhere.” In a market, a bad experience loses customers; in a mandatory service, it simply inflicts itself on people who cannot leave."
    },
    {
      module: 6,
      question: "What single quality does the video say the best digital experiences share?",
      options: [
        "The product does the thinking so the user doesn’t have to",
        "The product is fast and available on every device",
        "The product asks for the minimum amount of data",
        "The product offers help at every step"
      ],
      answer: 0,
      time: 27,
      explanation: "“The best digital experiences share one quality. The product does the thinking so the user doesn’t have to.” It is a statement about where effort sits: every judgement the product can make on the user’s behalf is one the user no longer has to make."
    },
    {
      module: 6,
      question: "Your service requires a lengthy tutorial before people can navigate it. What does the video say that signals?",
      options: [
        "The service is genuinely complex and the tutorial is doing its job",
        "Users need more onboarding support",
        "It’s not about your users, it’s about your design",
        "The tutorial should be shortened and made interactive"
      ],
      answer: 2,
      time: 32,
      explanation: "“If your service requires a lengthy tutorial to navigate, it’s a signal. It’s not about your users, it’s about your design.” The instinct to blame user capability is precisely what the line rules out — the tutorial is evidence of a design problem, not a remedy for one."
    },
    {
      module: 6,
      question: "Which of these is one of the Parking.sg features the video highlights?",
      options: [
        "It finds you the nearest available parking space",
        "It refunds partial sessions, so you are never penalised for leaving early",
        "It reserves a bay in advance",
        "It compares parking rates between nearby car parks"
      ],
      answer: 1,
      time: 56,
      explanation: "The three cited are: it “calculates parking fees automatically so I don’t have to guess how long I’ll take,” it “lets me extend my sessions remotely so I don’t have to rush back to my car,” and it “refunds partial sessions so I never get penalized for leaving early.” Each removes a specific, real frustration — together producing “an experience that’s 10 times better than what came before.”"
    },
    {
      module: 6,
      question: "RedeemSG serves campaign organisers, consumers and merchants at once. How did the team handle their competing needs?",
      options: [
        "By making everyone equally happy through compromise",
        "By prioritising consumers, since they are the largest group",
        "By understanding the core problem for each, getting the essentials right first and building a road map for everything else",
        "By building separate products for each user group"
      ],
      answer: 2,
      time: 83,
      explanation: "“The team couldn’t make everyone equally happy, but it’s about understanding the core problem to solve for each one… Get the essentials right first and build a road map for everything else. That clarity is what enabled them to deliver value quickly.” Equal happiness was never the target; clarity about each group’s core problem was."
    },
    {
      module: 6,
      question: "What is Airbnb’s 11-star framework for?",
      options: [
        "Rating hosts against a standardised quality scale",
        "Calibrating what good could look and feel like by pushing beyond what we normally consider acceptable",
        "Prioritising features by the value they add per unit of effort",
        "Benchmarking your service against the best in the market"
      ],
      answer: 1,
      time: 105,
      explanation: "“An exercise that helps us calibrate what good might look like and feel like by pushing beyond what we normally consider acceptable.” It is a thinking tool, not a rating system — the absurd upper end exists to break the assumption that five stars is the ceiling."
    },
    {
      module: 6,
      question: "In the Airbnb telling, what does a five-star experience usually amount to?",
      options: [
        "The host welcomed you warmly, showed you around, and the place was clean and well-stocked",
        "You knocked, someone opened the door, and they let you in",
        "The host left recommendations for the best local restaurants",
        "You waited 20 minutes for the host to show up"
      ],
      answer: 1,
      time: 127,
      explanation: "“Often when users give five stars, all they mean is I knocked, someone opened the door, and they let me in. That’s the baseline.” The warm welcome and clean, well-stocked place is the six-star description — which is the uncomfortable point: top marks usually mean nothing went wrong, not that anything went well."
    },
    {
      module: 6,
      question: "Are the 10- and 11-star experiences meant to be the goal?",
      options: [
        "Yes — the exercise sets the standard you should aim for",
        "Yes, but only for flagship services",
        "No — they are a prompt; somewhere between five and 11 lies an experience that is genuinely worth building and feasible",
        "No — they exist to show why five stars is already sufficient"
      ],
      answer: 2,
      time: 177,
      explanation: "“Now, the 10 and 11 star experiences aren’t the goal. They’re a prompt. Somewhere between five and 11 stars lies an experience that’s genuinely worth building and feasible. The exercise forces us to think beyond good enough and to find out what’s both ambitious and achievable.”"
    },
    {
      module: 6,
      question: "How did Airbnb apply this thinking in their own product?",
      options: [
        "By guaranteeing refunds when a stay fell below expectations",
        "By rating hosts on friendliness, accuracy, check-in, communication and location, and surfacing superhosts so guests find great experiences without searching hard",
        "By training hosts on hospitality standards before listing",
        "By letting guests specify their expected star level when booking"
      ],
      answer: 1,
      time: 201,
      explanation: "“They rate hosts on friendliness, accuracy, check-in, communications, and location. And they surface superhosts so that guests can find great experiences without having to search too hard. The product does the work.” It is the same principle as before: the product does the thinking so the user doesn’t have to."
    },
    {
      module: 6,
      question: "Does the standard “the product thinks so the user doesn’t have to” apply differently to optional and mandatory services?",
      options: [
        "It applies to both — perhaps especially when the service is mandatory",
        "It applies mainly to optional services, which must compete for users",
        "It applies mainly to mandatory services, since optional ones can rely on motivated users",
        "It applies only where the service has a large user base"
      ],
      answer: 0,
      time: 220,
      explanation: "“This standard applies whether your service is optional or mandatory. Perhaps especially so when it’s mandatory.” The reasoning connects back to the opening: a captive audience is the weakest possible justification for a poor experience, not a licence for one."
    },

    /* ---------------------------------------------------------------
       MODULE 7 — Summary and Key Takeaways
       --------------------------------------------------------------- */

    {
      module: 7,
      question: "How does the summary define product thinking?",
      options: [
        "A method for turning requirements into shippable features",
        "A discipline of asking better questions before reaching for solutions",
        "A framework for measuring the return on digital investment",
        "A way of organising teams around users rather than systems"
      ],
      answer: 1,
      time: 5,
      explanation: "“Product thinking is a discipline of asking better questions before reaching for solutions.” Every framework in the course serves that definition — the five whys, the four C’s, SMART metrics, risk testing and the 11 stars are all question-asking tools, deployed before anything gets built."
    },
    {
      module: 7,
      question: "After crafting a problem statement with the four C’s, where does the summary say you stand?",
      options: [
        "One statement, four dimensions, still no solutions yet",
        "Ready to select between candidate solutions",
        "Ready to estimate and schedule the work",
        "Ready to define the technical architecture"
      ],
      answer: 0,
      time: 29,
      explanation: "“From there, we crafted a clear problem statement using the four C’s framework. Clarity, consequence, cause, and confirmation. One statement, four dimensions, still no solutions yet.” The restraint is the lesson — metrics and risk testing still come before any solution is chosen."
    },
    {
      module: 7,
      question: "Which three shifts does the summary say to remember above all?",
      options: [
        "From ideas to evidence, from features to platforms, from projects to products",
        "From solutions to problems, from outputs to outcomes, from big bang to staged delivery",
        "From technology to policy, from agencies to citizens, from cost to value",
        "From planning to delivery, from delivery to measurement, from measurement to iteration"
      ],
      answer: 1,
      time: 70,
      explanation: "“If there are three things to remember, let them be these. We want to move from solutions to problems… from outputs to outcomes… from big bang to stage delivery.” Each maps to a section of the course: the five whys, metrics, and the staged de-risking approach."
    },
    {
      module: 7,
      question: "What example does the summary give to distinguish an output from an outcome?",
      options: [
        "A launched service is an output; a satisfied user is the outcome",
        "A completed sprint is an output; a delivered roadmap is the outcome",
        "A website with five buttons is an output; more citizens completing transactions is the outcome",
        "A trained officer is an output; a faster process is the outcome"
      ],
      answer: 2,
      time: 85,
      explanation: "“A website with five buttons is an output. More citizens completing transactions is the outcome.” The output is what you can point at when the work is done; the outcome is the change in the world that the work was supposed to cause. Only the second one answers the problem statement."
    },
    {
      module: 7,
      question: "How does the summary phrase the shift from big bang to staged delivery?",
      options: [
        "Do the skateboard before you do the car",
        "Walk before you run",
        "Build the wheels before the chassis",
        "Ship small, ship often"
      ],
      answer: 0,
      time: 96,
      explanation: "“We want to move from big bang to stage delivery. Do the skateboard before you do the car.” It calls back to the section on risk: the alternative — building wheels, then chassis, then body — gives users nothing functional and teaches you nothing until the very end."
    },
    {
      module: 7,
      question: "What does the summary say Grab, Amazon and Netflix have in common?",
      options: [
        "They each raised significant capital before launching",
        "They each solved one problem for one group of people exceptionally well",
        "They each started with a technology advantage over incumbents",
        "They each expanded internationally before broadening their product"
      ],
      answer: 1,
      time: 105,
      explanation: "“Grab, Amazon, Netflix. None of them started with the full vision we see today. They each solved one problem for one group of people exceptionally well. That’s the standard we’re aiming for too.” The emphasis falls on both halves: narrow scope, and exceptional execution within it."
    },
    {
      module: 7,
      question: "Which set of frameworks does the summary list as what you now have?",
      options: [
        "The five whys, the four C’s, SMART metrics, the value-cost ratio, and a staged approach to scaling",
        "User research, journey mapping, prototyping, and usability testing",
        "OKRs, roadmaps, backlogs, and retrospectives",
        "Business cases, risk registers, benefit realisation, and post-implementation review"
      ],
      answer: 0,
      time: 113,
      explanation: "“We now have the frameworks. The five whys, the four C’s, smart metrics, value-cost ratio, and a staged approach to scaling.” The closing instruction is deliberately narrow: “Take one initiative you’re working on. Apply them. That’s product thinking in practice.”"
    },
    {
      module: 7,
      question: "In the summary’s recap of the risk section, what is the advised sequence?",
      options: [
        "Eliminate the biggest risks, then build the full product",
        "Build a pilot, measure adoption, then decide whether to continue",
        "Identify your biggest risk early, find the lowest-cost way to test it, start with a proof of concept, learn, then scale what works",
        "Assess market, technical and team risk in parallel, then choose the least risky option"
      ],
      answer: 2,
      time: 50,
      explanation: "“We assess risk and scale. Identify your biggest risk early, find the lowest-cost way to test it, start with a proof of concept, learn, then scale what works.” The order matters — testing precedes building, and scaling is conditional on what the learning shows."
    }

  ]
};
