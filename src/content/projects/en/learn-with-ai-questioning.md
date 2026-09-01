---
slug: learn-with-ai-questioning
locale: en
translationKey: learn-with-ai-questioning
roleLenses:
  - curriculum-design
  - learning-experience
  - educational-software
competencies:
  - beginner-observation
  - learning-goal-design
  - scaffold-design
  - self-explanation-transfer
  - curriculum-task-design
  - educational-prototyping
  - documentation-systemization
evidenceLevels:
  - hypothesis
  - designed
  - implemented
  - observed
priority: 10
relatedChallenges:
  - academy-c5-learn-with-ai
relatedExperiences:
  - apple-developer-academy
relatedProjects:
  - computational-thinking-hamo
  - leaf
media:
  - id: learning-poster
    section: outcome
    type: image
    webSrc: /images/projects/learn-with-ai-questioning/01-cover-learning-poster.webp
    masterPath: portfolio-assets/projects/learn-with-ai-questioning/masters/01-cover-learning-poster.png
    alt: Preview of the Turning Stuckness into Questions Learn with AI poster
    caption: The final C5 artifact brings together the app’s learning flow, the path I actually followed, the questions before and after, and what I learned while working with AI.
    credit: Seoyeong Kim
    visibility: public
  - id: learning-poster-pdf
    section: outcome
    type: pdf
    webSrc: /projects/learn-with-ai-questioning/learn-with-ai-poster.pdf
    masterPath: portfolio-assets/projects/learn-with-ai-questioning/masters/02-outcome-learning-poster.pdf
    alt: Turning Stuckness into Questions Learning Poster PDF
    visibility: public
portfolioSections:
  - field: outcomes
    kind: outcome
    evidenceLevels:
      - designed
      - implemented
    assetIds:
      - learning-poster
      - learning-poster-pdf
  - field: limitations
    kind: limitation
    evidenceLevels:
      - hypothesis
  - field: nextValidation
    kind: next-step
    evidenceLevels:
      - hypothesis
title: Turning Stuckness into Questions — Learn with AI
summary: Beginning with observations of Academy beginners and one-to-one learning support in C4, I moved from defining thinking actions to working backward into minimum Swift concepts, separating knowledge and learning systems, and building a macOS prototype.
summaryNote: It has not yet been piloted with learners.
period:
  start: '2026-08'
  end: '2026-08'
  label: Aug 2026
status: completed
role:
  - Exploring the educational problem
  - Designing the curriculum and learning experience
  - Building the macOS UI/UX and prototype
  - Learning and verifying implementation with AI
team:
  type: personal
  description: An individual learning project completed during Apple Developer Academy @ POSTECH C5 Learn with AI.
overview: A learning-experience design that helps Swift beginners notice when they are stuck, separate what they know from what they do not, put the unclear point into words, and form a concrete question. During C5, I connected educational study to curriculum, planning, UI/UX, and a macOS prototype, but this is not yet a program with demonstrated learning outcomes.
problem: At the Academy, I saw learners struggle with Swift fundamentals and delegate not only implementation but the thinking behind it to AI. When “I don’t know,” “Why doesn’t this work?” or “What should I do?” remains undivided—without the learner identifying their current understanding, location, conditions, and attempts—an immediate AI answer can make it easier to skip decomposition and judgment.
whyItMattered: The goal is not to reduce AI use. I want implementation to benefit from AI while the learner remains responsible for explaining intent and assumptions, finding omissions and errors in a result, and forming the next question.
context: I stopped HamoCom because I had built the tool before defining a learner or curriculum. One-to-one learning support in C4 showed both the possibility of change and the limits of one-off explanations. Each explanation led further back into fundamentals, yet a single explanation did not become a thinking system the learner could reuse later. C5 therefore restarted from “What thinking should the learner repeat?”
user: Beginners learning their first programming language or Swift for the first time who may be able to modify interface code but struggle to explain intent and data flow in their own words.
contributions:
  - Examined cognitive load, scaffolding, and metacognition while exploring an experience that elicits thought instead of supplying an answer.
  - Structured the block and limitation I observed during one-to-one support in C4 as a Before–Diagnosis–Intervention–After–Limitation case.
  - Defined the thinking actions a learner should be able to perform before selecting syntax, then worked backward to the minimum Swift concepts required.
  - Made self-explanation and transfer to unfamiliar problems explicit learning goals, then designed a flow for connecting experience back into a learner’s own knowledge.
  - Separated the nonlinear knowledge system from the linear learning experience, structured them in Obsidian, and translated the plan into implementable tickets.
  - Shaped a macOS UI/UX prototype around a Sidebar and Inspector so learners could see their current position and thinking process.
  - Used AI as a learning guide in unfamiliar domains and as a way to test ideas during implementation, then questioned the gap between the result and my intent.
process:
  - Connected observations of Academy learners, the decision to stop HamoCom, and one-to-one support in C4 into one problem—the fact that an explanation given once did not become a reusable system for thinking.
  - Asked how cognitive load, scaffolding, and metacognition could support a learner’s thinking process.
  - Reviewed Swift’s approachability, standard library, and language characteristics from the perspective of a learning tool.
  - Defined the thinking actions a learner should perform, then worked backward to the minimum Swift concepts they required.
  - Separated the knowledge system from the learning system, structured them in Obsidian, and translated them into implementable tickets.
  - Used common macOS components, a Sidebar, and an Inspector to make the learner’s position and thinking process visible.
processDetails:
  - title: Origin
    question: Why was one explanation not enough?
    items:
      - Observing Academy beginners using AI
      - HamoCom’s tool-first limitation
      - One-to-one C4 support that did not become reusable knowledge
  - title: Education
    question: How should this be taught?
    items:
      - Cognitive load
      - Scaffolding
      - Metacognition
  - title: Swift
    question: How much Swift is needed?
    items:
      - Approachability
      - Standard library
      - Language characteristics
  - title: Curriculum
    question: What should the learner do?
    items:
      - Define thinking actions first
      - Work backward to minimum concepts
  - title: Planning
    question: What structure should make this an experience?
    items:
      - Separate knowledge and learning systems
      - Structure in Obsidian
      - Create implementable tickets
  - title: UX
    question: How can the learner check their thinking?
    items:
      - macOS environment
      - Sidebar and Inspector
      - Shared components
processSummary: The answer to one question did not finish the work; it made the next question more precise.
research:
  - Began with the observation that learners blocked on Swift fundamentals could delegate the thinking itself to AI.
  - Documented one learner’s change in C4 as a case while keeping its single-person limitation explicit.
  - Reviewed cognitive load, scaffolding, and metacognition as starting points for the learning experience.
  - Considered Swift’s approachability, standard library, and language characteristics from the perspective of a learning tool.
learnerCase:
  title: A learner who could change the screen but could not identify the next step in the logic
  context: In C4, I worked with one Academy learner who studied business, hoped to work as a PM, and still wanted to learn development through the project. Early in the Academy, changing SwiftUI views and seeing visual feedback had been engaging. Returning to development later, the learner struggled to connect the logic and data flow behind the screen.
  before: The learner had experience modifying interface code but could not explain where data came from, who was responsible for it, or what to do next.
  diagnosis: I saw a learning gap between the visible result and the data and responsibility flow that produced it. The learner also had little practice noticing and describing the exact moment understanding stopped.
  intervention:
    - We first drew the larger flow from screen to contract, example state, and production persistence.
    - We explored Protocol → PreviewService → Service as responsibilities rather than file names.
    - Before asking AI to implement, the learner wrote the intended behavior and compared it with the generated result.
  after: The learner was able to state the intent, find an assumption the AI result had overlooked, and explain what should have been specified more clearly.
  limitation: This was one observation in one learner’s project context. Transfer to another problem and durability over time have not been evaluated.
keyDecisions:
  - title: Build a sequence for forming questions, not receiving answers
    description: The central experience moves from noticing stuckness to separating known and unknown points, putting the unclear point into words, and forming a concrete question.
  - title: Work backward from thinking actions to Swift concepts
    description: Instead of starting with a syntax syllabus, I defined what learners should be able to think through and connected only the minimum concepts required for those actions.
  - title: Separate the knowledge system from the learning system
    description: I treated connected knowledge and the ordered experience a learner follows as different systems, then designed how they should meet.
  - title: Make self-explanation and transfer learning goals
    description: The goal extends beyond getting an answer right. Learners should explain their assumptions and judgment, then connect prior experience to an unfamiliar problem.
questionShift:
  summary: The question changed from “What should I teach?” to “What kind of thinking should the learner practice?”
  before:
    statement: Build a foundational curriculum that uses Swift to develop computational thinking.
    note: The goal existed, but the learner’s thinking was still invisible.
  after:
    statement: Define the thinking actions a learner should be able to perform before choosing what syntax to teach.
    note: I then worked backward to the minimum Swift concepts needed for those actions.
  secondary:
    - label: Question 02
      before: I’m going to use Swift
      after: Why should it be Swift?
      note: I stopped treating the environment as proof that Swift was suitable as a learning tool.
    - label: Question 03
      before: How should I organize the knowledge?
      after: How should different knowledge systems be separated and connected?
      note: I asked how thoughts could become structure, tickets, and something implementable.
technicalStructure:
  - The learning experience moves through noticing stuckness, separating what is known, verbalizing the unknown point, and forming a concrete question.
  - The connected knowledge system and the ordered learning system remain separate, with each learning step linking only the knowledge it needs.
  - Thoughts structured in Obsidian become implementable tickets and are checked through a macOS Sidebar and Inspector layout.
challenges:
  - In an unfamiliar field such as education, I had to judge what I understood and what still required verification.
  - I needed to distinguish between Swift being available in the environment and Swift being appropriate as a learning tool.
  - A nonlinear knowledge structure had to become an experience a learner could follow without collapsing the knowledge and learning systems into one.
  - The hypothesis drawn from one C4 learner needed to remain a question for a pilot rather than becoming a claim of general educational effectiveness.
technologies:
  - Swift
  - macOS
  - Obsidian
  - Codex
outcomes:
  - Defined a sequence of thinking actions—notice stuckness, separate known and unknown points, describe location, conditions, and attempts, form a question, and judge an AI-generated result.
  - Worked backward from those actions to the minimum Swift concepts and separated the nonlinear knowledge system from the linear learning sequence.
  - Connected educational study to an Obsidian knowledge structure, implementation tickets, and a macOS prototype built around a Sidebar and Inspector.
  - Summarized the changing questions and what I learned with AI in a one-page final Learning Poster.
validation:
  statusNote: “Completed” means that the Apple Developer Academy C5 challenge and its poster and prototype were completed. It does not mean the full curriculum is finished or that its learning outcomes have been validated.
  limitations:
    - The curriculum and macOS prototype have not yet been piloted with Swift beginners.
    - The C4 change was observed in one learner and one project context; durability and transfer have not been evaluated.
    - Cognitive load, metacognition, self-explanation, and transfer informed the design, but the effects of individual scaffolds have not been compared.
  nextValidation:
    - Run small sessions with Swift beginners from different backgrounds and observe where they struggle to verbalize stuckness.
    - Check whether learners can identify assumptions and errors in an AI result and connect prior experience to a new problem without immediate help.
    - Adjust the size and order of scaffolds for each learner, including a separate large-chunk overview for learners who remain in details for too long, as explored in C5.
whatIWouldChange:
  - Observe where Swift beginners actually struggle to explain their stuckness and validate the question-forming flow.
  - Use small learning sessions to see whether each scaffold leads learners toward an answer or helps them form the next question themselves.
  - Make the rules connecting the knowledge and learning systems more explicit before expanding the curriculum.
learnings:
  - In domains where I have little knowledge or experience, AI can guide the learning path, but I remain responsible for judging what I understood and checking original sources again.
  - In implementation, defining my thought and intent first, locating where the AI-generated result missed that intent, and revising the question became the important loop.
  - Even with the same AI, the quality changed when I revised my question once more and checked the evidence again. While building an app that turns stuckness into questions, I learned to do the same with my own stuckness.
categories:
  - macOS
  - Education
  - Computational Thinking
  - Learning
featured: true
draft: false
coverImage:
  src: /images/projects/learn-with-ai-questioning/01-cover-learning-poster.webp
  alt: Preview of the Turning Stuckness into Questions Learn with AI poster
artifacts:
  - title: Turning Stuckness into Questions — Learning Poster
    description: The final C5 artifact brings together the app’s learning flow, the path I actually followed, the questions before and after, and what I learned while working with AI.
    href: /projects/learn-with-ai-questioning/learn-with-ai-poster.pdf
    previewImage:
      src: /images/projects/learn-with-ai-questioning/01-cover-learning-poster.webp
      alt: Full C5 Learn with AI Turning Stuckness into Questions learning poster
visibility: public
relatedPosts:
  - ai-context-before-code
  - thinking-actions-before-content
  - reusable-knowledge-from-explanations
---
