import { Icon, type IconName } from "./Icons";

const services: { icon: IconName; title: string; description: string; points: string[] }[] = [
  {
    icon: "book",
    title: "AI Tutors & Course Assistants",
    description:
      "A 24/7 tutor trained on your own courses, notes and videos — answering student questions in your teaching style.",
    points: [
      "Grounded in your content, not the open web",
      "Embedded in your site, LMS or WhatsApp",
      "Multilingual student support",
    ],
  },
  {
    icon: "exam",
    title: "AI Assessment & Grading",
    description:
      "Generate quizzes and mock exams from your material, then grade written answers against your rubric in seconds.",
    points: [
      "Question banks generated from your syllabus",
      "Rubric-based grading of written answers",
      "Personalised feedback for every student",
    ],
  },
  {
    icon: "layers",
    title: "Content-to-Course Engine",
    description:
      "Turn webinars, PDFs and recordings into structured lessons, summaries, flashcards and practice sets.",
    points: ["Lessons and summaries from raw material", "Flashcards and practice questions", "Faster course launches"],
  },
  {
    icon: "chat",
    title: "Student Support & Admissions Agents",
    description:
      "AI agents that answer prospective students, qualify leads, handle enrolment questions and book calls.",
    points: ["Website and WhatsApp agents", "Lead qualification and follow-up", "Hand-off to your team when needed"],
  },
];

export function Services() {
  return (
    <section id="services" className="xn-section xn-section--surface">
      <div className="xn-container">
        <h2 className="xn-h2">AI Solutions for Learning Businesses</h2>
        <div className="xn-cards">
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
