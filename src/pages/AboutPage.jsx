import { missionValues, teamMembers } from "../assets/content";
import Reveal from "../components/Reveal";
import TeamCard from "../components/TeamCard";

function AboutPage() {
  return (
    <>
      <section className="about-hero section">
        <div className="container">
          <p className="eyebrow">About Brew Haven</p>
          <h1>Our Story</h1>
        </div>
      </section>

      <Reveal className="section section-soft story-section">
        <div className="container story-grid">
          <div className="story-copy">
            <h2>A Cafe Built on Craft and Connection</h2>
            <p>
              Brew Haven Cafe began with a simple idea: create a warm neighborhood destination
              where quality coffee and genuine hospitality come together. Every cup is brewed with
              intention, from selecting roast profiles to perfecting extraction and presentation.
            </p>
            <p>
              We partner with local roasters and ethical producers to source beans that reflect
              both traceability and flavor depth. Beyond coffee, our team bakes fresh desserts and
              savory treats each day to complement your experience.
            </p>
            <p>
              More than a cafe, Brew Haven is a shared space for students, creators, families, and
              friends to gather, pause, and feel part of a growing community.
            </p>
          </div>
          <aside className="story-highlight card">
            <h3>Community First</h3>
            <p>
              We host local artist showcases, weekend tasting sessions, and neighborhood events that
              bring people together over meaningful conversations and unforgettable flavors.
            </p>
          </aside>
        </div>
      </Reveal>

      <Reveal className="section values-section">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Mission & Values</p>
            <h2>What We Stand For</h2>
          </div>
          <div className="values-grid">
            {missionValues.map((value) => (
              <article key={value.id} className="value-card card">
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </article>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal className="section section-soft team-section">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Our Team</p>
            <h2>People Behind the Experience</h2>
          </div>
          <div className="team-grid">
            {teamMembers.map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </Reveal>
    </>
  );
}

export default AboutPage;
