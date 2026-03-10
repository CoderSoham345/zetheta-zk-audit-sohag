import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";
import mascotGuardian from "@/assets/mascot-guardian.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
      </div>

      {/* Scan line effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="w-full h-[2px] bg-primary/10 animate-scan-line" />
      </div>

      <div className="relative z-10 container mx-auto px-6 pt-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left: Text */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="tag-label bg-primary/10 text-primary inline-block mb-6">
                SEASON 01 // LIVE NOW
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-5xl md:text-6xl lg:text-7xl font-black uppercase leading-[0.95] mb-6"
            >
              <span className="text-foreground block">PROVE</span>
              <span className="neon-green-glow block">EVERYTHING.</span>
              <span className="neon-purple-glow block">REVEAL</span>
              <span className="text-foreground block">NOTHING.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-body text-lg text-muted-foreground max-w-md mb-10 leading-relaxed"
            >
              The ultimate zero-knowledge proof arena. Deploy your agents, verify
              on-chain, and dominate the compliance leaderboard.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="flex flex-wrap gap-4"
            >
              <button className="btn-primary-gaming">Enter Arena</button>
              <button className="btn-secondary-gaming">Watch Trailer</button>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex gap-8 mt-14"
            >
              {[
                { value: "12.8K", label: "PROOFS VERIFIED" },
                { value: "342", label: "ACTIVE AUDITS" },
                { value: "1.2s", label: "AVG VERIFY" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="stat-number text-3xl text-primary">{stat.value}</p>
                  <p className="font-display text-[9px] font-semibold uppercase tracking-[0.2em] text-muted-foreground mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Mascot */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:flex justify-center items-end relative"
          >
            <div className="relative">
              {/* Green glow behind mascot */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-80 h-80 bg-primary/20 rounded-full blur-[80px]" />
              <img
                src={mascotGuardian}
                alt="Guardian Agent"
                className="relative z-10 h-[550px] object-contain drop-shadow-2xl"
              />
              {/* Agent label */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20">
                <div className="glass-panel-green px-6 py-2 text-center">
                  <p className="font-display text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
                    AGENT // GUARDIAN
                  </p>
                  <p className="font-display text-[8px] uppercase tracking-[0.15em] text-muted-foreground">
                    ROLE: PROVER
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
