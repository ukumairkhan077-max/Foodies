const SectionTitle = ({
  label,
  title,
  dark = false,
}) => {
  return (
    <div className={`section-title ${dark ? "section-title-dark" : ""}`}>
      {label && <p className="section-label">{label}</p>}
      <h2>{title}</h2>
    </div>
  );
};

export default SectionTitle;