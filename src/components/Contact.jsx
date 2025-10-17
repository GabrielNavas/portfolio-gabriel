export default function Contact() {
  const EMAIL = "gabrielnavas2212@gmail.com";
  const SUBJECT = "Contato via Portfólio";
  const BODY = "Oi Gabriel, vi seu portfólio e gostaria de conversar sobre oportunidades.";

  // link direto pro compose do Gmail (abre em nova aba)
  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}&su=${encodeURIComponent(
    SUBJECT
  )}&body=${encodeURIComponent(BODY)}`;

  return (
    <section id="contato">
      <div className="max">
        <div
          className="card"
          style={{
            padding: 20,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 16,
            flexWrap: "wrap",
          }}
        >
          <div>
            <h3 style={{ margin: 0 }}>Vamos conversar?</h3>
            <p className="muted" style={{ margin: 0 }}>
              Aberto a oportunidades de estágio e projetos.
            </p>
          </div>

          <div style={{ display: "flex", gap: 10 }}>
            {/* Abre o Gmail direto no modo escrever */}
            <a
              className="btn"
              href={gmailUrl}
              target="_blank"
              rel="noreferrer"
            >
              Enviar e-mail
            </a>

            {/* Força o download do PDF (não abre em aba nova) */}
            <a
              className="badge"
              href="/CV_Gabriel.pdf"
              download="CV_Gabriel_Navarro.pdf"
            >
              Baixar PDF
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
