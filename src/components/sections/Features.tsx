import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import {
    Blocks,
    ShieldCheck,
    GitBranch,
    Wallet,
    Bell,
    Code2,
    Eye,
    Lock,
    Layers,
} from 'lucide-react'
import './Features.css'

const features = [
    {
        icon: Blocks,
        title: 'Algorand Smart Contract Triggers',
        description: 'Listen to Algorand on-chain events — ASA transfers, Application Calls, state changes — and trigger workflows automatically.',
        color: 'cyan',
    },
    {
        icon: ShieldCheck,
        title: 'Trustless Execution',
        description: 'Every workflow execution is verifiable on Algorand. No middleman, no hidden logic — powered by Pure Proof-of-Stake consensus.',
        color: 'violet',
    },
    {
        icon: GitBranch,
        title: 'Algorand Native Workflows',
        description: 'Build automations across Algorand MainNet and TestNet — ASA operations, app calls, atomic transfers — all in one canvas.',
        color: 'emerald',
    },
    {
        icon: Wallet,
        title: 'Algorand Wallet Auth',
        description: 'Sign in with Pera Wallet, Defly, or any Algorand wallet. No emails, no passwords — your keys, your workflows.',
        color: 'amber',
    },
    {
        icon: Eye,
        title: 'Algorand Audit Trail',
        description: 'Every action is recorded as a note field on Algorand. Full transparency with immutable execution logs via Allo Explorer.',
        color: 'rose',
    },
    {
        icon: Code2,
        title: 'TEAL & PyTEAL Nodes',
        description: 'Write custom logic in TEAL, PyTEAL, or Beaker. Deploy inline Algorand smart contracts as workflow steps.',
        color: 'cyan',
    },
    {
        icon: Bell,
        title: 'Real-Time Notifications',
        description: 'Get notified via Telegram, Discord, or Algorand note fields when workflows trigger, complete, or fail.',
        color: 'violet',
    },
    {
        icon: Lock,
        title: 'Encrypted Secrets',
        description: 'Store API keys and private data in decentralized encrypted vaults. Only your Algorand wallet can decrypt.',
        color: 'emerald',
    },
    {
        icon: Layers,
        title: 'Composable Templates',
        description: 'Fork community workflows or create your own templates. Share, remix, and monetize — all powered by Algorand ASAs.',
        color: 'amber',
    },
]

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.08,
        },
    },
}

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function Features() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })

    return (
        <section className="features section" id="features">
            <div className="container">
                <motion.div
                    className="features__header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="section-badge" id="features-badge">
                        <Blocks size={14} />
                        Features
                    </div>
                    <h2 className="section-title">
                        Built for <span className="gradient-text">Algorand-Native</span> Automation
                    </h2>
                    <p className="section-subtitle">
                        Everything you need to automate on Algorand — from event-driven triggers
                        to trustless smart contract executions on the world's greenest blockchain.
                    </p>
                </motion.div>

                <motion.div
                    className="features__grid"
                    ref={ref}
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                >
                    {features.map((feature, i) => {
                        const Icon = feature.icon
                        return (
                            <motion.div
                                key={i}
                                className="features__card glass-card"
                                variants={itemVariants}
                                id={`feature-card-${i}`}
                            >
                                <div className={`features__card-icon features__card-icon--${feature.color}`}>
                                    <Icon size={22} />
                                </div>
                                <h3 className="features__card-title">{feature.title}</h3>
                                <p className="features__card-desc">{feature.description}</p>
                                <div className={`features__card-glow features__card-glow--${feature.color}`} />
                            </motion.div>
                        )
                    })}
                </motion.div>
            </div>
        </section>
    )
}
