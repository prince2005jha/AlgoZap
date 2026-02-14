import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Blocks } from 'lucide-react'
import './Integrations.css'

const algorandEcosystem = [
    { name: 'Algorand MainNet', symbol: 'ALGO', color: '#000000' },
    { name: 'Algorand TestNet', symbol: 'TEST', color: '#6B7280' },
]

const protocols = [
    { name: 'Folks Finance', category: 'Lending' },
    { name: 'Tinyman', category: 'DEX' },
    { name: 'Pact', category: 'DEX' },
    { name: 'AlgoFi', category: 'DeFi' },
    { name: 'NFD (NFDomains)', category: 'Identity' },
    { name: 'Rand Gallery', category: 'NFT' },
    { name: 'ALGOxNFT', category: 'NFT' },
    { name: 'Vestige', category: 'Analytics' },
    { name: 'Algorand ARC-200', category: 'Token Std' },
    { name: 'Algorand ARC-72', category: 'NFT Std' },
    { name: 'AlgoNode', category: 'Indexer' },
    { name: 'Nodely', category: 'Infra' },
]

const tools = [
    { name: 'Pera Wallet', category: 'Wallet' },
    { name: 'Defly Wallet', category: 'Wallet' },
    { name: 'AlgoSDK', category: 'SDK' },
    { name: 'PyTEAL', category: 'Language' },
    { name: 'Beaker', category: 'Framework' },
    { name: 'Algokit', category: 'CLI' },
    { name: 'Allo Explorer', category: 'Explorer' },
    { name: 'Dappflow', category: 'IDE' },
]

const offChainApps = [
    { name: 'Telegram', category: 'Messaging' },
    { name: 'Discord', category: 'Community' },
    { name: 'Slack', category: 'Workspace' },
    { name: 'GitHub', category: 'Code' },
    { name: 'Notion', category: 'Docs' },
    { name: 'Google Sheets', category: 'Data' },
    { name: 'Webhook', category: 'API' },
    { name: 'Email', category: 'Communication' },
]

export default function Integrations() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })

    return (
        <section className="integrations section" id="integrations">
            <div className="container">
                <motion.div
                    className="integrations__header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="section-badge" id="integrations-badge">
                        <Blocks size={14} />
                        Integrations
                    </div>
                    <h2 className="section-title">
                        The Full <span className="gradient-text">Algorand Ecosystem</span>
                    </h2>
                    <p className="section-subtitle">
                        From DeFi to NFTs, from on-chain events to off-chain tools —
                        AlgoZap connects everything on Algorand.
                    </p>
                </motion.div>

                <div className="integrations__content" ref={ref}>
                    {/* Algorand Networks */}
                    <motion.div
                        className="integrations__section"
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5 }}
                    >
                        <h3 className="integrations__section-title">
                            <span className="integrations__section-dot integrations__section-dot--cyan" />
                            Algorand Networks
                        </h3>
                        <div className="integrations__chains">
                            {algorandEcosystem.map((chain, i) => (
                                <motion.div
                                    key={chain.symbol}
                                    className="integrations__chain-card glass-card"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                    transition={{ duration: 0.4, delay: i * 0.06 }}
                                    id={`chain-${chain.symbol.toLowerCase()}`}
                                >
                                    <div
                                        className="integrations__chain-avatar"
                                        style={{ background: `${chain.color}22`, color: chain.color }}
                                    >
                                        {chain.symbol.charAt(0)}
                                    </div>
                                    <div className="integrations__chain-name">{chain.name}</div>
                                    <div className="integrations__chain-symbol">{chain.symbol}</div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Algorand Protocols */}
                    <motion.div
                        className="integrations__section"
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.15 }}
                    >
                        <h3 className="integrations__section-title">
                            <span className="integrations__section-dot integrations__section-dot--violet" />
                            Algorand DeFi & NFT Protocols
                        </h3>
                        <div className="integrations__tags">
                            {protocols.map((p, i) => (
                                <motion.div
                                    key={p.name}
                                    className="integrations__tag"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.3, delay: 0.2 + i * 0.04 }}
                                >
                                    <span className="integrations__tag-name">{p.name}</span>
                                    <span className="integrations__tag-cat">{p.category}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Algorand Dev Tools */}
                    <motion.div
                        className="integrations__section"
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <h3 className="integrations__section-title">
                            <span className="integrations__section-dot integrations__section-dot--emerald" />
                            Algorand Wallets & Dev Tools
                        </h3>
                        <div className="integrations__tags">
                            {tools.map((t, i) => (
                                <motion.div
                                    key={t.name}
                                    className="integrations__tag integrations__tag--tools"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.3, delay: 0.35 + i * 0.04 }}
                                >
                                    <span className="integrations__tag-name">{t.name}</span>
                                    <span className="integrations__tag-cat">{t.category}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Off-chain Apps */}
                    <motion.div
                        className="integrations__section"
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.45 }}
                    >
                        <h3 className="integrations__section-title">
                            <span className="integrations__section-dot integrations__section-dot--amber" />
                            Off-Chain Connectors
                        </h3>
                        <div className="integrations__tags">
                            {offChainApps.map((a, i) => (
                                <motion.div
                                    key={a.name}
                                    className="integrations__tag integrations__tag--off-chain"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.3, delay: 0.5 + i * 0.04 }}
                                >
                                    <span className="integrations__tag-name">{a.name}</span>
                                    <span className="integrations__tag-cat">{a.category}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
