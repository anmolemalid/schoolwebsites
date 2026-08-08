import Link from "next/link";
import type { Metadata } from "next";
import { t } from "../lib/i18n";

export const metadata: Metadata = {
  title: t.meta.pages.curriculum.title,
  description: t.meta.pages.curriculum.description,
};

const learningAreas = [
  {
    icon: "🧠",
    title: "Cognitive Development",
    desc: "Building thinking, observation, problem-solving, and early concepts through hands-on activities.",
    badgeColor: "bg-warning-subtle text-dark border-warning",
    accentBorder: "#ffd200",
  },
  {
    icon: "🗣️",
    title: "Language & Literacy",
    desc: "Developing communication, vocabulary, listening, phonics, and early literacy.",
    badgeColor: "bg-primary-subtle text-primary border-primary",
    accentBorder: "#004a90",
  },
  {
    icon: "💛",
    title: "Social & Emotional",
    desc: "Confidence, sharing, empathy, self-expression, and positive relationship building.",
    badgeColor: "bg-danger-subtle text-danger border-danger",
    accentBorder: "#ef4444",
  },
  {
    icon: "🏃",
    title: "Physical Development",
    desc: "Movement, coordination, motor skills, outdoor play, and active exercises.",
    badgeColor: "bg-success-subtle text-success border-success",
    accentBorder: "#22c55e",
  },
  {
    icon: "🎨",
    title: "Creative Development",
    desc: "Art, music, imagination, craftwork, and hands-on creative self-expression.",
    badgeColor: "bg-info-subtle text-info border-info",
    accentBorder: "#06b6d4",
  },
  {
    icon: "🌱",
    title: "Life Skills & Values",
    desc: "Independence, responsibility, good habits, hygiene, and positive moral values.",
    badgeColor: "bg-secondary-subtle text-secondary border-secondary",
    accentBorder: "#8b5cf6",
  },
];

const classPrograms = [
  {
    level: "Play Group & Nursery",
    age: "2 - 3 Years",
    desc: "Sensory exploration, motor skills discovery, wooden puzzle blocks, and gentle English-Hindi speech expression in a warm home-like room.",
    focus: ["Sensory Development", "Language Expression", "Motor Skills & Play"],
  },
  {
    level: "LKG & UKG (Kindergarten)",
    age: "4 - 5 Years",
    desc: "Pre-primary readiness focusing on English phonics, early writing readiness, basic math counting, and CBSE formal class preparation.",
    focus: ["Phonics & Writing Readiness", "Basic Counting & Shapes", "Group Discipline"],
  },
  {
    level: "Junior Primary (Classes 1 - 2)",
    age: "6 - 7 Years",
    desc: "Transition to structured academic periods. Independent reading, basic spellings, environmental science (EVS), elementary math, and basic computer exposure.",
    focus: ["Bilingual Reading Confidently", "Environmental Science (EVS)", "Computer Basics"],
  },
  {
    level: "Senior Primary (Classes 3 - 5)",
    age: "8 - 10 Years",
    desc: "Nurturing logic, critical thinking, science experiments, social studies, IT keyboard skills, coding logic, and local sports events.",
    focus: ["Logic & Critical Thinking", "Science & Computer IT Lab", "Sports & Public Speaking"],
  },
];

export default function CurriculumPage() {
  return (
    <div className="curriculum-page">
      {/* Royal Blue Hero Banner */}
      <section className="page-blue-banner">
        <div className="container position-relative z-2">
          <div className="row align-items-center justify-content-between g-4">
            <div className="col-lg-8 text-center text-lg-start">
              {/* Breadcrumb */}
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb mb-2" style={{ fontSize: "0.88rem" }}>
                  <li className="breadcrumb-item">
                    <Link href="/" className="text-white text-opacity-75 text-decoration-none">
                      Home
                    </Link>
                  </li>
                  <li className="breadcrumb-item active text-warning fw-bold" aria-current="page">
                    Hello Kids Curriculum
                  </li>
                </ol>
              </nav>

              {/* Title & Kicker */}
              <div className="page-blue-banner-kicker">A Child-Friendly Early Learning Approach</div>
              <h1 className="page-blue-banner-title">Hello Kids Curriculum</h1>
              <p className="page-blue-banner-subtitle mb-3">
                Play Group to Class V &nbsp;|&nbsp; Co-Education &nbsp;|&nbsp; English Medium &nbsp;|&nbsp; Govt. Recognized
              </p>

              <div className="d-flex flex-wrap gap-2 justify-content-center justify-content-lg-start">
                <span className="badge bg-warning text-dark fw-bold px-3 py-2 rounded-pill">
                  ⭐ A Proud Hello Kids Franchise
                </span>
                <span className="badge bg-white text-primary fw-bold px-3 py-2 rounded-pill">
                  📍 New Vijay Nagar, Ghaziabad
                </span>
              </div>
            </div>

            <div className="col-lg-4 text-center text-lg-end">
              <div className="p-3 rounded-4 bg-white bg-opacity-10 border border-white border-opacity-25 shadow-sm text-center text-white d-inline-block w-100" style={{ maxWidth: "320px" }}>
                <div className="fw-bold fs-5 text-warning mb-1">Interactive Learning</div>
                <div className="small mb-3 text-white text-opacity-90">Building curious, confident &amp; joyful learners every day.</div>
                <Link href="/contact" className="btn btn-warning w-100 fw-bold rounded-pill text-dark text-uppercase d-inline-flex align-items-center justify-content-center gap-2" style={{ letterSpacing: "0.5px" }}>
                  <span>Talk to Us</span>
                  <span className="rounded-circle d-inline-flex align-items-center justify-content-center text-dark" style={{ width: "20px", height: "20px", backgroundColor: "rgba(0,0,0,0.1)", flexShrink: 0 }}>
                    <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Whole-Child Development Section */}
      <section className="py-5" style={{ backgroundColor: "#ffffff" }}>
        <div className="container">
          <div className="text-center mb-5">
            <span className="badge bg-primary-subtle text-primary border border-primary px-3 py-1 rounded-pill fw-bold small mb-2">
              LEARNING AREAS
            </span>
            <h2 className="display-5 fw-bold text-dark mb-3" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Whole-Child Development
            </h2>
            <p className="text-muted col-md-8 mx-auto fs-5">
              The curriculum page explains the franchise curriculum using official Hello Kids material and the school&apos;s actual implementation across key learning areas.
            </p>
          </div>

          {/* 6 Whole-Child Learning Area Cards */}
          <div className="row g-4">
            {learningAreas.map((area, idx) => (
              <div key={idx} className="col-md-6 col-lg-4">
                <div
                  className="p-4 bg-white rounded-4 border shadow-sm h-100 d-flex flex-column justify-content-between transition-all"
                  style={{
                    borderTop: `4px solid ${area.accentBorder}`,
                    transition: "transform 0.25s ease, box-shadow 0.25s ease",
                  }}
                >
                  <div>
                    <div className="fs-1 mb-3">{area.icon}</div>
                    <h3 className="fw-bold fs-5 text-dark mb-2" style={{ fontFamily: "'Poppins', sans-serif" }}>
                      {area.title}
                    </h3>
                    <p className="text-muted small mb-0" style={{ lineHeight: 1.6 }}>
                      {area.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Age-Wise Learning Levels Section */}
      <section className="py-5 border-top border-bottom" style={{ backgroundColor: "#fff9e8" }}>
        <div className="container">
          <div className="text-center mb-5">
            <span className="badge bg-warning-subtle text-dark border border-warning px-3 py-1 rounded-pill fw-bold small mb-2">
              CLASS STRUCTURE
            </span>
            <h2 className="display-5 fw-bold text-dark mb-3" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Age-Wise Learning Levels
            </h2>
            <p className="text-muted col-md-7 mx-auto">
              From Play Group to Class V, every level is structured to guide your child step-by-step into formal CBSE education.
            </p>
          </div>

          <div className="row g-4">
            {classPrograms.map((prog, idx) => (
              <div key={idx} className="col-md-6">
                <div className="p-4 bg-white rounded-4 border shadow-sm h-100">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <h3 className="fw-bold mb-0 text-primary fs-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
                      {prog.level}
                    </h3>
                    <span className="badge bg-warning text-dark px-3 py-2 rounded-pill fw-bold">{prog.age}</span>
                  </div>
                  <p className="text-muted mb-4" style={{ lineHeight: 1.6 }}>{prog.desc}</p>
                  <h6 className="fw-bold text-dark mb-2 small text-uppercase" style={{ letterSpacing: "0.5px" }}>Key Focus Areas:</h6>
                  <div className="d-flex flex-wrap gap-2">
                    {prog.focus.map((item, fIdx) => (
                      <span key={fIdx} className="badge bg-light text-dark border px-3 py-2 rounded-pill">
                        ✨ {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Want to Know More? Section */}
      <section className="py-5" style={{ backgroundColor: "#ffffff" }}>
        <div className="container">
          <div
            className="p-4 p-lg-5 rounded-4 text-white text-center text-md-start d-flex flex-column flex-md-row justify-content-between align-items-center gap-4 shadow-sm"
            style={{ backgroundColor: "#004a90", border: "2px solid #ffd200" }}
          >
            <div>
              <h2 className="fw-bold mb-2 text-white" style={{ fontFamily: "'Poppins', sans-serif" }}>
                Want to know more?
              </h2>
              <p className="mb-0 text-white text-opacity-90 fs-5">
                Speak to the school team about the programme and age-wise learning plan.
              </p>
            </div>
            <div className="d-flex gap-3 flex-wrap">
              <Link
                href="/contact"
                className="btn btn-warning btn-lg px-4 rounded-pill fw-bold text-dark text-uppercase shadow"
                style={{ letterSpacing: "0.5px" }}
              >
                Talk to Us
              </Link>
              <Link
                href="/admissions"
                className="btn btn-outline-light btn-lg px-4 rounded-pill fw-bold text-uppercase d-inline-flex align-items-center gap-2"
                style={{ letterSpacing: "0.5px" }}
              >
                <span>Admissions</span>
                <span className="rounded-circle d-inline-flex align-items-center justify-content-center text-white" style={{ width: "20px", height: "20px", backgroundColor: "rgba(255,255,255,0.2)", flexShrink: 0 }}>
                  <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
