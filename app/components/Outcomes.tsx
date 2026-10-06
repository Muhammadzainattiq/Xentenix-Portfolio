import { GridNodeMark } from "./GridNodeMark";
import { Icon, type IconName } from "./Icons";

const stats: { icon: IconName; value: string; label: string }[] = [
  { icon: "shield", value: "$0", label: "Paid until you get the result" },
  { icon: "clock", value: "24/7", label: "Answers for students, even at 2 a.m." },
  { icon: "target", value: "1", label: "Success metric agreed before we build" },
  { icon: "book", value: "100%", label: "Trained on your own course content" },
];

export function Outcomes() {
  return (
    <section className="xn-section">
      <div className="xn-container">
        <p className="xn-statement">
          Most agencies hand over a chatbot and an invoice.{" "}
          <span>
            We agree on a result for your learning business first — fewer grading hours, faster answers for
            students, higher completion — then build until that result is real.
          </span>
        </p>

        <div className="xn-bento">
          <div className="xn-bento__feature">
            <div className="xn-bento__mark" aria-hidden="true">
              <GridNodeMark size={220} variant="dark" />
            </div>
            <Icon name="handshake" size={36} />
            <div>
              <h3>Your risk is zero. Our incentive is your outcome.</h3>
              <p>If we don&apos;t hit the result we agreed on, you don&apos;t pay. Simple as that.</p>
            </div>
          </div>
          {stats.map((stat) => (
            <Stat key={stat.label} {...stat} />
          ))}
          <div className="xn-bento__feature">
            <Icon name="chart" size={36} />
            <div>
              <h3>Measured in learning metrics, not commits.</h3>
              <p>
                Grading time saved, student questions resolved, completion rates — we track what your academy
                actually cares about.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ icon, value, label }: { icon: IconName; value: string; label: string }) {
  return (
    <div className="xn-stat">
      <Icon name={icon} size={44} strokeWidth={1.4} />
      <div>
        <p className="xn-stat__value">{value}</p>
        <p className="xn-stat__label">{label}</p>
      </div>
    </div>
  );
}
