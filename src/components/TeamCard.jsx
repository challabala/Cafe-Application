function TeamCard({ member }) {
  return (
    <article className="team-card card">
      <img src={member.image} alt={member.name} className="team-image" loading="lazy" />
      <div className="team-content">
        <h3>{member.name}</h3>
        <p className="role">{member.role}</p>
        <p>{member.bio}</p>
      </div>
    </article>
  );
}

export default TeamCard;
