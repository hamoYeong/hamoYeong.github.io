---
slug: learn-with-ai-questioning
locale: en
translationKey: learn-with-ai-questioning
title: Turning Stuckness into Questions — Learn with AI
summary: I designed a learning experience that helps Swift beginners move beyond a vague “I don’t know” and turn where they are stuck into a concrete question. In the process, I learned to use AI to turn my own vague thoughts into questions and structure.
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
overview: A computational-thinking learning experience that helps Swift beginners notice when they are stuck, separate what they know from what they do not, put the unclear point into words, and form a concrete question. It is better understood as a learning process that connected an educational problem to curriculum, planning, UI/UX, and a prototype than as a production-ready service.
problem: Programming beginners may feel stuck and ask “I don’t know,” “Why doesn’t this work?” or “What should I do?” without separating how far they understand from the exact location, condition, or attempt where they became uncertain. When AI gives an immediate answer, it can become even easier to skip that thinking process.
whyItMattered: I believed the important ability was not solving everything without AI, but judging whether an AI answer fits the learner’s problem and forming the next question independently.
context: HamoCom, built in June 2026, was a macOS prototype that started with the tool before defining a learner and curriculum clearly enough. After recognizing that limitation, I began this separate C5 learning project by returning to education and asking whether Swift could serve as a tool for practicing thought.
user: Beginners learning their first programming language or Swift for the first time. The experience uses Swift as a tool for practicing thought rather than treating the product as a Swift syntax drill.
contributions:
  - Examined cognitive load, scaffolding, and metacognition while exploring an experience that elicits thought instead of supplying an answer.
  - Defined the thinking actions a learner should be able to perform before selecting syntax, then worked backward to the minimum Swift concepts required.
  - Separated the nonlinear knowledge system from the linear learning experience, structured them in Obsidian, and translated the plan into implementable tickets.
  - Shaped a macOS UI/UX prototype around a Sidebar and Inspector so learners could see their current position and thinking process.
  - Used AI as a learning guide in unfamiliar domains and as a way to test ideas during implementation, then questioned the gap between the result and my intent.
process:
  - Asked how cognitive load, scaffolding, and metacognition could support a learner’s thinking process.
  - Reviewed Swift’s approachability, standard library, and language characteristics from the perspective of a learning tool.
  - Defined the thinking actions a learner should perform, then worked backward to the minimum Swift concepts they required.
  - Separated the knowledge system from the learning system, structured them in Obsidian, and translated them into implementable tickets.
  - Used common macOS components, a Sidebar, and an Inspector to make the learner’s position and thinking process visible.
processDetails:
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
  - Reviewed cognitive load, scaffolding, and metacognition as starting points for the learning experience.
  - Considered Swift’s approachability, standard library, and language characteristics from the perspective of a learning tool.
keyDecisions:
  - title: Build a sequence for forming questions, not receiving answers
    description: The central experience moves from noticing stuckness to separating known and unknown points, putting the unclear point into words, and forming a concrete question.
  - title: Work backward from thinking actions to Swift concepts
    description: Instead of starting with a syntax syllabus, I defined what learners should be able to think through and connected only the minimum concepts required for those actions.
  - title: Separate the knowledge system from the learning system
    description: I treated connected knowledge and the ordered experience a learner follows as different systems, then designed how they should meet.
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
technologies:
  - Swift
  - macOS
  - Obsidian
  - Codex
outcomes:
  - Designed a computational-thinking learning experience that turns a Swift beginner’s stuckness into a question.
  - Connected educational study to curriculum, planning, UI/UX, and a macOS prototype.
  - Summarized the changing questions and what I learned with AI in a one-page final Learning Poster.
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
  src: /projects/learn-with-ai-questioning/learn-with-ai-poster.png
  alt: Preview of the Turning Stuckness into Questions Learn with AI poster
artifacts:
  - title: Turning Stuckness into Questions — Learning Poster
    description: The final C5 artifact brings together the app’s learning flow, the path I actually followed, the questions before and after, and what I learned while working with AI.
    href: /projects/learn-with-ai-questioning/learn-with-ai-poster.pdf
    previewImage:
      src: /projects/learn-with-ai-questioning/learn-with-ai-poster.png
      alt: Full C5 Learn with AI Turning Stuckness into Questions learning poster
visibility: public
relatedPosts:
  - ai-context-before-code
---
