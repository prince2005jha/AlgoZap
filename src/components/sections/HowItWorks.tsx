import { motion } from 'framer-motion'
import { Wallet, GitBranch, Blocks, Rocket, ArrowDown } from 'lucide-react'
import './HowItWorks.css'

const steps = [
    {
        number: '01',
        icon: Wallet,
        title: 'Connect Your Algorand Wallet',
        description: 'Sign in with Pera Wallet, Defly, or WalletConnect. No emails, no passwords — just your Algorand keys.',
        color: 'cyan',
    },
    {
        number: '02',
        icon: GitBranch,
        title: 'Build Your Workflow',
        description: 'Drag-and-drop triggers, actions, and conditions. Connect Algorand smart contracts, ASAs, and dApps visually.',
        color: 'violet',
    },
    {
        number: '03',
        icon: Blocks,
        title: 'Deploy on Algorand',
        description: 'Your workflow logic is deployed to Algorand. Every execution is verifiable, instant, and near-zero cost.',
        color: 'emerald',
    },
    {
        number: '04',
        icon: Rocket,
        title: 'Automate & Monitor',
        description: 'Sit back and watch. Real-time monitoring, on-chain logs, and instant notifications when actions fire.',
        color: 'amber',
    },
]

export default function HowItWorks() {
    return (
        <section className="how-it-works section" id="how-it-works">
            <div className="container">
                <motion.div
                    className="how-it-works__header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="section-badge" id="how-it-works-badge">
                        <Blocks size={14} />
                        How It Works
                    </div>
                    <h2 className="section-title">
                        From Wallet to <span className="gradient-text">Workflow</span> in Minutes
                    </h2>
                    <p className="section-subtitle">
                        Building Algorand automations has never been easier.
                        Four simple steps to trustless automation on the greenest blockchain.
                    </p>
                </motion.div>

                <div className="how-it-works__steps">
                    {steps.map((step, i) => {
                        const Icon = step.icon
                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: '-80px' }}
                                transition={{ duration: 0.6, delay: i * 0.15 }}
                            >
                                <div className={`how-it-works__step`} id={`step-${i}`}>
                                    <div className={`how-it-works__step-number how-it-works__step-number--${step.color}`}>
                                        {step.number}
                                    </div>
                                    <div className={`how-it-works__step-icon how-it-works__step-icon--${step.color}`}>
                                        <Icon size={28} />
                                    </div>
                                    <div className="how-it-works__step-content">
                                        <h3 className="how-it-works__step-title">{step.title}</h3>
                                        <p className="how-it-works__step-desc">{step.description}</p>
                                    </div>
                                </div>
                                {i < steps.length - 1 && (
                                    <div className="how-it-works__connector">
                                        <div className="how-it-works__connector-line" />
                                        <ArrowDown size={16} className="how-it-works__connector-arrow" />
                                    </div>
                                )}
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
