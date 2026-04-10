import Navbar from '../components/Navbar'

export default function Membership() {
  return (
    <>
      <Navbar />
      <div className="page-container">
        <div className="page-header">
          <h1 className="page-header__title">Membership</h1>
          <p className="page-header__subtitle">
            Join an exclusive community of accomplished women shaping the future of African leadership
          </p>
        </div>

        <div className="page-content">
          <section className="page-section">
            <h2 className="page-section__title">What Membership Offers</h2>
            <p className="page-section__text">
              Radiant Collective membership is designed for women who have achieved success and are ready to scale their influence, deepen their strategic thinking, and build lasting legacy.
            </p>
            <p className="page-section__text">
              As a member, you gain access to curated masterminds, peer exchange circles, and a cross-border network of women operating at the highest levels of business, governance, and civil society.
            </p>
          </section>

          <section className="page-section">
            <h2 className="page-section__title">Membership Benefits</h2>
            <p className="page-section__text">
              • Priority access to all Radiant Collective masterminds and events
            </p>
            <p className="page-section__text">
              • Private peer exchange circles with accomplished leaders
            </p>
            <p className="page-section__text">
              • Exclusive frameworks and playbooks for leadership and wealth building
            </p>
            <p className="page-section__text">
              • Year-round accountability and strategic support
            </p>
            <p className="page-section__text">
              • Cross-border connections across Africa and the diaspora
            </p>
          </section>

          <section className="page-section">
            <h2 className="page-section__title">Who Should Join</h2>
            <p className="page-section__text">
              Membership is by application and designed for women who are either operating at scale or preparing for it. This includes senior executives, founders, institutional leaders, and women building influence across sectors.
            </p>
            <p className="page-section__text">
              If you are ready to move beyond individual success toward long-term impact, this is your community.
            </p>
          </section>
        </div>
      </div>
    </>
  )
}
