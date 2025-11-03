import { Zap, Github, Twitter, MessageCircle } from 'lucide-react'
import './Footer.css'

const footerLinks = {
    Product: ['Features', 'Integrations', 'Pricing', 'Changelog', 'Roadmap'],
    Developers: ['Documentation', 'API Reference', 'AlgoSDK', 'TEAL Contracts', 'GitHub'],
    Company: ['About', 'Blog', 'Careers', 'Press Kit', 'Contact'],
    Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'GDPR'],
}

export default function Footer() {
    return (
        <footer className="footer" id="footer">
            <div className="container">
                <div className="footer__top">
                    {/* Logo & desc */}
                    <div className="footer__brand">
                        <a href="#" className="footer__logo">
                            <div className="footer__logo-icon">
                                <Zap size={18} />
                            </div>
                            <span className="footer__logo-text">
                                Algo<span className="gradient-text">Zap</span>
                            </span>
                        </a>
                        <p className="footer__brand-desc">
                            Algorand-powered workflow automation for the decentralized web.
                            Build, deploy, and monitor trustless automations on Algorand.
                        </p>
                        <div className="footer__socials">
                            <a href="#" className="footer__social" aria-label="GitHub" id="footer-github">
                                <Github size={18} />
                            </a>
                            <a href="#" className="footer__social" aria-label="Twitter" id="footer-twitter">
                                <Twitter size={18} />
                            </a>
                            <a href="#" className="footer__social" aria-label="Discord" id="footer-discord">
                                <MessageCircle size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Link columns */}
                    {Object.entries(footerLinks).map(([title, links]) => (
                        <div key={title} className="footer__col">
                            <h4 className="footer__col-title">{title}</h4>
                            <ul className="footer__col-links">
                                {links.map((link) => (
                                    <li key={link}>
                                        <a href="#" className="footer__link">{link}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="footer__bottom">
                    <p className="footer__copyright">
                        © 2026 AlgoZap. All rights reserved. Built on-chain.
                    </p>
                    <div className="footer__chain-badge">
                        <span className="footer__chain-dot" />
                        Deployed on Algorand MainNet
                    </div>
                </div>
            </div>
        </footer>
    )
}
