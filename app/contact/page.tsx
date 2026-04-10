import Navbar from '../components/Navbar'

export default function Contact() {
  return (
    <>
      <Navbar />
      <div className="page-container">
        <div className="page-header">
          <h1 className="page-header__title">Contact</h1>
          <p className="page-header__subtitle">
            Get in touch with the Radiant Collective team
          </p>
        </div>

        <div className="page-content">
          <section className="page-section">
            <h2 className="page-section__title">General Inquiries</h2>
            <p className="page-section__text">
              For general questions about Radiant Collective, membership, or upcoming events:
            </p>
            <p className="page-section__text">
              Email: <a href="mailto:echidinma@fineandcountry.ng" style={{color: 'var(--gold)', textDecoration: 'underline'}}>echidinma@fineandcountry.ng</a>
            </p>
          </section>

          <section className="page-section">
            <h2 className="page-section__title">Event Registration</h2>
            <p className="page-section__text">
              To register for upcoming masterminds or inquire about event details, please visit our Events page or contact us directly.
            </p>
          </section>

          <section className="page-section">
            <h2 className="page-section__title">Partnerships & Collaborations</h2>
            <p className="page-section__text">
              Interested in partnering with Radiant Collective or exploring collaboration opportunities? We welcome conversations with like-minded organizations committed to advancing women&apos;s leadership in Africa.
            </p>
            <p className="page-section__text">
              Please reach out via email with details about your organization and partnership interest.
            </p>
          </section>

          <section className="page-section">
            <h2 className="page-section__title">Media Inquiries</h2>
            <p className="page-section__text">
              For media requests, interviews, or press information about Radiant Collective and our founder Udo Okonjo, please contact us at the email above.
            </p>
          </section>
        </div>
      </div>
    </>
  )
}
