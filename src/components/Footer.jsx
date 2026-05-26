import { useState } from "react";

const style = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500&display=swap');

  * { box-sizing: border-box; margin: 0; padding: 0; }

  .contact-page {
    min-height: auto;
    background-color: #EBEBEB;
    background-image: radial-gradient(circle, #c0c0c0 1px, transparent 1px);
    background-size: 28px 28px;
    font-family: 'DM Sans', sans-serif;
    display: flex;
    flex-direction: column;
    position: relative;
  }

  /* ── Main content area ── */
  .contact-body {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 80px 48px 60px;
  }

  .contact-inner {
    width: 100%;
    max-width: 1200px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 48px;
    align-items: center;
  }

  /* ── Left ── */
  .left-headline {
    font-family: 'DM Serif Display', serif;
    font-size: clamp(28px, 4vw, 58px);
    font-weight: 400;
    color: #1a1a1a;
    line-height: 1.15;
    letter-spacing: -0.02em;
  }

  /* ── Right ── */
  .right-panel {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  .label-tag {
    
    letter-spacing: 0.14em;
    font-size: 1.25rem;
    color: #888;
    font-weight: 400;
    font-family: 'Caveat', cursive;
  }

  .contact-title {
    font-family: 'DM Serif Display', serif;
    font-size: clamp(38px, 5.5vw, 68px);
    color: #D63864;
    font-weight: 400;
    line-height: 1;
    letter-spacing: -0.02em;
    margin-top: 4px;
  }

  /* ── Book row: button + desc side by side ── */
  .book-row {
    display: flex;
    align-items: center;
    gap: 16px;
    flex-wrap: nowrap;
  }

  .book-btn {
    background-color: #D63864;
    color: white;
    border: none;
    border-radius: 999px;
    padding: 13px 26px;
    font-size: 14px;
    font-weight: 500;
    font-family: 'DM Sans', sans-serif;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 10px;
    transition: background 0.2s ease, transform 0.15s ease;
    white-space: nowrap;
    flex-shrink: 0;
  }
  .book-btn:hover { background-color: #b82d52; transform: scale(1.03); }
  .book-btn svg { width: 17px; height: 17px; opacity: 0.9; }

  .book-desc {
    font-size: 13px;
    color: #666;
    line-height: 1.5;
  }

  .follow-section { display: flex; flex-direction: column; gap: 10px; }
  .follow-label { font-size: 13px; color: #555; }

  .social-links { display: flex; gap: 24px; flex-wrap: wrap; }

  .social-link {
    font-size: 24px;
    color: #1a1a1a;
    text-decoration: none;
    font-weight: 400;
    transition: color 0.2s;
    position: relative;
  }
  .social-link::after {
    content: '';
    position: absolute;
    bottom: -2px; left: 0;
    width: 0; height: 1px;
    background: #D63864;
    transition: width 0.25s ease;
  }
  .social-link:hover { color: #D63864; }
  .social-link:hover::after { width: 100%; }

  /* ── Email watermark ── */
  .email-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 40px 0;
    margin-top: 16px;
  }
  .click-label {
    letter-spacing: 0.1em;
    color: #aaa;
    text-align: center;
    margin-bottom: 6px;
    font-style: italic;
    display: block;
    font-size: 1.25rem;
  font-family: 'Caveat', cursive;
  }
  .email-watermark {
  font-family: 'DM Serif Display', serif;
  font-size: clamp(32px, 7vw, 120px);
  color: rgba(180,180,180,0.40);
  white-space: normal;
  word-break: break-all;
  text-align: center;
  width: 100%;
  cursor: pointer;
  transition: color 0.2s;
  line-height: 1.2;
  user-select: none;
  letter-spacing: -0.02em;
}
  .email-watermark:hover { color: rgba(214,56,100,0.35); }

  /* ── Footer ── */
  .footer {
    padding: 12px 40px 40px;
    display: flex;
    align-items: center;
    font-size: 12px;
    color: #888;
    border-top: 1px solid rgba(0,0,0,0.07);
    justify-content: center;
    text-align: center;
    margin-top: 12px;
  }
  .footer-center { letter-spacing: 0.1em; }

  /* ── Toast ── */
  .toast {
    position: fixed;
    bottom: 72px; left: 50%;
    transform: translateX(-50%) translateY(16px);
    background: #1a1a1a;
    color: white;
    padding: 10px 20px;
    border-radius: 8px;
    font-size: 13px;
    opacity: 0;
    transition: all 0.25s ease;
    pointer-events: none;
    z-index: 100;
    white-space: nowrap;
  }
  .toast.show { opacity: 1; transform: translateX(-50%) translateY(0); }

  /* ── Tablet ── */
  @media (max-width: 860px) {
    .contact-body { padding: 60px 36px 40px; }
    .contact-inner { gap: 36px; }
    .email-section { padding: 0 32px; }
    .email-watermark { font-size: clamp(20px, 4vw, 48px); }
    .footer { padding: 12px 32px 16px; }
  }

  /* ── Mobile ── */
  @media (max-width: 600px) {
    .contact-body {
      padding: 60px 24px 32px;
      align-items: center;
      justify-content: center;
    }
    .contact-inner {
      grid-template-columns: 1fr;
      gap: 28px;
      justify-items: center;
      text-align: center;
    }
    .left-headline {
      font-size: clamp(24px, 7vw, 38px);
      text-align: center;
    }
    .right-panel {
      align-items: center;
    }
    .book-row {
      flex-direction: column;
      align-items: center;
      gap: 10px;
      text-align: center;
    }
    .book-desc {
      text-align: center;
    }
    .social-links {
      justify-content: center;
    }
    .email-section { padding: 0 16px; }
    .email-watermark {
      font-size: clamp(18px, 5.5vw, 36px);
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .footer {
      padding: 10px 20px 14px;
      font-size: 11px;
    }
  }

  /* ── Very small ── */
  @media (max-width: 380px) {
    .contact-body { padding: 48px 16px 28px; }
    .email-watermark { font-size: 14px; }
  }
`;

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const email = "edwinantony562@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };
  const socialLinks = [
    {
      name: "Linkedin",
      url: "https://www.linkedin.com/in/edwin-antony-093116201/"
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/YOUR-USERNAME"
    }
  ];

  return (
    <>
      <style>{style}</style>
      <div id="connect" className="contact-page">

        {/* Main content */}
        <div className="contact-body">
          <div className="contact-inner">

            {/* Left */}
            <div>
              <h1 className="left-headline">
                Let me help with a great visual solution for your business.
              </h1>
            </div>

            {/* Right */}
            <div className="right-panel">
              <div>
                <p className="label-tag">To get in touch :</p>
                <h2 className="contact-title">Contact Me</h2>
              </div>

              {/* Book row: button + desc inline */}
              <div className="book-row">
                <a
                  href="https://wa.me/918606769614"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="book-btn"
                  style={{ textDecoration: 'none' }}
                >
                  Book a Call
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 1h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                  </svg>
                </a>
                <p className="book-desc">Set up a time to talk about your design needs.</p>
              </div>

              <div className="follow-section">
                <p className="follow-label">Follow me on:</p>
                <div className="social-links">
                  {socialLinks.map((item) => (
                    <a
                      key={item.name}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Email watermark */}
        <div className="email-section">
          <span className="click-label">Click to copy :</span>
          <div className="email-watermark" onClick={handleCopyEmail}>{email}</div>
        </div>

        {/* Footer */}
        <footer className="footer">
          <span className="footer-center">EDWIN ANTONY</span>
        </footer>

        {/* Toast */}
        <div className={`toast${copied ? " show" : ""}`}>
          ✓ Email copied to clipboard
        </div>
      </div>
    </>
  );
}
