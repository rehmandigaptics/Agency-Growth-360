
export function PageCta() {
  return (
    <section className="new-section ag-page-cta">
      <div className="container">
        <div className="cta-panel reveal">
          <div className="row align-items-center gy-4">
            <div className="col-lg-8">
              <span className="section-kicker">YOUR NEXT MOVE</span>
              <h2 className="premium-heading" style={{ maxWidth: 760 }}>
                Ready to make growth feel <em>less complicated?</em>
              </h2>
              <p className="premium-muted mb-0" style={{ maxWidth: 620 }}>
                Tell us what&apos;s slowing you down. We&apos;ll start with the
                challenges, the opportunities, and what a practical next step could look
                like.
              </p>
            </div>
            <div className="col-lg-4 text-lg-end">
              <a className="btn-lime" href="/contact">
                Start a conversation <i className="bi bi-arrow-up-right" />
              </a>
              <div className="mt-3 small" style={{ color: "#b5c5ae" }}>
                For agencies, freelancers &amp; service businesses
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
