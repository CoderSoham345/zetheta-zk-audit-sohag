const FooterSection = () => {
  return (
    <footer className="border-t border-border bg-muted/10">
      <div className="container mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary flex items-center justify-center" style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}>
                <span className="font-display text-xs font-black text-primary-foreground">ZK</span>
              </div>
              <span className="font-display text-sm font-bold text-foreground tracking-[0.15em]">
                ZK<span className="text-primary">AUDIT</span>
              </span>
            </div>
            <p className="font-body text-sm text-muted-foreground max-w-sm leading-relaxed">
              The ultimate zero-knowledge proof marketplace. Privacy-preserving
              audits for the next generation of finance.
            </p>
          </div>
          <div>
            <p className="font-display text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-4">Protocol</p>
            <ul className="space-y-2">
              {["Documentation", "Architecture", "Security", "Status"].map((item) => (
                <li key={item}>
                  <a href="#" className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-display text-[10px] font-bold uppercase tracking-[0.3em] text-secondary mb-4">Community</p>
            <ul className="space-y-2">
              {["Discord", "Twitter", "GitHub", "Blog"].map((item) => (
                <li key={item}>
                  <a href="#" className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-border mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-display text-[9px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            © 2026 ZKAUDIT PROTOCOL // ALL PROOFS VERIFIED ON-CHAIN
          </p>
          <div className="flex gap-4">
            {["Terms", "Privacy", "Cookies"].map((item) => (
              <a key={item} href="#" className="font-display text-[9px] font-semibold uppercase tracking-[0.15em] text-muted-foreground hover:text-primary transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
