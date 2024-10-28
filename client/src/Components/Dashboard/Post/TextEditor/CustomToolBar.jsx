import { RichUtils } from "draft-js";

const CustomToolbar = ({ editorState, onChange }) => {
  const applyStyle = (style) => {
    onChange(RichUtils.toggleInlineStyle(editorState, style));
  };

  return (
    <div style={{ display: "flex", gap: "8px", marginBottom: "10px" }}>
      <button
        onMouseDown={(e) => {
          e.preventDefault();
          applyStyle("BOLD");
        }}
      >
        Bold
      </button>
      <button
        onMouseDown={(e) => {
          e.preventDefault();
          applyStyle("ITALIC");
        }}
      >
        Italic
      </button>
      <button
        onMouseDown={(e) => {
          e.preventDefault();
          applyStyle("UNDERLINE");
        }}
      >
        Underline
      </button>
      {/* Add custom buttons for other styles */}
    </div>
  );
};

export default CustomToolbar;
