import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import sofowora from "@/assets/team/sofowora.jpg";
import alamutu from "@/assets/team/alamutu.jpg";
import ajibade from "@/assets/team/ajibade.jpg";
import akinkugbe from "@/assets/team/akinkugbe.webp";
import ebele from "@/assets/team/ebele.jpg";
import osoneye from "@/assets/team/osoneye.jpg";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Leadership Team — Abax Professional Services" },
      { name: "description", content: "Meet the senior professionals leading Abax — partners and consultants across audit, tax, advisory, governance, and HR." },
    ],
  }),
  component: TeamPage,
});

const leaders = [
  {
    name: "Olapeju E. Sofowora",
    creds: "B.Sc, FCA, FCIT",
    role: "Principal Consultant",
    photo: sofowora,
    bio: `Olapeju E. Sofowora is the Principal Consultant of ABAX Professional Services, bringing about 40 years of experience across audit, tax, corporate finance, and professional advisory services.

She began her career at Coopers & Lybrand (now PricewaterhouseCoopers), later held senior roles in the banking sector, and went on to establish and lead multiple professional services practices, including serving as Partner and Managing Partner at Abax-OOSA Professionals for over 17 years.

Her passion for quality professional services led her to establish Binary Consulting Limited, a Human Resources Consulting firm specialising in recruitment, outsourcing and training for clients across different industries.

Olapeju is a Fellow of the Institute of Chartered Accountants of Nigeria (ICAN) and the Chartered Institute of Taxation of Nigeria (CITN), a Certified Information Systems Auditor (CISA), and holds a degree in Statistics from the University of Ilorin.

She has served on corporate and institutional boards, including First City Monument Bank Group, Royal Trust Assurance Limited (Merged with Crusader Insurance), Olashore International School Association, the Educational Committee of the Chartered Institute of Taxation and as an Executive Committee Member of the Money Market Association of Nigeria, and remains active in governance, compliance, and professional development initiatives.`,
  },
  {
    name: "Ayo Alamutu",
    creds: "B.Sc, FCA, CISA, CIRM, ORE",
    role: "Senior Consultant — Governance & Risk",
    photo: alamutu,
    bio: `Ms. Alamutu is a Governance, Risk, Audit, Assurance, and Compliance Executive with over 30 years of experience across the UK and Nigeria.

She advises Boards and senior management on enterprise risk, operational resilience, business continuity, and internal audit, supporting organisations to strengthen performance, manage disruption, and preserve value across sectors including banking, insurance, manufacturing, investment, and fintech.

She is a Fellow of the Institute of Chartered Accountants of Nigeria (FICAN), a Certified Member of the Institute of Risk Management (CIRM), and holds a Certificate in Risk Governance from the DCRO Institute.

She currently serves as Vice Chair of the IRM Nigeria Regional Group and is also an Information Systems Auditor, Project Management Professional, and a Board member of the Institute of Internal Auditors.`,
  },
  {
    name: "Babafunke Ajibade",
    creds: "B.Sc, FCA, CPFA",
    role: "Senior Consultant — Audit & Assurance",
    photo: ajibade,
    bio: `A multi-skilled Governance, Financial Accounts, Risk, Audit, Assurance, and Compliance Executive across Private, Government and Third party (Charity) Sectors with over three decades of progressive experience across Nigeria and the United Kingdom.

Her core strength lies in quality control on Assurance Audits, advising Boards, Trustees and Senior Management on enterprise risk, strategy, compliance, business continuity, and internal audit practice.

She helps organisations strengthen performance, ensure compliance with accounting and auditing standards, sustain competitive advantage, and respond proactively to disruption.

She has worked on audits ranging from Nuclear Decommissioning Agencies, HMRC, government departments, and international charity audits, including reviews of established audit and compliance systems.

She specialises in assessment of compliance with relevant international standards and is a member of the Institute of Chartered Accountants of Nigeria and a Certified member of the Chartered Institute of Public Finance Accountants (CIPFA).`,
  },
  {
    name: "Fusi Akinkugbe",
    creds: "B.Sc, FCA",
    role: "Senior Consultant — Financial Services",
    photo: akinkugbe,
    bio: `Mr. Fusi Akinkugbe is a seasoned finance and assurance professional with nearly four decades of experience spanning professional practice, corporate leadership, consulting, and the public sector.

He holds a degree in Economics and is a Chartered Accountant and Fellow of the Institute of Chartered Accountants of Nigeria (FCA).

He has held senior executive roles including Treasury Controller at DHL International Nigeria Ltd and pioneer Managing Director/CEO of Chrysalis Ltd, a technology services company jointly owned by Accenture and two financial institutions.

Mr. Akinkugbe has led high-profile audit, forensic, and advisory engagements, with strong expertise in governance, internal controls, and organisational effectiveness.`,
  },
  {
    name: "Anthony Ebele",
    creds: "HND, ACTI",
    role: "Head, Tax Management & Advisory",
    photo: ebele,
    bio: `Anthony Ebele is a results-driven tax professional with strong expertise in tax compliance, advisory, and regulatory reporting. Experienced in providing end-to-end tax solutions, including corporate and personal income tax, VAT, withholding tax, Capital Gain Tax and tax audits for both Federal and State Revenue Services.

He is skilled in interpreting tax laws, identifying tax-saving opportunities, and ensuring full compliance with statutory requirements.

Anthony is also known for delivering practical, client-focused advice, maintaining strong relationships with tax authorities, and supporting businesses in managing tax risks efficiently while aligning with evolving regulatory frameworks.`,
  },
  {
    name: "Dare Osoneye",
    creds: "BSc, MSc, SHRM-CP, ACIPM",
    role: "Head, Human Resources Consulting",
    photo: osoneye,
    bio: `Dare Osoneye is a dedicated Human Resource professional with years of experience in talent acquisition, employee relations, performance management and organisational development. As an HR generalist and an HR Consultant, she is skilled at implementing HR strategies that enhance productivity, retention and compliance.

She holds an M.Sc. in Employment Relations and HR Management and a B.Sc. in Economics, both from the University of Lagos. She is a certified and licensed HR consultant with her CIPM HR practitioners license, a member of the Society for Human Resource Management (SHRM-CP) and an associate of the Chartered Institute of Personnel Management (ACIPM).

She is passionate about driving corporate efficiency through strategic HR initiatives.`,
  },
];

function TeamPage() {
  return (
    <>
      <section className="pt-44 pb-20 lg:pb-28 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-10 bg-gold" />
            <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Leadership excellence</span>
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl leading-[1.02] max-w-4xl"
          >
            Senior-led, <span className="italic text-gradient-gold">always.</span>
          </motion.h1>
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            Every engagement is led personally by a senior consultant bringing decades of hands-on expertise and accountability to the work we deliver.
          </p>
        </div>
      </section>

      <section className="pb-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 space-y-0">
          {leaders.map((l, i) => (
            <motion.article
              key={l.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`grid md:grid-cols-12 gap-10 lg:gap-16 py-16 border-b border-border ${i === 0 ? "border-t" : ""}`}
            >
              <div className="md:col-span-3">
                <div className="aspect-[4/5] overflow-hidden bg-muted">
                  <img
                    src={l.photo}
                    alt={l.name}
                    className="w-full h-full object-cover object-top"
                    style={{ filter: "grayscale(100%)" }}
                  />
                </div>
              </div>
              <div className="md:col-span-9">
                <div className="text-xs uppercase tracking-[0.3em] text-gold mb-2">{l.role}</div>
                <h3 className="font-display text-3xl lg:text-4xl">{l.name}</h3>
                <div className="text-sm text-muted-foreground mt-1 mb-6">{l.creds}</div>
                <div className="space-y-4">
                  {l.bio.trim().split("\n\n").map((para, j) => (
                    <p key={j} className="text-muted-foreground leading-relaxed">{para}</p>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="py-24 bg-[#1B3FA0] text-white relative overflow-hidden">
        <div className="absolute -top-32 -right-32 w-[480px] h-[480px] rounded-full bg-[#F5C518]/15 blur-3xl" />
        <div className="relative max-w-5xl mx-auto px-6 lg:px-10 text-center">
          <h2 className="font-display text-4xl md:text-5xl">
            Work with a <span className="italic text-[#F5C518]">senior</span> team.
          </h2>
          <p className="mt-6 text-white/75 text-lg max-w-2xl mx-auto">
            Every engagement is led by a senior consultant. Tell us about your business and we'll match you with the right partner.
          </p>
          <Link to="/contact" className="mt-10 inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-[#F5C518] text-[#1B3FA0] text-sm font-semibold hover:shadow-gold transition-all">
            Get in touch <span aria-hidden>→</span>
          </Link>
        </div>
      </section>
    </>
  );
}