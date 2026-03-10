import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";

const ProofGenerator = () => {
  const [state, setState] = useState<"idle" | "generating" | "verified">("idle");

  const handleGenerate = () => {
    setState("generating");
    setTimeout(() => setState("verified"), 3000);
    setTimeout(() => setState("idle"), 5500);
  };

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-muted/20 skew-section" />

      <div className="relative z-10 container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="tag-label bg-primary/10 text-primary inline-block mb-4">
            PROOF ARENA
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-black uppercase text-foreground">
            GENERATE <span className="neon-green-glow">PROOF</span>
          </h2>
        </motion.div>

        <div className="card-gaming glass-panel p-8 md:p-14 min-h-[320px] flex flex-col items-center justify-center relative overflow-hidden">
          {/* Corner decorations */}
          <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-primary/30" />
          <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-secondary/30" />

          <AnimatePresence mode="wait">
            {state === "idle" && (
              <motion.div
                key="idle"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center"
              >
                <div className="flex flex-wrap justify-center gap-3 mb-8">
                  {["SOLVENCY", "RESERVE", "COMPLIANCE", "KYC"].map((tag) => (
                    <span key={tag} className="tag-label bg-muted text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
                <button onClick={handleGenerate} className="btn-primary-gaming text-sm px-12 py-4">
                  ⚡ Generate Proof
                </button>
              </motion.div>
            )}

            {state === "generating" && (
              <motion.div
                key="generating"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="w-full flex flex-col items-center"
              >
                {/* Animated bars */}
                <div className="flex items-end gap-1 h-24 mb-6">
                  {Array.from({ length: 20 }).map((_, i) => (
                    <motion.div
                      key={i}
                      className={i % 3 === 0 ? "bg-primary" : "bg-secondary/60"}
                      style={{ width: 8 }}
                      animate={{
                        height: [10, Math.random() * 80 + 16, 10],
                      }}
                      transition={{
                        duration: 0.6,
                        repeat: Infinity,
                        delay: i * 0.05,
                        ease: "easeInOut",
                      }}
                    />
                  ))}
                </div>
                <p className="font-display text-xs font-bold uppercase tracking-[0.3em] neon-green-glow animate-glow-pulse">
                  COMPUTING PROOF...
                </p>
                <p className="font-body text-[10px] text-muted-foreground mt-2">
                  Executing zk-SNARK circuit • Groth16 prover
                </p>
              </motion.div>
            )}

            {state === "verified" && (
              <motion.div
                key="verified"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ type: "spring", damping: 12 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-primary/10 border-2 border-primary flex items-center justify-center mx-auto mb-6" style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}>
                  <Check className="w-8 h-8 text-primary" strokeWidth={2.5} />
                </div>
                <p className="font-display text-2xl font-black neon-green-glow uppercase">
                  Proof Verified
                </p>
                <p className="font-display text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground mt-2">
                  Block #18,294,721 • Gas: 142K • Time: 1.2s
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default ProofGenerator;
