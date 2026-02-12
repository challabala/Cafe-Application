function MenuCard({ item }) {
  return (
    <article className="menu-card card">
      <div className="card-image-wrap">
        <img src={item.image} alt={item.name} className="card-image" loading="lazy" />
      </div>
      <div className="card-content">
        <div className="card-topline">
          <h3>{item.name}</h3>
          <span className="price">{item.price}</span>
        </div>
        <p>{item.description}</p>
      </div>
    </article>
  );
}

export default MenuCard;
