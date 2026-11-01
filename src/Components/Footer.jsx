import "./Footer.css";

export default function Footer() {
  const lastCommitDate =
    import.meta.env.VITE_LAST_COMMIT_DATE || new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-left">&copy; {lastCommitDate} Ouro.</div>

        <div className="footer-right">
          <button type="button" onClick={scrollToTop} className="back-to-top">
            ↑ Back to top
          </button>
        </div>
      </div>
    </footer>
  );
}
