import { Icon, type IconName } from "./Icons";

const audiences: { icon: IconName; title: string; description: string }[] = [
  {
    icon: "cap",
    title: "Test-Prep & Coaching Academies",
    description: "Mock tests graded in seconds, endless practice questions, and tutors that never run out of time.",
  },
  {
    icon: "book",
    title: "Course Creators & Cohorts",
    description: "Give every student a personal tutor and free yourself from answering the same questions daily.",
  },
  {
    icon: "building",
    title: "Training & L&D Companies",
    description: "Turn training material into assessments and on-demand assistants your learners actually use.",
  },
  {
    icon: "rocket",
    title: "EdTech Startups",
    description: "Ship AI features or a full AI-native learning product, built by engineers who've shipped them.",
  },
];

export function Audience() {
  return (
    <section id="who" className="xn-section">
      <div className="xn-container">
        <h2 className="xn-h2">Who We Work With</h2>
        <div className="xn-audience">
          {audiences.map((item) => (
            <div key={item.title} className="xn-audience__item">
              <Icon name={item.icon} size={34} strokeWidth={1.5} />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
