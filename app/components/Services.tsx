import { Icon, type IconName } from "./Icons";

const services: { icon: IconName; title: string; description: string; points: string[] }[] = [
  {
    icon: "exam",
    title: "Exam Generation & Grading Agents",
    description:
      "Generate quizzes, mock tests and full exams from your syllabus, then grade written answers against your rubric in seconds.",
    points: [
      "Question banks built from your own material",
      "Rubric-based grading of written answers",
      "Personalised feedback for every student",
    ],
  },
  {
    icon: "chart",
    title: "AI-Powered Personalized Learning Platforms",
    description:
      "Learning platforms that adapt to each student: what they practise next, how hard it is and where they need help.",
    points: [
      "Adaptive learning paths and practice",
      "Progress and weak-area analytics",
      "Built new or added to your existing product",
    ],
  },
  {
    icon: "book",
    title: "AI Tutors",
    description:
      "A 24/7 tutor trained on your own courses, notes and videos, answering student questions in your teaching style.",
    points: [
      "Grounded in your content, not the open web",
      "Embedded in your site, LMS or WhatsApp",
      "Multilingual student support",
    ],
  },
  {
    icon: "layers",
    title: "Content-to-Course Automations",
    description:
      "Turn webinars, PDFs, slides and recordings into structured lessons, summaries, flashcards and practice sets.",
    points: ["Lessons and summaries from raw material", "Quizzes and practice for every module", "Faster course launches"],
  },
  {
    icon: "chat",
    title: "Student Support Agents",
    description:
      "Agents that answer current students' questions about classes, schedules, fees and course material, day and night.",
    points: ["Website, LMS and WhatsApp support", "Answers from your own policies and FAQs", "Hand-off to your team when needed"],
  },
  {
    icon: "cap",
    title: "Admissions Agents",
    description:
      "Reply to every enquiry instantly, answer eligibility and fee questions, qualify applicants and book counselling calls.",
    points: ["No enquiry left unanswered after hours", "Lead qualification and follow-up", "Serious applicants passed to your team"],
  },
];

export function Services() {
  return (
    <section id="services" className="xn-section xn-section--surface">
      <div className="xn-container">
        <h2 className="xn-h2">AI Solutions for Learning Businesses</h2>
        <div className="xn-cards xn-cards--three">
          {services.map((service) => (
            <article key={service.title} className="xn-card">
              <div className="xn-icon-tile">
                <Icon name={service.icon} size={26} />
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul>
                {service.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
