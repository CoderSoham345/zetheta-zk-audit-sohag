import { motion } from "framer-motion";

const leaderboard = [
  { rank: 1, name: "CryptoVault_DAO", proofs: 1284, winRate: "99.2%", tier: "RADIANT" },
  { rank: 2, name: "AuditMaster.eth", proofs: 1103, winRate: "98.7%", tier: "RADIANT" },
  { rank: 3, name: "ZKShield_Corp", proofs: 987, winRate: "97.5%", tier: "IMMORTAL" },
  { rank: 4, name: "DefiGuard_Inc", proofs: 856, winRate: "96.1%", tier: "IMMORTAL" },
  { rank: 5, name: "ChainVerify.io", proofs: 743, winRate: "95.8%", tier: "DIAMOND" },
];

const tierColor = (tier: string) => {
  switch (tier) {
    case "RADIANT": return "neon-green-glow";
    case "IMMORTAL": return "neon-purple-glow";
    default: return "text-foreground";
  }
};

const LeaderboardSection = () => {
  return (
    <section className="relative py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="tag-label bg-secondary/10 text-secondary inline-block mb-4">
            RANKED
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-black uppercase text-foreground">
            LEADER<span className="neon-purple-glow">BOARD</span>
          </h2>
        </motion.div>

        <div className="card-gaming glass-panel overflow-hidden">
          {/* Header */}
          <div className="grid grid-cols-12 gap-4 px-6 py-3 border-b border-border bg-muted/30">
            <div className="col-span-1 font-display text-[9px] font-bold uppercase tracking-[0.2em] text-muted-foreground">#</div>
            <div className="col-span-5 font-display text-[9px] font-bold uppercase tracking-[0.2em] text-muted-foreground">Agent</div>
            <div className="col-span-2 font-display text-[9px] font-bold uppercase tracking-[0.2em] text-muted-foreground text-right">Proofs</div>
            <div className="col-span-2 font-display text-[9px] font-bold uppercase tracking-[0.2em] text-muted-foreground text-right">Win Rate</div>
            <div className="col-span-2 font-display text-[9px] font-bold uppercase tracking-[0.2em] text-muted-foreground text-right">Tier</div>
          </div>

          {/* Rows */}
          {leaderboard.map((entry, i) => (
            <motion.div
              key={entry.rank}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="grid grid-cols-12 gap-4 px-6 py-4 border-b border-border/50 hover:bg-muted/20 transition-colors cursor-pointer group"
            >
              <div className="col-span-1 font-display text-sm font-black text-primary">
                {String(entry.rank).padStart(2, "0")}
              </div>
              <div className="col-span-5 font-display text-sm font-bold text-foreground group-hover:text-primary transition-colors">
                {entry.name}
              </div>
              <div className="col-span-2 font-display text-sm font-bold text-foreground text-right">
                {entry.proofs.toLocaleString()}
              </div>
              <div className="col-span-2 font-display text-sm font-bold text-foreground text-right">
                {entry.winRate}
              </div>
              <div className={`col-span-2 font-display text-[10px] font-black uppercase tracking-[0.15em] text-right ${tierColor(entry.tier)}`}>
                {entry.tier}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeaderboardSection;
