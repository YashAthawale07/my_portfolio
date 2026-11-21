"use client"

import { motion, useReducedMotion } from "framer-motion"
import { ArrowUpRight, BriefcaseBusiness, Code2, GraduationCap, Sparkles } from "lucide-react"
import { useRef, type PointerEvent, type ReactNode } from "react"

const groups =[
  { title: "Languages", items: ["Java", "Python", "C", "C++", "SQL"] },
   { title: "Databases & Cloud", items: ["PostgreSQL", "MongoDB", "MySQL","pgvector", "AWS"] },
  { title: "Full-stack & Security", items: ["Spring Boot","React", "REST APIs", "Spring Security", "JWT", "Node.js"] },
  { title: "AI & GenAI", items: ["Spring AI", "Generative AI", "RAG", "LLMs", "Embeddings", "NLP"] },
  { title: "Core Concepts", items: ["Data Structures & Algorithms", "OOP", "DBMS", "System Design (Basics)"] },
  { title: "Tools", items: ["Git", "GitHub", "Docker", "Postman"] },

]

// [
//   { 
//     title: "Languages", 
//     items: ["Java", "Python", "TypeScript", "C++", "C", "SQL"] 
//   },
//   { 
//     title: "Full-Stack & AI", 
//     items: [
//       "Spring Boot", "React", "Node.js", "REST APIs", 
//       "Spring Security", "JWT",
//       "Spring AI", "LLMs", "RAG", "Embeddings", "Generative AI"
//     ] 
//   },
//   { 
//     title: "Databases & Cloud", 
//     items: [
//       "PostgreSQL", "MySQL", "MongoDB", "pgvector", 
//       "AWS", "Docker",  "CI/CD"
//     ] 
//   },
//   { 
//     title: "Core Concepts & Tools", 
//     items: [
//       "Data Structures & Algorithms", "System Design (Basics)", 
//       "OOP", "DBMS", "Git", "GitHub", "Postman"
//     ] 
//   }
// ]

// sort this very properly in minimum groups  title: "Languages", items: ["Java", "Python", "C", "C++", "SQL"] },
//   { title: "Databases", items: ["PostgreSQL", "MongoDB", "MySQL","pgvector"] },
//   { title: "Backend & Security", items: ["Spring Boot", "REST APIs", "Spring Security", "JWT", "Node.js"] },
//   { title: "AI & GenAI", items: ["Spring AI", "Generative AI", "RAG", "LLMs", "Embeddings", "NLP"] },
//   { title: "Frontend", items: ["React", "TypeScript", "Tailwind CSS", "Next.js", "HTML/CSS"] },
//   { title: "DevOps & Cloud", items: ["Docker", "Kubernetes", "AWS", "CI/CD", "Git"] },
//   { title: "Core Concepts & Tools", items: ["Data Structures & Algorithms", "OOP", "DBMS", "System Design (Basics)", "Git", "GitHub", "Docker", "Postman"] },


const certifications = [
  { title: "Programming in Java", issuer: "NPTEL · IIT Kharagpur", mark: "01", href: "https://drive.google.com/file/d/16QaEwRJX9U-57POtHT-5mnde60q7apTT/view?usp=drive_link" },
  { title: "Java", issuer: "HackerRank", mark: "02", href: "https://www.hackerrank.com/certificates/iframe/42e09cc8a975" },
  { title: "Python ", issuer: "Simplilearn", mark: "03", href: "https://drive.google.com/file/d/1NcvzVk4ssDhdDaay_Cy_xrBrIYisxccB/view?usp=sharing" },
  { title: "SQL(Advanced) ", issuer: "HackerRank", mark: "04", href: "https://www.hackerrank.com/certificates/iframe/510eb27bd697" },

]

function SpotlightCard({
  children,
  className = "",
  id,
  label,
  delay = 0,
}: {
  children: ReactNode
  className?: string
  id?: string
  label: string
  delay?: number
}) {
  const cardRef = useRef<HTMLElement>(null)
  const reduceMotion = useReducedMotion()

  function handlePointerMove(event: PointerEvent<HTMLElement>) {
    const bounds = event.currentTarget.getBoundingClientRect()
    event.currentTarget.style.setProperty("--spot-x", `${event.clientX - bounds.left}px`)
    event.currentTarget.style.setProperty("--spot-y", `${event.clientY - bounds.top}px`)
  }

  return (
    <motion.article
      ref={cardRef}
      id={id}
      aria-label={label}
      className={`bento-card ${className}`}
      onPointerMove={handlePointerMove}
      initial={reduceMotion ? false : { opacity: 0, y: 26, scale: 0.985 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.62, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={reduceMotion ? undefined : { y: -5, scale: 1.008 }}
    >
      {children}
    </motion.article>
  )
}

function CardHeading({
  index,
  icon,
  title,
}: {
  index: string
  icon: ReactNode
  title: string
}) {
  return (
    <div className="bento-card-heading">
      <span className="bento-icon" aria-hidden="true">{icon}</span>
      <div>
        <span className="bento-index">{index}</span>
        <h3>{title}</h3>
      </div>
    </div>
  )
}

export function AboutBento() {
  const reduceMotion = useReducedMotion()

  return (
    <motion.section
        id="about"
        className="about-section"
        aria-labelledby="about-heading"
        initial={reduceMotion ? false : { opacity: 0, y: 46, scale: 0.97 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.18 }}
        transition={{ duration: 0.76, ease: [0.22, 1, 0.36, 1] }}
      >
      <div className="about-intro">
        <p className="about-kicker"><span /> THE DETAILS BEHIND THE BUILD</p>
        <div className="about-intro-row">
          <div>
            <h2 id="about-heading">A little about <span>how I work.</span></h2>
            <p className="about-subtitle">I&apos;m a Computer Engineering graduate who enjoys turning ambitious ideas into dependable software—especially where backend systems, applied AI, and thoughtful product design meet.</p>
          </div>
          <span className="about-coordinate">PROFILE / 2025—26</span>
        </div>
      </div>

      <div className="bento-grid">
        <SpotlightCard className="bento-about" label="About and experience" delay={0.02}>
          <div className="about-card-image" aria-hidden="true" />
          <div className="about-card-shade" aria-hidden="true" />
          <div className="about-card-content">
            <CardHeading index="01 / EXPERIENCE" icon={<BriefcaseBusiness size={17} strokeWidth={1.6} />} title="About & Experience" />
            <div className="experience-copy">
              <span className="experience-period">MAR 2025 — JUN 2025</span>
              <h4>Software Developer Intern</h4>
              <p className="experience-company">MSquare Software Systems</p>
              <p className="experience-description">
                {/* Delivered the <strong>Suraksha Mantra</strong> website end-to-end and built Angular admin modules to make essential workflows easier to manage. */}
                  Designed and deployed <strong>Suraksha Mantra:</strong> the end-to-end website independently, launching 2+ production-ready products during the internship
              </p>
              <p className="experience-description">
               <strong>Web Development: </strong> Built frontend and admin modules for MSquare Software and Padmashali Samaj using Angular, creating reusable components and CMS functionalities.
              </p>
            </div>
            <div className="experience-footer">
              <span className="experience-status"><i /> END-TO-END OWNERSHIP</span>
              <ArrowUpRight size={16} aria-hidden="true" />
            </div>
          </div>
        </SpotlightCard>

        <SpotlightCard id="skills" className="bento-skills" label="Core tech stack" delay={0.1}>
          <CardHeading index="02 / TOOLKIT" icon={<Code2 size={17} strokeWidth={1.6} />} title="Core Tech Stack" />
          <div className="skill-groups">
            {groups.map((group, groupIndex) => (
              <div className="skill-group" key={group.title}>
                <span className="skill-group-label"><i>0{groupIndex + 1}</i>{group.title}</span>
                <div className="skill-pills">
                  {group.items.map((item) => <span className="skill-pill" key={item}>{item}</span>)}
                </div>
              </div>
            ))}
          </div>
        </SpotlightCard>

        <SpotlightCard className="bento-education" label="Education" delay={0.18}>
          <CardHeading index="03 / EDUCATION" icon={<GraduationCap size={18} strokeWidth={1.6} />} title="Education" />
          <div className="education-copy">
            <span className="education-period">2022 — 2026</span>
            <h4>BE in Computer Engineering</h4>
            <p>SSBT’s College of Engineering and Technology</p>
          </div>
          <div className="cgpa-score"><strong>7.86</strong><span>/ 10 CGPA</span><div className="cgpa-track"><i /></div></div>
        </SpotlightCard>

        <SpotlightCard className="bento-certifications" label="Certifications" delay={0.26}>
          <CardHeading index="04 / LEARNING" icon={<Sparkles size={17} strokeWidth={1.6} />} title="Certifications" />
          <ul className="certification-list">
            {certifications.map((cert) => (
              <li key={cert.mark}>
                <a className="certification-link" href={cert.href} target="_blank" rel="noreferrer" aria-label={`Placeholder verification link for ${cert.title} from ${cert.issuer}`}>
                  <span className="certification-mark">{cert.mark}</span>
                  <span className="certification-copy"><strong>{cert.title}</strong><small>{cert.issuer}</small></span>
                  <ArrowUpRight className="certification-arrow" size={14} aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </SpotlightCard>
      </div>
    </motion.section>
  )
}
