import { motion } from "framer-motion";
import mascotGuardian from "@/assets/mascot-guardian.png";
import mascotSentinel from "@/assets/mascot-sentinel.png";
import mascotOverseer from "@/assets/mascot-overseer.png";

const agents = [
  {
    name: "GUARDIAN",
    role: "PROVER",
    class: "COMPANY",
    ability: "Generate zero-knowledge proofs of compliance, solvency, and reserves without exposing sensitive data.",
    image: mascotGuardian,
    color: "green" as const,
    stats: { attack: 8, defense: 6, stealth: 10 },
  },
  {
    name: "SENTINEL",
    role: "VERIFIER",
    class: "AUDITOR",
    ability: "Verify cryptographic proofs on-chain. Build reputation through accurate verification and proof template creation.",
    image: mascotSentinel,
    color: "purple" as const,
    stats: { attack: 6, defense: 9, stealth: 5 },
  },
  {
    name: "OVERSEER",
    role: "OBSERVER",
    class: "REGULATOR",
    ability: "Monitor compliance proofs in real-time. Verify regulatory attestations without accessing underlying confidential data.",
    image: mascotOverseer,
    color: "green" as const,
    stats: { attack: 4, defense: 10, stealth: 8 },
  },
];

const StatBar = ({ label, value, color }: { label: string; value: number; color: "green" | "purple" }) => (
  <div className="flex items-center gap-3">
    <span className="font-display text-[9px] font-semibold uppercase tracking-[0.15em] text-muted-foreground w-14">
      {label}
    </span>
    <div className="flex-1 h-1.5 bg-muted overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${value * 10}%` }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={color === "green" ? "h-full bg-primary" : "h-full bg-secondary"}
      />
    </div>
    <span className="font-display text-[10px] font-bold text-foreground w-4 text-right">{value}</span>
  </div>
);

const AgentsSection = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Diagonal background accent */}
      <div className="absolute inset-0 bg-muted/30 skew-section" />

      <div className="relative z-10 container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="tag-label bg-secondary/10 text-secondary inline-block mb-4">
            CHOOSE YOUR AGENT
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-black uppercase text-foreground">
            MEET THE <span className="neon-green-glow">SQUAD</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {agents.map((agent, i) => (
            <motion.div
              key={agent.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="card-gaming group cursor-pointer"
            >
              {/* Agent image */}
              <div className={`relative h-72 overflow-hidden ${agent.color === "green" ? "bg-primary/5" : "bg-secondary/5"}`}>
                <div className={`absolute inset-0 ${agent.color === "green" ? "bg-gradient-to-t from-card via-transparent to-transparent" : "bg-gradient-to-t from-card via-transparent to-transparent"}`} />
                <img
                  src={agent.image}
                  alt={agent.name}
                  className="w-full h-full object-contain object-bottom transition-transform duration-500 group-hover:scale-105"
                />
                {/* Role tag */}
                <div className="absolute top-4 left-4">
                  <span className={`tag-label ${agent.color === "green" ? "bg-primary/20 text-primary" : "bg-secondary/20 text-secondary"}`}>
                    {agent.role}
                  </span>
                </div>
              </div>

              {/* Info */}
              <div className="p-6 border-t border-border">
                <div className="flex items-baseline justify-between mb-1">
                  <h3 className="font-display text-xl font-black text-foreground">{agent.name}</h3>
                  <span className="font-display text-[9px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                    {agent.class}
                  </span>
                </div>

                <p className="font-body text-sm text-muted-foreground mt-3 mb-5 leading-relaxed">
                  {agent.ability}
                </p>

                {/* Stats */}
                <div className="space-y-2">
                  <StatBar label="ATK" value={agent.stats.attack} color={agent.color} />
                  <StatBar label="DEF" value={agent.stats.defense} color={agent.color} />
                  <StatBar label="STL" value={agent.stats.stealth} color={agent.color} />
                </div>

                <button className={`mt-5 w-full py-2 font-display text-[10px] font-bold uppercase tracking-[0.2em] border transition-all ${
                  agent.color === "green" 
                    ? "border-primary/30 text-primary hover:bg-primary/10" 
                    : "border-secondary/30 text-secondary hover:bg-secondary/10"
                }`}>
                  Select Agent →
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AgentsSection;
