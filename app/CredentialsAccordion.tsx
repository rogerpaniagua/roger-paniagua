'use client'

import { useState } from 'react'

const creds = [
  { by: 'Universidad Don Bosco · 2011–2016', name: 'Licenciatura en Diseño Gráfico', skills: 'Foundation of visual thinking, design theory, and creative craft', href: null },
  { by: 'Google · Jan 2024', name: 'Google Project Management Certificate', skills: 'Full program + Capstone: Applying PM in the Real World', href: 'https://www.coursera.org/account/accomplishments/specialization/BSVBM6YR9V2L' },
  { by: 'Google · Dec 2023', name: 'Agile Project Management', skills: 'Scrum · Coaching · Agile Management · Influencing', href: 'https://www.coursera.org/account/accomplishments/verify/NRHJW7FSTL44' },
  { by: 'Google · Dec 2023', name: 'Project Execution: Running the Project', skills: 'Quality Management · Risk Management · Strategic Thinking', href: 'https://www.coursera.org/account/accomplishments/verify/VDHDW54BLMTM' },
  { by: 'Google · Oct 2023', name: 'Project Planning: Putting It All Together', skills: 'Project Planning · Risk Management · Procurement', href: 'https://www.coursera.org/account/accomplishments/verify/BLMJMWG7WCVJ' },
  { by: 'Google · Sep 2023', name: 'Project Initiation: Starting a Successful Project', skills: 'Stakeholder Management · Business Writing · Project Management', href: 'https://www.coursera.org/account/accomplishments/verify/V3YSQRM9HA27' },
  { by: 'Google · Jun 2023', name: 'Foundations of Project Management', skills: 'Stakeholder Management · Business Writing · Project Charter', href: 'https://www.coursera.org/account/accomplishments/verify/D9JFUWTKPPLN' },
  { by: 'Google · Jan 2024', name: 'Capstone: Applying PM in the Real World', skills: 'Stakeholder Management · Quality Management · Problem Solving', href: 'https://www.coursera.org/account/accomplishments/verify/L6LX8UD3KXDX' },
]

export default function CredentialsAccordion() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <div className="creds-accordion">
      {creds.map((c, i) => (
        <div key={i} className="creds-acc-item">
          <button className="creds-acc-trigger" onClick={() => setOpen(open === i ? null : i)}>
            <span className="creds-acc-by">{c.by}</span>
            <span className="creds-acc-chevron">{open === i ? '−' : '+'}</span>
          </button>
          {open === i && (
            <div className="creds-acc-body">
              {c.href ? (
                <a href={c.href} target="_blank" rel="noopener noreferrer" className="creds-acc-name">{c.name}</a>
              ) : (
                <div className="creds-acc-name">{c.name}</div>
              )}
              <div className="creds-acc-skills">{c.skills}</div>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
