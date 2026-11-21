"use client"

// import ThemeButton from "@/components/ThemeButton"
import { motion, useReducedMotion } from "framer-motion"
import { ArrowDownToLine, ArrowDownRight, ArrowUpRight, Menu, Sparkles } from "lucide-react"
import { useState } from "react"
import { AboutBento } from "@/components/about-bento"
import { ProjectsContact } from "@/components/projects-contact"

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Let’s talk", href: "#contact" },
]

const skills = [
]

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const reduceMotion = useReducedMotion()

  return (
    <main className="portfolio-shell min-h-screen overflow-hidden bg-background text-foreground">
      <div className="ambient ambient-cyan" aria-hidden="true" />
      <div className="ambient ambient-indigo" aria-hidden="true" />

      <header className="site-header">
        <a className="brand" href="#about" aria-label="Yash Athawale home">
          <span className="brand-mark">Y<span>.</span></span>
          <span className="brand-name">Yash Athawale</span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <Menu size={19} strokeWidth={1.7} />
        </button>

        <nav className={`nav-links${menuOpen ? " nav-open" : ""}`} aria-label="Main navigation">
          {links.map((link) => (
            <a key={link.label} href={link.href} onClick={() => setMenuOpen(false)}>{link.label}</a>
          ))}
        </nav>
        {/* <ThemeButton /> */}

        <a className="resume-link" href="/Yash_Athawale_Resume.pdf" download>
          <span>Download Resume</span>
          <ArrowDownToLine size={15} strokeWidth={1.8} />
        </a>
      </header>

      <motion.section
        className="hero"
        aria-labelledby="hero-title"
        initial={reduceMotion ? false : { opacity: 0, y: 42, scale: 0.96 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="hero-copy">
          <motion.div
            className="availability"
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1 }}
          >
            <span className="availability-dot" />
            Available for Full-Stack &amp; Gen AI Engineer Roles
          </motion.div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.2 }}
          >
            <p className="eyebrow"><span /> ENGINEERING WITH INTENTION</p>
            <h1 id="hero-title">Yash Athawale<span className="title-dash"> —</span><br /><span className="title-role">Java Full-Stack &amp; Gen AI</span> Engineer<span className="title-period">.</span></h1>
          </motion.div>

          <motion.p
            className="hero-description"
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
          >
            Computer Engineering graduate building scalable Java/Spring Boot backends, React frontends, and RAG-powered Generative AI applications.
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.48 }}
          >
            <a className="button-primary" href="#projects">View Projects <ArrowUpRight size={16} /></a>
            <a className="button-secondary" href="#contact">Contact Me <ArrowDownRight size={16} /></a>
          </motion.div>

          <motion.div
            className="hero-footnote"
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.7 }}
          >
            <span className="footnote-line" />
            <span>Thoughtful systems. Useful intelligence.</span>
          </motion.div>
        </div>

        <div className="portrait-stage" aria-label="Portrait of Yash Athawale">
          <div className="portrait-orbit orbit-one" />
          <div className="portrait-orbit orbit-two" />
          <div className="portrait-frame">
            <div className="portrait-image" role="img" aria-label="Yash Athawale in a tailored dark suit" />
            <div className="portrait-wash" />
            <div className="portrait-caption"><span>01 / THE BUILDER</span><span>INDIA · OPEN TO THE WORLD</span></div>
          </div>

          <motion.div className="floating-card card-java" initial={reduceMotion ? false : { opacity: 0, x: 18 }} animate={reduceMotion ? { opacity: 1, x: 0 } : { opacity: 1, x: 0, y: [0, -6, 0] }} transition={reduceMotion ? { duration: 0.1 } : { opacity: { duration: 0.6, delay: 0.85 }, x: { duration: 0.6, delay: 0.85 }, y: { duration: 4.8, repeat: Infinity, ease: "easeInOut" } }}>
            <span className="tech-symbol java-symbol">J</span><span><strong>Java</strong><small>Reliable by design</small></span>
          </motion.div>
          <motion.div className="floating-card card-ai" initial={reduceMotion ? false : { opacity: 0, x: -18 }} animate={reduceMotion ? { opacity: 1, x: 0 } : { opacity: 1, x: 0, y: [0, 7, 0] }} transition={reduceMotion ? { duration: 0.1 } : { opacity: { duration: 0.6, delay: 1 }, x: { duration: 0.6, delay: 1 }, y: { duration: 5.6, repeat: Infinity, ease: "easeInOut" } }}>
            <span className="tech-symbol ai-symbol"><Sparkles size={16} /></span><span><strong>Spring AI</strong><small>Intelligence, integrated</small></span>
          </motion.div>
          <motion.div className="floating-card card-react" initial={reduceMotion ? false : { opacity: 0, y: 14 }} animate={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: [0, -5, 0] }} transition={reduceMotion ? { duration: 0.1 } : { opacity: { duration: 0.6, delay: 1.15 }, y: { duration: 5.2, repeat: Infinity, ease: "easeInOut" } }}>
            <span className="react-orbit" aria-hidden="true"><i /></span><span><strong>React</strong><small>Interfaces that feel right</small></span>
          </motion.div>

          <div className="portrait-index"><span>01</span><span className="index-rule" /><span>03</span></div>
        </div>
      </motion.section>

      <AboutBento />

      <ProjectsContact />

    </main>
  )
}
