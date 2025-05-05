const Tag = ({ tagName, selectTag, selected }) => {
  const tagStyle = {
    React: { backgroundColor: "#fda821" },
    ExpressJs: { backgroundColor: "#15d4c8" },
    AWS: { backgroundColor: "#ffd12c" },
    Git: { backgroundColor: "#4cdafc" },
    default: { backgroundColor: "#f9f9f9" },
  };
  return (
    <button
      type="button"
      onClick={() => selectTag(tagName)}
      style={selected ? tagStyle[tagName] : tagStyle.default}
      className="tag"
    >
      {tagName}
    </button>
  );
};

export default Tag;
