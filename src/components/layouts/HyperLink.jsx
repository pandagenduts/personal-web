const HyperLink = ({ href, newTab, className, children }) => {
  return (
    <a
      href={href ? href : "#"}
      target={newTab ? "_blank" : ""}
      rel="noopener noreferrer"
      className={className}
    >
      {children}
    </a>
  );
};

export default HyperLink;
