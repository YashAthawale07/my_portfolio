"use client"

import { AnimatePresence, motion, useReducedMotion, useSpring } from "framer-motion"
import { ArrowLeft, ArrowRight, ArrowUpRight, BriefcaseBusiness, Check, Copy, Layers3, Mail } from "lucide-react"
import { useState, type PointerEvent } from "react"

type ProjectImage = { src: string; alt: string; label: string }

type Project = {
  number: string
  title: string
  subtitle: string
  description: string
  tags: string[]
  visual: string
  githubUrl: string
  demoUrl: string
  images: ProjectImage[]
}

const projects: Project[] = [
  {
    number: "01",
    title: "DocMind",
    subtitle: "AI-Powered Document Intelligence System",
    description: "A full-stack AI document assistant with a RAG pipeline, semantic search, chat memory, and role-based access control.",
    tags: ["Java", "Spring Boot", "Spring AI", "React.js", "PostgreSQL", "pgvector", "JWT"],
    visual: "project-visual-docmind",
    githubUrl: "https://github.com/YashAthawale07/Doc_Mind",
    demoUrl: "",
    images: [],
  },
  {
    number: "02",
    title: "Geolocation-Based Attendance App",
    subtitle: "Automated attendance, verified by location",
    description: "A Flutter mobile app built around geofencing, with 10+ REST APIs and role-based access for streamlined attendance.",
    tags: ["Spring Boot", "Flutter", "MongoDB", "REST APIs"],
    visual: "project-visual-geo",
    githubUrl: "https://github.com/YashAthawale07",
    demoUrl: "",
    images: [],
  },
  {
    number: "03",
    title: "Inventory Management System",
    subtitle: "A clearer view of every stock movement",
    description: "A full-stack stock dashboard backed by 8+ validated CRUD APIs for reliable inventory workflows.",
    tags: ["React.js", "Spring Boot", "MongoDB", "REST APIs"],
    visual: "project-visual-inventory",
    githubUrl: "https://github.com/YashAthawale07/Inventory-Management-System",
    demoUrl: "",
    images: [],
  },
  // {
  //   number: "04",
  //   title: "Suraksha Mantra Web Platform",
  //   subtitle: "A production-ready platform, delivered end to end",
  //   description: "An end-to-end production website delivered during an internship, with a responsive interface and CMS workflows.",
  //   tags: ["Angular", "CMS", "Responsive UI"],
  //   visual: "project-visual-suraksha",
  //   images: [],
  // },
]

const projectsPerPage = 2
const projectPageCount = Math.ceil(projects.length / projectsPerPage)

function ProjectGallery({ project }: { project: Project }) {
  const [activeImage, setActiveImage] = useState(0)
  const images = project.images
  const image = images[activeImage]

  return (
    <div className="project-gallery">
      {image ? (
        <div className="project-visual project-visual-image">
          <img className="project-image" src={image.src} alt={image.alt} />
        </div>
      ) : (
        <div className={`project-visual ${project.visual}`} aria-hidden="true">
          <div className="visual-grid" />
          <div className="visual-window">
            <span /><span /><span />
            <div className="visual-window-content"><i /><i /><i /></div>
          </div>
          <span className="visual-index">PROJECT / {project.number}</span>
        </div>
      )}
      {images.length > 1 && (
        <div className="project-gallery-options" role="group" aria-label={`${project.title} project images`}>
          {images.map((galleryImage, index) => (
            <button
              key={galleryImage.src}
              type="button"
              className={`project-gallery-option${index === activeImage ? " is-active" : ""}`}
              aria-label={`Show ${galleryImage.label}`}
              aria-pressed={index === activeImage}
              onClick={() => setActiveImage(index)}
            >
              <img src={galleryImage.src} alt="" loading="lazy" />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const reduceMotion = useReducedMotion()
  const tiltX = useSpring(0, { stiffness: 180, damping: 24 })
  const tiltY = useSpring(0, { stiffness: 180, damping: 24 })

  function handlePointerMove(event: PointerEvent<HTMLElement>) {
    if (reduceMotion || event.pointerType !== "mouse") return

    const bounds = event.currentTarget.getBoundingClientRect()
    const x = (event.clientX - bounds.left) / bounds.width
    const y = (event.clientY - bounds.top) / bounds.height

    event.currentTarget.style.setProperty("--project-x", `${event.clientX - bounds.left}px`)
    event.currentTarget.style.setProperty("--project-y", `${event.clientY - bounds.top}px`)
    tiltX.set((0.5 - y) * 2)
    tiltY.set((x - 0.5) * 2)
  }

  function resetTilt() {
    tiltX.set(0)
    tiltY.set(0)
  }

  return (
    <motion.article
      className="project-card"
      initial={reduceMotion ? false : { opacity: 0, y: 12, scale: 0.99 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: reduceMotion ? 0.16 : 0.4, delay: reduceMotion ? 0 : index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover={reduceMotion ? undefined : { scale: 1.008 }}
      style={{ rotateX: tiltX, rotateY: tiltY, transformPerspective: 1200 }}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetTilt}
    >
      <ProjectGallery project={project} />
      <div className="project-content">
        <div className="project-title-row">
          <span className="project-number">{project.number}</span>
          <span className="project-title-copy"><h3>{project.title}</h3><p>{project.subtitle}</p></span>
          <ArrowUpRight className="project-heading-arrow" size={17} aria-hidden="true" />
        </div>
        <p className="project-description">{project.description}</p>
        <div className="project-tags" aria-label={`${project.title} technologies`}>
          {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
        </div>
        {/* <div className="project-actions">
          <a className="project-action project-action-primary" href="#contact" aria-label={`Ask about a live demo of ${project.title}`}>
            Live Demo <ArrowUpRight size={14} aria-hidden="true" />
          </a>
          <a className="project-action" href="https://github.com/YashAthawale07" target="_blank" rel="noreferrer" aria-label={`GitHub for ${project.title}`}>
            GitHub
          </a>
        </div> */}
        <div className="project-actions">
  {/* Live Demo Link: Opens demoUrl in a new tab, or falls back to #contact */}
  <a
    className="project-action project-action-primary"
    href={project.demoUrl || "#contact"}
    target={project.demoUrl ? "_blank" : undefined}
    rel={project.demoUrl ? "noreferrer" : undefined}
    aria-label={
      project.demoUrl
        ? `Live demo of ${project.title}`
        : `Ask about a live demo of ${project.title}`
    }
  >
    Live Demo <ArrowRight size={14} aria-hidden="true" />
  </a>

  {/* GitHub Link: Opens specific repo, or falls back to your main profile */}
  <a
    className="project-action"
    href={project.githubUrl || "https://github.com/YashAthawale07"}
    target="_blank"
    rel="noreferrer"
    aria-label={`GitHub for ${project.title}`}
  >
    GitHub
  </a>
</div>

      </div>
    </motion.article>
  )
}

export function ProjectsContact() {
  const [copied, setCopied] = useState(false)
  const [activePage, setActivePage] = useState(0)
  const [slideDirection, setSlideDirection] = useState(1)
  const reduceMotion = useReducedMotion()

  function showProjectPage(nextPage: number) {
    setSlideDirection(nextPage > activePage ? 1 : -1)
    setActivePage((nextPage + projectPageCount) % projectPageCount)
  }

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText("athawaleyashdadarao@gmail.com")
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2200)
    } catch {
      const textarea = document.createElement("textarea")
      textarea.value = "athawaleyashdadarao@gmail.com"
      textarea.setAttribute("readonly", "")
      textarea.style.position = "fixed"
      textarea.style.opacity = "0"
      document.body.append(textarea)
      textarea.select()
      const didCopy = document.execCommand("copy")
      textarea.remove()
      if (didCopy) {
        setCopied(true)
        window.setTimeout(() => setCopied(false), 2200)
      }
    }
  }

  return (
    <>
      <section id="projects" className="projects-section" aria-labelledby="projects-heading">
        <motion.div
          className="projects-intro"
          initial={reduceMotion ? false : { opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="about-kicker"><span /> SELECTED WORK</p>
          <div className="about-intro-row">
            <div>
              <h2 id="projects-heading">Projects built to <span>make an impact.</span></h2>
              <p className="about-subtitle">A selection of thoughtful systems, useful intelligence, and full-stack craft.</p>
            </div>
            <span className="about-coordinate">WORK / 2024—26</span>
          </div>
        </motion.div>

        <motion.div
          className="projects-carousel"
          initial={reduceMotion ? false : { opacity: 0, y: 26, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.22 }}
          transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="projects-orbit" aria-hidden="true"><i /><i /><i /></div>
          <AnimatePresence mode="wait" custom={slideDirection} initial={false}>
            {(() => {
              const visibleProjects = projects.slice(activePage * projectsPerPage, (activePage + 1) * projectsPerPage)
              return (
                <motion.div
                  className="project-grid"
                  key={`project-page-${activePage}`}
                  initial={reduceMotion ? { opacity: 0 } : { opacity: 0, x: slideDirection * 30, y: 12 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  exit={reduceMotion ? { opacity: 0 } : { opacity: 0, x: slideDirection * -30, y: -8 }}
                  transition={{ duration: reduceMotion ? 0.16 : 0.48, ease: [0.22, 1, 0.36, 1] }}
                >
                  {visibleProjects.map((project, index) => (
                    <ProjectCard key={project.number} project={project} index={index} />
                  ))}
                </motion.div>
              )
            })()}
          </AnimatePresence>
          <div className="project-carousel-controls" aria-label="Project page controls">
            <button type="button" className="project-carousel-arrow" onClick={() => showProjectPage(activePage - 1)} aria-label="Show previous two projects"><ArrowLeft size={17} aria-hidden="true" /></button>
            <div className="project-carousel-pagination" aria-label="Choose a project page">
              {Array.from({ length: projectPageCount }, (_, page) => {
                const firstProject = page * projectsPerPage + 1
                const lastProject = Math.min(firstProject + projectsPerPage - 1, projects.length)
                return (
                  <button
                    key={page}
                    type="button"
                    className={`project-carousel-dot${page === activePage ? " is-active" : ""}`}
                    aria-label={`Show projects ${firstProject} to ${lastProject}`}
                    aria-current={page === activePage ? "page" : undefined}
                    onClick={() => showProjectPage(page)}
                  />
                )
              })}
            </div>
            <span className="project-carousel-count" aria-live="polite">{String(activePage * projectsPerPage + 1).padStart(2, "0")}–{String(Math.min((activePage + 1) * projectsPerPage, projects.length)).padStart(2, "0")} <i>/</i> {String(projects.length).padStart(2, "0")}</span>
            <button type="button" className="project-carousel-arrow" onClick={() => showProjectPage(activePage + 1)} aria-label="Show next two projects"><ArrowRight size={17} aria-hidden="true" /></button>
          </div>
        </motion.div>
      </section>

      <footer id="contact" className="contact-section" aria-labelledby="contact-heading">
        <div className="contact-shell">
          <div className="contact-topline">
            <span className="contact-kicker"><i /> OPEN TO THE RIGHT CONVERSATION</span>
            <span className="contact-edition">CONTACT / 01</span>
          </div>

          <div className="contact-main">
            <div className="contact-copy">
              <motion.p
                className="contact-overline"
                initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.55 }}
              >GOOD WORK STARTS WITH A GOOD CONVERSATION</motion.p>
              <motion.h2
                id="contact-heading"
                initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.65, delay: 0.08 }}
              >Let&apos;s make<br />something <span>matter.</span></motion.h2>
              <p className="contact-description">Whether you&apos;re building a team or shaping a product, I bring thoughtful engineering and practical AI to ambitious ideas.</p>

              <motion.div
                className="contact-intents"
                aria-label="Ways to work together"
                initial={reduceMotion ? false : { opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.6, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
              >
                <a className="contact-intent" href="mailto:athawaleyashdadarao@gmail.com?subject=Let%27s%20talk%20about%20a%20role">
                  <span className="contact-intent-icon"><BriefcaseBusiness size={17} strokeWidth={1.6} aria-hidden="true" /></span>
                  <span className="contact-intent-copy"><small>FOR RECRUITERS</small><strong>Discuss a role</strong><em>Full-stack &amp; AI engineering</em></span>
                  <ArrowUpRight className="contact-intent-arrow" size={17} aria-hidden="true" />
                </a>
                <a className="contact-intent" href="mailto:athawaleyashdadarao@gmail.com?subject=Let%27s%20talk%20about%20a%20project">
                  <span className="contact-intent-icon"><Layers3 size={17} strokeWidth={1.6} aria-hidden="true" /></span>
                  <span className="contact-intent-copy"><small>FOR CLIENTS</small><strong>Shape a product</strong><em>From first idea to launch</em></span>
                  <ArrowUpRight className="contact-intent-arrow" size={17} aria-hidden="true" />
                </a>
              </motion.div>

              <div className="contact-direct">
                <span className="contact-direct-label"><Mail size={13} aria-hidden="true" /> DIRECT LINE</span>
                <div className="contact-email-wrap">
                  <a className="contact-email" href="mailto:athawaleyashdadarao@gmail.com">athawaleyashdadarao@gmail.com</a>
                  <button className="copy-email" type="button" onClick={copyEmail} aria-live="polite">
                    {copied ? <Check size={14} aria-hidden="true" /> : <Copy size={14} aria-hidden="true" />}
                    {copied ? "Copied!" : "Copy email"}
                  </button>
                </div>
              </div>
            </div>

            <div className="contact-art" aria-hidden="true">
              <div className="contact-art-glow" />
              <motion.div className="contact-orbit contact-orbit-outer" animate={reduceMotion ? undefined : { rotate: 360 }} transition={{ duration: 48, repeat: Infinity, ease: "linear" }}>
                <span className="contact-orbit-node node-one" /><span className="contact-orbit-node node-two" />
              </motion.div>
              <motion.div className="contact-orbit contact-orbit-middle" animate={reduceMotion ? undefined : { rotate: -360 }} transition={{ duration: 36, repeat: Infinity, ease: "linear" }}>
                <span className="contact-orbit-node node-three" />
              </motion.div>
              <motion.div className="contact-orbit contact-orbit-inner" animate={reduceMotion ? undefined : { rotate: 360 }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }} />
              <motion.div className="contact-core" animate={reduceMotion ? undefined : { y: [0, -7, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}>
                <span className="contact-monogram">YA<span>.</span></span>
                <span className="contact-core-rule" />
                <span className="contact-core-caption">ENGINEERING<br />WHAT&apos;S NEXT</span>
              </motion.div>
              <motion.span className="contact-orbit-label orbit-label-top" animate={reduceMotion ? undefined : { y: [0, -4, 0] }} transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}>INTELLIGENT SYSTEMS</motion.span>
              <motion.span className="contact-orbit-label orbit-label-bottom" animate={reduceMotion ? undefined : { y: [0, 4, 0] }} transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut" }}>BUILT TO SCALE</motion.span>
            </div>
          </div>

          <div className="contact-bottom">
            <span className="contact-location"><i /> BASED IN INDIA <span>·</span> AVAILABLE WORLDWIDE</span>
          <nav className="contact-socials" aria-label="Social links">
            <a href="https://github.com/YashAthawale07" target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={14} aria-hidden="true" /></a>
            <a href="https://www.linkedin.com/in/yash-athawale-64532b260" target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={14} aria-hidden="true" /></a>
            <a href="https://instagram.com/yash.athawale.07" target="_blank" rel="noreferrer">Instagram <ArrowUpRight size={14} aria-hidden="true" /></a>
          </nav>
          </div>
          <div className="contact-legal"><span>© 2026 YASH ATHAWALE</span><a href="#about">BACK TO TOP ↑</a></div>
        </div>
      </footer>
    </>
  )
}
