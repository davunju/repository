import React, { useState } from "react";
import { Editor, EditorState, RichUtils, convertToRaw } from "draft-js";
import "draft-js/dist/Draft.css";
import CustomToolbar from "./CustomToolBar";

const DraftEditor = ({ onSave }) => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const handleEditorChange = (state) => {
    setEditorState(state);
  };

  const handleKeyCommand = (command) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      handleEditorChange(newState);
      return "handled";
    }
    return "not-handled";
  };

  const saveContent = () => {
    const content = editorState.getCurrentContent();
    const rawContent = convertToRaw(content);
    onSave(rawContent); // Pass the content to the parent or save to DB
  };

  return (
    <div>
      <div className="toolbar">
        <CustomToolbar editorState={editorState} onChange={setEditorState} />
      </div>
      <div
        className="editor"
        style={{
          border: "1px solid #ddd",
          padding: "10px",
          minHeight: "200px",
        }}
      >
        <Editor
          editorState={editorState}
          onChange={handleEditorChange}
          handleKeyCommand={handleKeyCommand}
        />
      </div>
      <button onClick={saveContent}>Save Content</button>
    </div>
  );
};

export default DraftEditor;
