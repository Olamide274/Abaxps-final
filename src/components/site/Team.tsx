import { motion } from "framer-motion";
import sofowora from "@/assets/team/sofowora.jpg";
import alamutu from "@/assets/team/alamutu.jpg";
import ajibade from "@/assets/team/ajibade.jpg";
import akinkugbe from "@/assets/team/akinkugbe.webp";
import ebele from "@/assets/team/ebele.jpg";
import osoneye from "@/assets/team/osoneye.jpg";

const team = [
  {
    name: "Olapeju E. Sofowora",
    role: "Principal Consultant",
    title: "Principal Consultant",
    creds: "B.Sc, FCA, FCIT",
    bio: `Olapeju E. Sofowora is the Principal Consultant of ABAX Professional Services, bringing over 40 years of experience across audit, tax, corporate finance, and professional advisory services.

She began her career at Coopers & Lybrand (now PricewaterhouseCoopers) and later held senior leadership positions within the banking industry before establishing and leading several successful professional service practices.

Her extensive expertise, strategic leadership, and commitment to excellence continue to help organisations strengthen governance, improve performance, and achieve sustainable growth.`,
    photo: sofowora,
  },
  {
    name: "Ayo Alamutu",
    role: "Senior Consultant",
    title: "Governance & Risk",
    creds: "B.Sc, FCA, CISA, CIRM",
    bio: `Ayo Alamutu is a governance, risk, audit, and compliance professional with more than 30 years of experience spanning both Nigeria and the United Kingdom.

He currently serves as Vice Chair of the Institute of Risk Management Nigeria Regional Group and has held several leadership positions within the internal audit and risk management profession.

His work focuses on helping organisations build resilient governance structures, strengthen risk management frameworks, and improve regulatory compliance.`,
    photo: alamutu,
  },
  {
    name: "Babafunke Ajibade",
    role: "Senior Consultant",
    title: "Audit & Assurance",
    creds: "B.Sc, FCA, CPFA",
    bio: `Babafunke Ajibade has over three decades of experience in audit and assurance across the private, public, and third sectors in both Nigeria and the United Kingdom.

She specialises in quality assurance reviews, audit methodology, and compliance with international auditing and reporting standards.

Her expertise helps organisations improve accountability, strengthen internal controls, and maintain high standards of financial reporting.`,
    photo: ajibade,
  },
  {
    name: "Fusi Akinkugbe",
    role: "Senior Consultant",
    title: "Financial Services",
    creds: "B.Sc, FCA",
    bio: `Fusi Akinkugbe brings nearly four decades of experience spanning professional practice, corporate leadership, and public sector engagements.

He is the pioneer Managing Director and Chief Executive Officer of Chrysalis Limited and has led numerous governance, forensic, and financial advisory assignments.

His experience enables organisations to make informed decisions, improve performance, and achieve sustainable business growth.`,
    photo: akinkugbe,
  },
  {
    name: "Anthony Ebele",
    role: "Head",
    title: "Tax Management & Advisory",
    creds: "HND, ACTI",
    bio: `Anthony Ebele leads the firm's Tax Management and Advisory practice with extensive experience across corporate taxation and regulatory compliance.

He provides strategic guidance on tax planning, transfer pricing, VAT administration, withholding tax management, and dispute resolution.

His expertise helps clients remain compliant while optimising tax efficiency and reducing operational risk.`,
    photo: ebele,
  },
  {
    name: "Dare Osoneye",
    role: "Head",
    title: "Human Resources Consulting",
    creds: "BSc, MSc, SHRM-CP, ACIPM",
    bio: `Dare Osoneye is a dedicated Human Resources professional with extensive experience in talent acquisition, employee relations, performance management, and organisational development.

He designs and implements HR strategies that align people practices with business objectives while enhancing productivity and workforce effectiveness.

His passion for strategic HR consulting enables organisations to build high-performing teams and sustainable people-management frameworks.`,
    photo: osoneye,
  },
];
export function Team() {
  return (
    <section id="team" className="relative py-28 lg:py-40 bg-[#F7F8FC]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid lg:grid-cols-12 gap-10 mb-20"
        >
          <div className="lg:col-span-6">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-gold" />
              <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                Our team
              </span>
            </div>

            <h2 className="font-display text-4xl md:text-6xl leading-[1.05]">
              Senior practitioners.{" "}
              <span className="italic text-gradient-gold">Partner-led</span>{" "}
              engagements.
            </h2>
          </div>

          <div className="lg:col-span-5 lg:col-start-8 self-end">
            <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
              Every assignment is led personally by a senior consultant bringing decades of hands-on
              expertise and accountability to the work we deliver.
            </p>
          </div>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.12 }}
              className="group relative bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden border border-[#E8EDF8]"
            >
              <div className="h-1.5 w-full bg-gradient-to-r from-[#1B3FA0] via-[#F5C518] to-[#1B3FA0]" />

              <div className="p-8 flex flex-col items-center text-center">

                {/* Image */}
                <div className="relative mb-6">
                  <div className="w-32 h-32 rounded-full p-1 bg-gradient-to-br from-[#1B3FA0] via-[#F5C518] to-[#1B3FA0] shadow-lg">
                    <div className="w-full h-full rounded-full overflow-hidden bg-[#E8EDF8]">
                      <img
                        src={m.photo}
                        alt={m.name}
                        className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                  </div>
                  <span className="absolute bottom-1 right-1 w-5 h-5 rounded-full bg-[#F5C518] border-2 border-white" />
                </div>

                {/* Name */}
                <h3 className="font-display text-lg lg:text-xl font-semibold text-[#0D1B3E] mb-1">
                  {m.name}
                </h3>

                {/* Role */}
                <div className="inline-flex items-center bg-[#EEF2FB] text-[#1B3FA0] text-[11px] font-semibold uppercase tracking-[0.18em] px-3 py-1 rounded-full mb-1">
                  {m.role}
                </div>

                {/* Title */}
                <p className="text-[#F5C518] text-xs font-bold uppercase tracking-[0.2em] mb-3">
                  {m.title}
                </p>

                {/* Credentials */}
                <p className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground mb-4">
                  {m.creds}
                </p>

                {/* Divider */}
                <div className="w-10 h-px bg-[#F5C518] mb-4" />

                {/* BIO (Clean Paragraph Rendering) */}
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {m.bio.split("\n\n").map((para, idx) => (
                    <span key={idx} className="block mb-3 last:mb-0">
                      {para}
                    </span>
                  ))}
                </p>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}