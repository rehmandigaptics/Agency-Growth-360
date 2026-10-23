type PageBridgeProps = {
  kicker: string;
  title: string;
  accent?: string;
  body: string;
};

export function PageBridge({ kicker, title, accent, body }: PageBridgeProps) {
  return (
    <section className="ag-page-bridge">
      <div className="container">
        <div className="ag-page-bridge-panel reveal">
          <span className="section-kicker">{kicker}</span>
          <h2 className="ag-page-bridge-title">
            {title}
            {accent ? <em> {accent}</em> : null}
          </h2>
          <p className="ag-page-bridge-body">{body}</p>
        </div>
      </div>
    </section>
  );
}
