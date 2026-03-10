import { motion } from "framer-motion";
import { Shield, Zap, Target, Layers } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "ZK-SNARK ENGINE",
    description: "Generate succinct proofs for financial verification. Sub-second on-chain validation with gas-optimized Groth16 verifiers.",
    color: "green" as const,
  },
  {
    icon: Shield,
    title: "STEALTH CIRCUITS",
    description: "Custom arithmetic circuits for solvency proofs, reserve attestation, and compliance — all without data exposure.",
    color: "purple" as const,
  },
  {
    icon: Target,
    title: "ON-CHAIN VERIFY",
    description: "Immutable proof storage on L2. Smart contract verification with transparent, trustless audit trails.",
    color: "green" as const,
  },
  {
    icon: Layers,
    title: "PROOF STACKING",
    description: "Recursive proof composition. Stack multiple audit proofs into a single verifiable mega-proof for portfolio-wide compliance.",
    color: "purple" as const,
  },
];

const FeaturesSection = () => {
  return (
    <section className="relative py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="tag-label bg-primary/10 text-primary inline-block mb-4">
            ABILITIES
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-black uppercase text-foreground">
            YOUR <span className="neon-purple-glow">ARSENAL</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {features.map((feat, i) => (
            <motion.div
              key={feat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={`card-gaming p-8 group hover:border-opacity-100 transition-all ${
                feat.color === "green" ? "glass-panel-green" : "glass-panel-purple"
              }`}
            >
              <div className="flex items-start gap-5">
                <div className={`w-12 h-12 flex items-center justify-center flex-shrink-0 ${
                  feat.color === "green" ? "bg-primary/10 text-primary" : "bg-secondary/10 text-secondary"
                }`} style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}>
                  <feat.icon size={20} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className={`font-display text-lg font-black uppercase mb-2 ${
                    feat.color === "green" ? "text-primary" : "text-secondary"
                  }`}>
                    {feat.title}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">
                    {feat.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
