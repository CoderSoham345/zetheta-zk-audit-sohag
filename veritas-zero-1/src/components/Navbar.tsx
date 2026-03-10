import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = ["Agents", "Marketplace", "Proof Arena", "Leaderboard"];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-panel">
      <div className="container mx-auto px-6 py-3 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary flex items-center justify-center" style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}>
            <span className="font-display text-xs font-black text-primary-foreground">ZK</span>
          </div>
          <span className="font-display text-sm font-bold text-foreground tracking-[0.15em]">
            ZK<span className="text-primary">AUDIT</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item}
              href="#"
              className="font-display text-[11px] font-semibold uppercase tracking-[0.15em] text-muted-foreground hover:text-primary transition-colors"
            >
              {item}
            </a>
          ))}
          <button className="btn-primary-gaming text-[11px] py-2 px-6">
            Deploy Agent
          </button>
        </div>

        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden glass-panel border-t border-border overflow-hidden"
          >
            <div className="px-6 py-4 space-y-3">
              {navItems.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="block font-display text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground hover:text-primary transition-colors"
                >
                  {item}
                </a>
              ))}
              <button className="btn-primary-gaming text-[11px] py-2 px-6 w-full">
                Deploy Agent
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
