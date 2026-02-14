import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Clock, Zap, ArrowRight, CheckCircle2, Play, MousePointerClick, Blocks } from 'lucide-react'
import './LearnAutomation.css'

export default function LearnAutomation() {
    const [step, setStep] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setStep((prev) => (prev < 3 ? prev + 1 : 0))
        }, 2500)
        return () => clearInterval(timer)
    }, [])

    const nextStep = () => {
        if (step < 3) setStep(step + 1)
        else setStep(0)
    }

    return (
        <section className="learn-automation section" id="learn-automation">
            <div className="container">
                <motion.div
                    className="learn-automation__header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="section-badge">
                        <MousePointerClick size={14} />
                        Interactive Demo
                    </div>
                    <h2 className="section-title">
                        Build Your First <span className="gradient-text">Workflow</span>
                    </h2>
                    <p className="section-subtitle">
                        See how easy it is to automate actions on Algorand. Try this interactive simulator.
                    </p>
                </motion.div>

                <div className="learn-demo">
                    {/* Sidebar Instructions */}
                    <div className="learn-demo__sidebar">
                        <AnimatePresence mode="wait">
                            {step === 0 && (
                                <motion.div
                                    key="step0"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                >
                                    <div className="learn-demo__step-badge">Step 1: Initiation</div>
                                    <h3 className="learn-demo__title">Start a New Workflow</h3>
                                    <p className="learn-demo__desc">
                                        Every automation begins with a <strong>Trigger</strong>. This tells AlgoZap when to run.
                                    </p>
                                    <div className="learn-demo__options">
                                        <button className="learn-demo__btn" onClick={nextStep}>
                                            <Clock size={20} />
                                            Schedule (Every 24h)
                                        </button>
                                        <button className="learn-demo__btn" onClick={nextStep}>
                                            <Zap size={20} />
                                            On-Chain Event
                                        </button>
                                    </div>
                                </motion.div>
                            )}
                            {step === 1 && (
                                <motion.div
                                    key="step1"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                >
                                    <div className="learn-demo__step-badge">Step 2: Execution</div>
                                    <h3 className="learn-demo__title">Add an Action</h3>
                                    <p className="learn-demo__desc">
                                        What should happen when the trigger fires? Let's claim staking rewards.
                                    </p>
                                    <div className="learn-demo__options">
                                        <button className="learn-demo__btn" onClick={nextStep}>
                                            <Blocks size={20} />
                                            Call "Claim Rewards" (Folks Finance)
                                        </button>
                                    </div>
                                </motion.div>
                            )}
                            {step === 2 && (
                                <motion.div
                                    key="step2"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                >
                                    <div className="learn-demo__step-badge">Step 3: Verification</div>
                                    <h3 className="learn-demo__title">Deploy & Run</h3>
                                    <p className="learn-demo__desc">
                                        Your logical workflow is ready. Deploy it to the Algorand blockchain.
                                    </p>
                                    <div className="learn-demo__options">
                                        <button className="learn-demo__btn" onClick={nextStep}>
                                            <Play size={20} />
                                            Deploy Workflow
                                        </button>
                                    </div>
                                </motion.div>
                            )}
                            {step === 3 && (
                                <motion.div
                                    key="step3"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                >
                                    <div className="learn-demo__step-badge" style={{ background: '#ecfdf5', color: '#10b981' }}>
                                        Complete
                                    </div>
                                    <h3 className="learn-demo__title">Workflow Active!</h3>
                                    <p className="learn-demo__desc">
                                        Success! Your workflow is now running on-chain. It will execute automatically based on your trigger.
                                    </p>
                                    <div className="learn-demo__options">
                                        <button className="learn-demo__btn" onClick={() => setStep(0)}>
                                            <ArrowRight size={20} />
                                            Build Another
                                        </button>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Visual Canvas */}
                    <div className="learn-demo__canvas">
                        <AnimatePresence>
                            {step >= 1 && (
                                <motion.div
                                    initial={{ opacity: 0, y: 20, scale: 0.9 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    className="learn-node learn-node--trigger"
                                >
                                    <div className="learn-node__icon">
                                        <Clock size={20} />
                                    </div>
                                    <div className="learn-node__content">
                                        <div className="learn-node__label">Trigger</div>
                                        <div className="learn-node__title">Daily Schedule (00:00 UTC)</div>
                                    </div>
                                </motion.div>
                            )}

                            {step >= 2 && (
                                <>
                                    <motion.div
                                        initial={{ height: 0 }}
                                        animate={{ height: 40 }}
                                        className="learn-connector"
                                    />
                                    <motion.div
                                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        className="learn-node learn-node--action"
                                    >
                                        <div className="learn-node__icon">
                                            <Blocks size={20} />
                                        </div>
                                        <div className="learn-node__content">
                                            <div className="learn-node__label">Action</div>
                                            <div className="learn-node__title">App Call: Claim Rewards</div>
                                        </div>
                                    </motion.div>
                                </>
                            )}

                            {step >= 3 && (
                                <>
                                    <motion.div
                                        initial={{ height: 0 }}
                                        animate={{ height: 40 }}
                                        className="learn-connector"
                                    />
                                    <motion.div
                                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        className="learn-node learn-node--success"
                                        style={{ borderColor: '#10b981' }}
                                    >
                                        <div className="learn-node__icon">
                                            <CheckCircle2 size={20} />
                                        </div>
                                        <div className="learn-node__content">
                                            <div className="learn-node__label">Status</div>
                                            <div className="learn-node__title">Deployed & Running</div>
                                        </div>
                                    </motion.div>
                                </>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    )
}
