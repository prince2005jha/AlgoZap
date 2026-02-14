import { motion } from 'framer-motion'
import { Check, Zap, Blocks, Sparkles } from 'lucide-react'
import './Pricing.css'

const plans = [
    {
        name: 'Starter',
        price: 'Free',
        period: '',
        description: 'Perfect for experimenting with Algorand automation.',
        icon: Zap,
        color: 'cyan',
        popular: false,
        features: [
            '100 workflow executions/month',
            '3 active workflows',
            'Algorand TestNet access',
            'Community support',
            'Basic analytics',
            'Public templates',
        ],
    },
    {
        name: 'Pro',
        price: '49',
        period: '/month',
        description: 'For builders serious about Algorand automation.',
        icon: Blocks,
        color: 'violet',
        popular: true,
        features: [
            '10,000 workflow executions/month',
            'Unlimited active workflows',
            'Algorand MainNet & TestNet',
            'Priority support',
            'Advanced analytics & logs',
            'TEAL & PyTEAL script nodes',
            'Encrypted secrets vault',
            'Webhook integrations',
        ],
    },
    {
        name: 'Enterprise',
        price: 'Custom',
        period: '',
        description: 'For DAOs, protocols, and teams needing full control.',
        icon: Sparkles,
        color: 'emerald',
        popular: false,
        features: [
            'Unlimited executions',
            'Dedicated infrastructure',
            'Custom Algorand node deployments',
            'SLA & 24/7 support',
            'Multi-signature workflows',
            'DAO governance tools',
            'White-label option',
            'Audit log export',
            'SSO & access controls',
        ],
    },
]

export default function Pricing() {
    return (
        <section className="pricing section" id="pricing">
            <div className="container">
                <motion.div
                    className="pricing__header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="section-badge" id="pricing-badge">
                        <Blocks size={14} />
                        Pricing
                    </div>
                    <h2 className="section-title">
                        Simple, <span className="gradient-text">Transparent</span> Pricing
                    </h2>
                    <p className="section-subtitle">
                        Pay with ALGO or fiat. No hidden fees.
                        Scale as your Algorand automations grow.
                    </p>
                </motion.div>

                <div className="pricing__grid">
                    {plans.map((plan, i) => {
                        const Icon = plan.icon
                        return (
                            <motion.div
                                key={plan.name}
                                className={`pricing__card ${plan.popular ? 'pricing__card--popular' : ''}`}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.12 }}
                                id={`pricing-${plan.name.toLowerCase()}`}
                            >
                                {plan.popular && (
                                    <div className="pricing__popular-badge">Most Popular</div>
                                )}
                                <div className={`pricing__card-icon pricing__card-icon--${plan.color}`}>
                                    <Icon size={24} />
                                </div>
                                <h3 className="pricing__card-name">{plan.name}</h3>
                                <p className="pricing__card-desc">{plan.description}</p>
                                <div className="pricing__card-price">
                                    {plan.price !== 'Free' && plan.price !== 'Custom' && (
                                        <span className="pricing__card-currency">$</span>
                                    )}
                                    <span className="pricing__card-amount">{plan.price}</span>
                                    {plan.period && (
                                        <span className="pricing__card-period">{plan.period}</span>
                                    )}
                                </div>
                                <ul className="pricing__card-features">
                                    {plan.features.map((f, fi) => (
                                        <li key={fi} className="pricing__card-feature">
                                            <Check size={16} className={`pricing__check-icon pricing__check-icon--${plan.color}`} />
                                            {f}
                                        </li>
                                    ))}
                                </ul>
                                <button
                                    className={plan.popular ? 'btn-primary pricing__card-btn' : 'btn-secondary pricing__card-btn'}
                                    id={`pricing-btn-${plan.name.toLowerCase()}`}
                                >
                                    {plan.price === 'Custom' ? 'Contact Sales' : 'Get Started'}
                                </button>
                            </motion.div>
                        )
                    })}
                </div>

                {/* Crypto Payments */}
                <motion.div
                    className="pricing__crypto-note"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <Blocks size={16} />
                    <span>
                        Accept payments in <strong>ALGO</strong> and <strong>USDC</strong> (Algorand ASA).
                        10% discount for annual ALGO payments.
                    </span>
                </motion.div>
            </div>
        </section>
    )
}
