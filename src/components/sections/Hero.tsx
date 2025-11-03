import { motion } from 'framer-motion'
import { ArrowRight, Zap, Shield, Blocks, Sparkles } from 'lucide-react'
import './Hero.css'

export default function Hero() {
    return (
        <section className="hero grid-pattern" id="hero">
            {/* Background Effects */}
            <div className="hero__bg">
                <div className="hero__orb hero__orb--1" />
                <div className="hero__orb hero__orb--2" />
                <div className="hero__orb hero__orb--3" />
            </div>

            <div className="container hero__container">
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="section-badge" id="hero-badge">
                        <Blocks size={14} />
                        Powered by Algorand
                    </div>
                </motion.div>

                {/* Heading */}
                <motion.h1
                    className="hero__title"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                >
                    Automate Your <br />
                    <span className="gradient-text">Algorand Workflows</span>
                    <br />
                    On-Chain
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    className="hero__subtitle"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                >
                    Connect Algorand dApps, smart contracts, and on-chain events into powerful
                    automated workflows. Trustless, transparent, and verifiable —
                    powered by the Algorand blockchain.
                </motion.p>

                {/* CTA */}
                <motion.div
                    className="hero__cta"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                >
                    <a href="#" className="btn-primary hero__btn" id="hero-cta-start">
                        <Zap size={18} />
                        Start Automating
                        <ArrowRight size={18} />
                    </a>
                    <a href="#how-it-works" className="btn-secondary hero__btn" id="hero-cta-learn">
                        See How It Works
                    </a>
                </motion.div>

                {/* Stats Row */}
                <motion.div
                    className="hero__stats"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.45 }}
                >
                    <div className="hero__stat">
                        <div className="hero__stat-value gradient-text">50K+</div>
                        <div className="hero__stat-label">Workflows Executed</div>
                    </div>
                    <div className="hero__stat-divider" />
                    <div className="hero__stat">
                        <div className="hero__stat-value gradient-text">1</div>
                        <div className="hero__stat-label">Algorand Chain</div>
                    </div>
                    <div className="hero__stat-divider" />
                    <div className="hero__stat">
                        <div className="hero__stat-value gradient-text">99.9%</div>
                        <div className="hero__stat-label">Uptime Guarantee</div>
                    </div>
                    <div className="hero__stat-divider" />
                    <div className="hero__stat">
                        <div className="hero__stat-value gradient-text">$0</div>
                        <div className="hero__stat-label">Near-Zero Fees</div>
                    </div>
                </motion.div>

                {/* Animated Visual */}
                <motion.div
                    className="hero__visual"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                >
                    <div className="hero__workflow-card">
                        <div className="hero__wf-header">
                            <div className="hero__wf-dot hero__wf-dot--green" />
                            <div className="hero__wf-dot hero__wf-dot--yellow" />
                            <div className="hero__wf-dot hero__wf-dot--red" />
                            <span className="hero__wf-title">My Workflow — Algorand DeFi Auto-Compound</span>
                        </div>
                        <div className="hero__wf-body">
                            {/* Node 1 */}
                            <div className="hero__wf-node">
                                <div className="hero__wf-node-icon hero__wf-node-icon--trigger">
                                    <Sparkles size={18} />
                                </div>
                                <div>
                                    <div className="hero__wf-node-title">Algorand Event Trigger</div>
                                    <div className="hero__wf-node-desc">When yield {'>'} 5% APY on Folks Finance</div>
                                </div>
                            </div>
                            <div className="hero__wf-connector">
                                <div className="hero__wf-connector-line" />
                                <div className="hero__wf-connector-dot" />
                            </div>
                            {/* Node 2 */}
                            <div className="hero__wf-node">
                                <div className="hero__wf-node-icon hero__wf-node-icon--action">
                                    <Shield size={18} />
                                </div>
                                <div>
                                    <div className="hero__wf-node-title">ABI Method Call</div>
                                    <div className="hero__wf-node-desc">Execute compound() via App Call</div>
                                </div>
                            </div>
                            <div className="hero__wf-connector">
                                <div className="hero__wf-connector-line" />
                                <div className="hero__wf-connector-dot" />
                            </div>
                            {/* Node 3 */}
                            <div className="hero__wf-node">
                                <div className="hero__wf-node-icon hero__wf-node-icon--verify">
                                    <Blocks size={18} />
                                </div>
                                <div>
                                    <div className="hero__wf-node-title">Algorand Verification</div>
                                    <div className="hero__wf-node-desc">Verify tx on Allo Explorer</div>
                                </div>
                            </div>
                        </div>
                        {/* Floating blockchain indicators */}
                        <div className="hero__wf-chain-badges">
                            <span className="hero__wf-chain">ALGO</span>
                            <span className="hero__wf-chain">ASA</span>
                            <span className="hero__wf-chain">ARC</span>
                            <span className="hero__wf-chain">TEAL</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
