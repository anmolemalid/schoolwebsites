"use client";

import { useState } from "react";

const curriculumData = [
  {
    id: "preschool",
    title: "Play Group & Nursery",
    age: "2 - 3 Years",
    color: "yellow",
    desc: "A warm, nurturing environment where learning begins through sensory play. We focus on motor skills development, language expression in English and Hindi, and social play using safe wooden toys and block builders.",
    ratio: "1:6 Ratio",
    size: "12 Kids Max",
    focus: ["Sensory Development", "Bilingual Words Discovery", "Creative Group Play"]
  },
  {
    id: "kindergarten",
    title: "LKG & UKG",
    age: "4 - 5 Years",
    color: "blue",
    desc: "Structuring foundations for primary school. Children develop early writing readiness, basic phonics in English, counting & simple math concepts, and social habits, preparing them for formal CBSE formats.",
    ratio: "1:10 Ratio",
    size: "18 Kids Max",
    focus: ["English & Hindi Phonics", "Mathematics Basics", "Writing & Art Readiness"]
  },
  {
    id: "primary-junior",
    title: "Junior Primary (Classes 1-2)",
    age: "6 - 7 Years",
    color: "green",
    desc: "Transitioning to formal CBSE-aligned classes. Focus is on independent reading, basic spelling, environmental science concepts (EVS), elementary math, and basic yoga & physical fitness.",
    ratio: "1:15 Ratio",
    size: "24 Kids Max",
    focus: ["Bilingual Reading Confidently", "Environmental Studies (EVS)", "Art, Craft & Yoga"]
  },
  {
    id: "primary-senior",
    title: "Senior Primary (Classes 3-5)",
    age: "8 - 10 Years",
    color: "purple",
    desc: "Nurturing deep thinking, logic, and self-confidence. Includes structured modules in Mathematics, Science, Social Studies, computer basics, coding puzzles, music, and local sports events.",
    ratio: "1:18 Ratio",
    size: "25 Kids Max",
    focus: ["Critical Thinking & Logic", "Introduction to Science & IT", "Physical Games & Sports"]
  }
];

const galleryData = [
  {
    id: 1,
    title: "Rising Kids School Campus",
    desc: "Our beautiful campus at C 47, Sector 9, New Vijay Nagar, Ghaziabad.",
    category: "classroom",
    image: "/images/hero_school.png"
  },
  {
    id: 2,
    title: "Vibrant Classroom",
    desc: "Bright, colorful desks and hindi/english educational wall charts where kids learn joyfully.",
    category: "classroom",
    image: "/images/classroom.png"
  },
  {
    id: 3,
    title: "Sensory Indoor Play Area",
    desc: "Activity room with soft colorful mats, wooden puzzle blocks, and learning kits.",
    category: "indoor",
    image: "/images/indoor_games.png"
  },
  {
    id: 4,
    title: "Interactive Dice Play Zone",
    desc: "Alphabet soft mats, large plush dice block toys, and small indoor slides for sensory learning.",
    category: "indoor",
    image: "/images/indoor_dice_mat.png"
  },
  {
    id: 5,
    title: "Nursery Activities Area",
    desc: "Low wooden tables with shapes sorters, puzzles, and sensory toys where toddlers explore.",
    category: "classroom",
    image: "/images/nursery_activities.png"
  },
  {
    id: 6,
    title: "Outdoor Play Lawn",
    desc: "Lush green grass lawns, slides, swings, and active climbing frames for kids.",
    category: "outdoor",
    image: "/images/outdoor_games.png"
  }
];

const timelineData = [
  {
    time: "07:45 AM",
    title: "Morning Assembly & Prayer",
    desc: "Welcoming kids, doing daily morning exercises, prayer songs, and a small speech to start the day.",
    icon: "🙏",
    side: "left"
  },
  {
    time: "08:15 AM",
    title: "Foundational Lessons",
    desc: "Focused interactive periods for English, Hindi, and Mathematics using boards and tablet charts.",
    icon: "📚",
    side: "right"
  },
  {
    time: "10:00 AM",
    title: "Tiffin & Fruit Break",
    desc: "Kids wash hands, learn table etiquettes, and share home-packed tiffin meals with friends.",
    icon: "🍱",
    side: "left"
  },
  {
    time: "10:30 AM",
    title: "Activity & Outdoor Games",
    desc: "Playing on slides, swings, or doing indoor sensory games like blocks building and clay work.",
    icon: "⚽️",
    side: "right"
  },
  {
    time: "12:00 PM",
    title: "Creative Arts & Computers",
    desc: "Drawing workshops, musical rhyme sessions, or basic computer keyboard practice.",
    icon: "🎨",
    side: "left"
  },
  {
    time: "01:30 PM",
    title: "National Anthem & Home Dismissal",
    desc: "Reviewing daily lessons, packing school bags, singing the National Anthem, and boarding school vans.",
    icon: "🚌",
    side: "right"
  }
];

const faqData = [
  {
    question: "What is the admissions criteria and age limit?",
    answer: "For Play Group, children should be 2+ years. For Nursery, 3+ years. For LKG, 4+ years. UKG requires 5+ years by 31st March of the admission year. For Class 1, the child should be 6+ years old."
  },
  {
    question: "Is transport available in and around Vijay Nagar, Ghaziabad?",
    answer: "Yes! We run GPS-enabled school vans and small buses covering all blocks of Vijay Nagar, Pratap Vihar, Siddharth Vihar, and nearby Ghaziabad sectors. All transport vehicles have verified drivers and female attendants."
  },
  {
    question: "Are the classrooms air-conditioned and safe?",
    answer: "Yes, all preschool and primary classrooms are fully air-conditioned to ensure comfort during hot weather. Classrooms have child-safe rounded furniture, wall cushioning, and continuous CCTV surveillance."
  },
  {
    question: "Does the curriculum align with the CBSE board?",
    answer: "Our nursery and kindergarten levels follow early childhood education patterns, whereas Classes 1-5 follow a structured curriculum aligned with CBSE board guidelines to ensure smooth transitions into secondary education."
  }
];

export default function HomePage() {
  const [activeTab, setActiveTab] = useState("preschool");
  const [galleryFilter, setGalleryFilter] = useState("all");
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const selectedCurriculum = curriculumData.find((c) => c.id === activeTab) || curriculumData[0];
  const filteredGallery = galleryData.filter(
    (item) => galleryFilter === "all" || item.category === galleryFilter
  );

  return (
    <div className="home-page position-relative">
      {/* Decorative Background Blobs */}
      <div className="bg-blob-container">
        <div className="floating-blob blob-yellow"></div>
        <div className="floating-blob blob-blue"></div>
        <div className="floating-blob blob-pink"></div>
      </div>

      {/* Hero Section */}
      <section className="hero-school d-flex align-items-center">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6 text-center text-lg-start">
              <div className="d-flex flex-wrap justify-content-center justify-content-lg-start gap-2 mb-3">
                <span className="badge-pill-kids">⭐️ Admissions Open 2026-27</span>
                <span className="badge-pill-kids bg-primary-subtle text-primary">Govt. Recognized</span>
              </div>
              <h1 className="display-4 fw-bold mb-3" style={{ lineHeight: "1.15" }}>
                Nurturing Excellence, <br />
                <span className="text-primary" style={{ color: "var(--secondary-grape) !important" }}>
                  Learning & Growing
                </span>
                Together!
              </h1>
              <h2 className="fs-5 fw-bold text-muted mb-4 font-body" style={{ fontFamily: "Quicksand" }}>
                Rising Kids School is an English Medium, Co-Educational school from Play Group to 5th Class in Vijay Nagar, Ghaziabad.
              </h2>
              <p className="text-muted mb-4" style={{ fontFamily: "Quicksand" }}>
                📍 <strong>Campus:</strong> C-47, Sector-9, New Vijay Nagar, Ghaziabad, U.P. 201009
              </p>
              <div className="d-flex flex-wrap justify-content-center justify-content-lg-start gap-3">
                <a href="#admissions" className="btn btn-orange btn-lg px-5 py-3 rounded-pill">Book a Campus Tour</a>
                <a href="#curriculum" className="btn btn-bounce-secondary btn-lg px-5 py-3 rounded-pill">Explore Programs</a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="image-carousel"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Waves Divider SVG */}
      <svg className="kids-divider" viewBox="0 0 1440 74" preserveAspectRatio="none">
        <path d="M0,32L80,37.3C160,43,320,53,480,48C640,43,800,21,960,16C1120,11,1280,21,1360,26.7L1440,32L1440,74L1360,74C1280,74,1120,74,960,74C800,74,640,74,480,74C320,74,160,74,80,74L0,74Z"></path>
      </svg>

      {/* Why Choose Section */}
      <section className="py-5" id="about">
        <div className="container">
          <div className="text-center mb-5">
            <span className="badge-pill-kids mb-2">Our School Core Values</span>
            <h2 className="display-5 fw-bold mb-3">Nurturing Young Minds</h2>
            <p className="text-muted col-md-7 mx-auto fs-5">
              Providing modern infrastructure, safe transport, and interactive education to ensure holistic growth for children in Ghaziabad.
            </p>
          </div>

          <div className="row g-4">
            <div className="col-md-4">
              <div className="card-kids h-100 text-center">
                <div className="card-kids-icon color-bg-yellow mx-auto">🧸</div>
                <h4 className="fw-bold mb-3">Sensory & Play Learning</h4>
                <p className="text-muted small mb-0">
                  Building strong intellectual foundations using jigsaw boards, sand games, and colorful geometric blocks in class.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card-kids h-100 text-center">
                <div className="card-kids-icon color-bg-blue mx-auto">🎨</div>
                <h4 className="fw-bold mb-3">Creative Expression</h4>
                <p className="text-muted small mb-0">
                  Daily classes for drawing, hindi poetry recitation, music, and craft workshops to support creative expression.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card-kids h-100 text-center">
                <div className="card-kids-icon color-bg-green mx-auto">⚽️</div>
                <h4 className="fw-bold mb-3">Physical Games & Sports</h4>
                <p className="text-muted small mb-0">
                  Safe swings, slides, running fields, yoga, and gymnastics routines helping children gain solid physical control.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Tabs Section */}
      <section className="py-5 bg-white border-top border-bottom" id="curriculum">
        <div className="container">
          <div className="text-center mb-5">
            <span className="badge-pill-kids mb-2">Bilingual & Structured Education</span>
            <h2 className="display-5 fw-bold mb-3">Our Academic Programs</h2>
            <p className="text-muted col-md-7 mx-auto">
              Select an age group below to discover how our curriculum guides your child step-by-step from play group to Class 5 level.
            </p>
          </div>

          {/* Curriculum Nav Tabs */}
          <div className="curriculum-nav mb-5">
            {curriculumData.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`curriculum-tab-btn ${activeTab === tab.id
                  ? `active-${tab.color} shadow-sm border`
                  : "border-transparent text-muted"
                  }`}
              >
                {tab.title}
              </button>
            ))}
          </div>

          {/* Curriculum Display Detail Card */}
          <div
            className="row align-items-center g-5 p-4 rounded-4 shadow-sm border"
            style={{
              background: `radial-gradient(circle at 10% 10%, rgba(${selectedCurriculum.color === "yellow" ? "255, 169, 77" :
                selectedCurriculum.color === "blue" ? "77, 171, 247" :
                  selectedCurriculum.color === "green" ? "81, 207, 98" : "177, 151, 252"
                }, 0.05) 0%, white 100%)`,
              borderLeft: `8px solid var(--${selectedCurriculum.color === "yellow" ? "yellow-sunny" :
                selectedCurriculum.color === "blue" ? "blue-sky" :
                  selectedCurriculum.color === "green" ? "green-grass" : "purple-magic"
                })`
            }}
          >
            <div className="col-lg-6">
              <span className="badge bg-secondary-subtle text-secondary px-3 py-1 rounded-pill mb-3 fw-bold">
                Age Target: {selectedCurriculum.age}
              </span>
              <h3 className="fw-bold mb-3 display-6">{selectedCurriculum.title}</h3>
              <p className="text-muted fs-5 mb-4">{selectedCurriculum.desc}</p>

              <div className="row g-3 mb-4">
                <div className="col-6">
                  <div className="p-3 rounded-3 bg-light-subtle border">
                    <span className="d-block text-muted small fw-bold">🧑‍🏫 Teacher Ratio</span>
                    <strong className="fs-5">{selectedCurriculum.ratio}</strong>
                  </div>
                </div>
                <div className="col-6">
                  <div className="p-3 rounded-3 bg-light-subtle border">
                    <span className="d-block text-muted small fw-bold">🏫 Room Strength</span>
                    <strong className="fs-5">{selectedCurriculum.size}</strong>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="p-4 bg-white rounded-4 border shadow-sm">
                <h4 className="fw-bold mb-3 text-primary d-flex align-items-center gap-2">
                  <span>🚀</span> Core Focus Activities
                </h4>
                <ul className="list-group list-group-flush">
                  {selectedCurriculum.focus.map((item, idx) => (
                    <li key={idx} className="list-group-item bg-transparent py-3 d-flex align-items-center gap-3">
                      <span className="fs-4">🌟</span>
                      <span className="fw-semibold text-dark">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Gallery Section */}
      <section className="py-5" id="gallery">
        <div className="container">
          <div className="text-center mb-5">
            <span className="badge-pill-kids mb-2">School Infrastructure</span>
            <h2 className="display-5 fw-bold mb-3">Explore Play & Learn Spaces</h2>
            <p className="text-muted col-md-7 mx-auto">
              Step inside our bright, air-conditioned rooms and green grassy play areas in Vijay Nagar. Click to view a close-up.
            </p>
          </div>

          {/* Filter Navigation */}
          <div className="d-flex justify-content-center gap-2 mb-4 flex-wrap">
            <button
              onClick={() => setGalleryFilter("all")}
              className={`gallery-filter-btn ${galleryFilter === "all" ? "active" : ""}`}
            >
              All Spaces
            </button>
            <button
              onClick={() => setGalleryFilter("classroom")}
              className={`gallery-filter-btn ${galleryFilter === "classroom" ? "active" : ""}`}
            >
              Classrooms 🏫
            </button>
            <button
              onClick={() => setGalleryFilter("indoor")}
              className={`gallery-filter-btn ${galleryFilter === "indoor" ? "active" : ""}`}
            >
              Indoor Games Play Zone 🧸
            </button>
            <button
              onClick={() => setGalleryFilter("outdoor")}
              className={`gallery-filter-btn ${galleryFilter === "outdoor" ? "active" : ""}`}
            >
              Outdoor Play Lawn ⚽
            </button>
          </div>

          {/* Grid Layout */}
          <div className="row g-4 justify-content-center">
            {filteredGallery.map((item) => (
              <div
                key={item.id}
                className="col-md-6 col-lg-6"
                onClick={() => setLightboxImage(item.image)}
              >
                <div className="gallery-item" style={{ height: "350px" }}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-100 h-100 object-fit-cover"
                  />
                  <div className="gallery-item-info text-white">
                    <h4 className="fw-bold text-white mb-2">{item.title}</h4>
                    <p className="small text-white-50 mb-0">{item.desc}</p>
                    <span className="badge mt-2 bg-primary-subtle text-primary text-uppercase rounded-pill px-3 py-1 text-xs">
                      🔍 Tap to view
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal rendering */}
      {lightboxImage && (
        <div className="lightbox-modal" onClick={() => setLightboxImage(null)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={() => setLightboxImage(null)}>
              ❌
            </button>
            <img src={lightboxImage} alt="Expanded Preview" className="img-fluid" />
          </div>
        </div>
      )}

      {/* Wavy Divider reverse */}
      <svg className="kids-divider kids-divider-reverse" viewBox="0 0 1440 74" preserveAspectRatio="none">
        <path d="M0,32L80,37.3C160,43,320,53,480,48C640,43,800,21,960,16C1120,11,1280,21,1360,26.7L1440,32L1440,74L1360,74C1280,74,1120,74,960,74C800,74,640,74,480,74C320,74,160,74,80,74L0,74Z"></path>
      </svg>

      {/* Daily Routine Timeline */}
      <section className="py-5 bg-white border-top border-bottom" id="timeline">
        <div className="container">
          <div className="text-center mb-5">
            <span className="badge-pill-kids mb-2">School Timings & Routines</span>
            <h2 className="display-5 fw-bold mb-3">A Day in Life of a Star</h2>
            <p className="text-muted col-md-7 mx-auto">
              Our daily routine is structured to balance academic lessons, active games, tiffin breaks, and moral learning.
            </p>
          </div>

          <div className="timeline-kids">
            {timelineData.map((item, idx) => (
              <div key={idx} className="timeline-kids-item">
                <div className="timeline-kids-badge">{item.icon}</div>
                <div
                  className={`timeline-kids-card ${item.side === "left" ? "timeline-left" : "timeline-right"
                    }`}
                >
                  <span
                    className="badge mb-2 rounded-pill px-3 py-1"
                    style={{
                      backgroundColor: "rgba(132, 94, 247, 0.1)",
                      color: "var(--secondary-grape)",
                      fontWeight: 700
                    }}
                  >
                    {item.time}
                  </span>
                  <h4 className="fw-bold text-dark mt-1 mb-2">{item.title}</h4>
                  <p className="text-muted small mb-0">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wavy Divider */}
      <svg className="kids-divider" viewBox="0 0 1440 74" preserveAspectRatio="none">
        <path d="M0,32L80,37.3C160,43,320,53,480,48C640,43,800,21,960,16C1120,11,1280,21,1360,26.7L1440,32L1440,74L1360,74C1280,74,1120,74,960,74C800,74,640,74,480,74C320,74,160,74,80,74L0,74Z"></path>
      </svg>

      {/* Interactive Inquiry Portal & Accordion FAQs */}
      <section className="py-5" id="admissions">
        <div className="container">
          <div className="row g-5">
            {/* Inquiry Form Card */}
            <div className="col-lg-6">
              <div className="inquiry-card-kids p-4 p-md-5">
                {!formSubmitted ? (
                  <>
                    <h3 className="fw-bold mb-3 brand-text">Admission Inquiry</h3>
                    <p className="text-muted mb-4 font-body">
                      Fill out the inquiry form below. Our admissions desk will call you to schedule a school tour!
                    </p>
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        setFormSubmitted(true);
                      }}
                    >
                      <div className="mb-3">
                        <label className="form-label fw-bold text-dark small">Student Full Name</label>
                        <input
                          type="text"
                          className="form-control form-control-kids"
                          placeholder="e.g. Aarav Sharma"
                          required
                        />
                      </div>
                      <div className="row g-3 mb-3">
                        <div className="col-md-6">
                          <label className="form-label fw-bold text-dark small">Admission For</label>
                          <select className="form-select form-control-kids" required>
                            <option value="">Select Class Group</option>
                            <option value="playgroup">Play Group (2-3 Yrs)</option>
                            <option value="kindergarten">Kindergarten (LKG/UKG)</option>
                            <option value="primary-junior">Junior Primary (Classes 1-2)</option>
                            <option value="primary-senior">Senior Primary (Classes 3-5)</option>
                          </select>
                        </div>
                        <div className="col-md-6">
                          <label className="form-label fw-bold text-dark small">Parent Full Name</label>
                          <input
                            type="text"
                            className="form-control form-control-kids"
                            placeholder="e.g. Rajesh Sharma"
                            required
                          />
                        </div>
                      </div>
                      <div className="row g-3 mb-3">
                        <div className="col-md-6">
                          <label className="form-label fw-bold text-dark small">Parent Email</label>
                          <input
                            type="email"
                            className="form-control form-control-kids"
                            placeholder="parent@email.com"
                            required
                          />
                        </div>
                        <div className="col-md-6">
                          <label className="form-label fw-bold text-dark small">Mobile Number</label>
                          <input
                            type="tel"
                            className="form-control form-control-kids"
                            placeholder="98765 XXXXX"
                            pattern="[6-9][0-9]{9}"
                            title="Please enter a valid 10-digit mobile number"
                            required
                          />
                        </div>
                      </div>
                      <div className="mb-4">
                        <label className="form-label fw-bold text-dark small">Message / Sibling / Transport Details</label>
                        <textarea
                          className="form-control form-control-kids"
                          rows={3}
                          placeholder="Tell us if you want school van transport details or have sibling queries..."
                        ></textarea>
                      </div>
                      <div className="text-center">
                        <button type="submit" className="btn btn-bounce-primary btn-lg w-100 rounded-pill py-3">
                          Submit Star Inquiry ✨
                        </button>
                      </div>
                    </form>
                  </>
                ) : (
                  <div className="success-confetti-container text-center">
                    <div className="confetti-pop">🎉🌟🧁</div>
                    <h3 className="fw-bold mt-4 text-success display-6">Inquiry Submitted!</h3>
                    <p className="text-muted mt-3 font-body">
                      Dhanyawad! We have received your inquiry. A Rising Kids School coordinator will call you back within 24 hours to book your physical school tour in Vijay Nagar.
                    </p>
                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="btn btn-bounce-secondary mt-4 px-4 py-2 rounded-pill"
                    >
                      Submit Another Inquiry 📝
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Accordion FAQs */}
            <div className="col-lg-6">
              <span className="badge-pill-kids mb-2">Have Questions?</span>
              <h3 className="display-6 fw-bold mb-4">Admissions & Transport FAQs</h3>

              <div className="faq-container">
                {faqData.map((faq, idx) => {
                  const isOpen = openFaq === idx;
                  return (
                    <div key={idx} className="faq-accordion-item">
                      <button
                        className="faq-header-btn"
                        onClick={() => setOpenFaq(isOpen ? null : idx)}
                      >
                        <span>{faq.question}</span>
                        <span>{isOpen ? "🔼" : "🔽"}</span>
                      </button>
                      {isOpen && (
                        <div className="faq-body-kids">
                          <p className="mb-0">{faq.answer}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Google Maps Location Row */}
          <div className="row mt-5 g-4">
            <div className="col-12">
              <div className="p-4 p-md-5 bg-white rounded-4 border shadow-sm text-center">
                <span className="badge-pill-kids mb-2">Find Us on Google Maps</span>
                <h3 className="fw-bold mb-2">Visit Our Campus</h3>
                <p className="text-muted mb-4">
                  📍 <strong>Address:</strong> C-47, Sector-9, New Vijay Nagar, Ghaziabad, U.P. 201009
                </p>
                <div className="rounded-4 overflow-hidden border shadow-sm" style={{ height: "350px", position: "relative" }}>
                  <iframe
                    src="https://maps.google.com/maps?q=28.643333,77.427889&t=&z=16&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
