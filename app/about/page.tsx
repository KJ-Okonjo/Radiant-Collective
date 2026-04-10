import Navbar from '../components/Navbar'

export default function About() {
  return (
    <>
      <Navbar />
      <div className="page-container">
        <div className="page-header">
          <h1 className="page-header__title">About Us</h1>
          <p className="page-header__subtitle">
            More than a decade of proven impact in African women&apos;s leadership development
          </p>
        </div>

        <div className="page-content">
          <section className="page-section">
            <h2 className="page-section__title">Our Story</h2>
            <p className="page-section__text">
              Radiant Collective is built on more than a decade of sustained and measurable impact in women&apos;s leadership development across Africa and the diaspora.
            </p>
            <p className="page-section__text">
              For over fifteen years, the platform formerly known as Inspired Women of Worth served as one of Africa&apos;s most consistent and respected ecosystems for developing women leaders across business, corporate institutions, the public sector, and civil society.
            </p>
            <p className="page-section__text">
              After impacting thousands of women, a clear gap emerged: many accomplished women have achieved success but lack the frameworks, networks, and strategic thinking required to scale influence. Radiant Collective is the response to that gap.
            </p>
          </section>

          <section className="page-section">
            <h2 className="page-section__title">Our Approach</h2>
            <p className="page-section__text">
              We create curated spaces for accomplished women to deepen their leadership mastery, build wealth architecture, and think beyond individual success toward long-term impact.
            </p>
            <p className="page-section__text">
              Our work is anchored by the Radiant Leadership Playbook — a leadership blueprint designed by Udo Okonjo that translates lived leadership experience into transferable intelligence.
            </p>
          </section>

          <section className="page-section">
            <h2 className="page-section__title">Our Impact</h2>
            <p className="page-section__text">
              • 3,500+ women trained and impacted across Africa and the diaspora
            </p>
            <p className="page-section__text">
              • 1,000+ alumnae active across senior leadership and entrepreneurship
            </p>
            <p className="page-section__text">
              • 100+ corporate, institutional, and ecosystem partnerships
            </p>
            <p className="page-section__text">
              • 15+ years of sustained women&apos;s leadership development
            </p>
          </section>
        </div>
      </div>
    </>
  )
}
