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
    bio: `Olapeju E. Sofowora is the Principal Consultant of ABAX Professional Services, with over 40 years of experience across audit, tax, corporate finance, and professional advisory services.\n\nShe began her career at Coopers & Lybrand (now PricewaterhouseCoopers), later held senior roles in the banking sector, and went on to establish and lead multiple successful professional services practices.\n\nShe is a Fellow of the Institute of Chartered Accountants of Nigeria and the Chartered Institute of Taxation of Nigeria, and remains active in governance, compliance, and professional development.`,
    photo: sofowora,
  },
  {
    name: "Ayo Alamutu",
    role: "Senior Consultant",
    title: "Governance & Risk",
    creds: "B.Sc, FCA, CISA, CIRM",
    bio: `Ayo Alamutu is a governance, risk, audit, and compliance professional with more than 30 years of experience spanning Nigeria and the United Kingdom.\n\nHe currently serves as Vice Chair of the Institute of Risk Management Nigeria Regional Group and has held several leadership positions within the internal audit and risk management profession.\n\nHis work focuses on helping organisations build resilient governance structures, strengthen risk frameworks, and maintain robust regulatory compliance.`,
    photo: alamutu,
  },
  {
    name: "Babafunke Ajibade",
    role: "Senior Consultant",
    title: "Audit & Assurance",
    creds: "B.Sc, FCA, CPFA",
    bio: `Babafunke Ajibade has over three decades of experience in audit and assurance across the private, public, and third sectors in both Nigeria and the United Kingdom.\n\nShe specialises in quality assurance reviews, audit methodology, and compliance with international auditing and financial reporting standards.\n\nHer work helps organisations strengthen internal controls, improve accountability, and uphold the highest standards of financial integrity.`,
    photo: ajibade,
  },
  {
    name: "Fusi Akinkugbe",
    role: "Senior Consultant",
    title: "Financial Services",
    creds: "B.Sc, FCA",
    bio: `Fusi Akinkugbe brings nearly four decades of experience across professional practice, corporate leadership, and public sector engagements in Nigeria.\n\nHe is the pioneer Managing Director and CEO of Chrysalis Limited and has led numerous governance, forensic, and financial advisory assignments across diverse industries.\n\nHis counsel enables organisations to make sound financial decisions, improve operational performance, and achieve sustainable long-term growth.`,
    photo: akinkugbe,
  },
  {
    name: "Anthony Ebele",
    role: "Head",
    title: "Tax Management & Advisory",
    creds: "HND, ACTI",
    bio: `Anthony Ebele leads the firm's Tax Management and Advisory practice with extensive experience in corporate taxation, VAT administration, and regulatory compliance.\n\nHe provides strategic guidance on tax planning, transfer pricing, withholding tax management, and dispute resolution with relevant tax authorities.\n\nHis expertise helps clients remain fully compliant with applicable tax laws while optimising tax efficiency and minimising operational risk.`,
    photo: ebele,
  },
  {
    name: "Dare Osoneye",
    role: "Head",
    title: "Human Resources Consulting",
    creds: "BSc, MSc, SHRM-CP, ACIPM",
    bio: `Dare Osoneye is a Human Resources professional with extensive experience in talent acquisition, employee relations, performance management, and organisational development.\n\nShe designs and implements HR strategies that align people practices with business objectives, enhancing productivity, workforce effectiveness, and compliance.\n\nShe is a certified HR consultant, a member of the Society for Human Resource Management (SHRM-CP), and an associate of the Chartered Institute of Personnel Management (ACIPM).`,
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

                {/* Bio */}
                <div className="text-sm leading-relaxed text-muted-foreground text-left">
                  {m.bio.split("\n\n").map((para, idx, arr) => (
                    <p key={idx} className={idx !== arr.length - 1 ? "mb-4" : ""}>
                      {para}
                    </p>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}