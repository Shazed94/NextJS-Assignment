import { useState } from "react";

const Content = () => {
  const [text, setText] = useState();
  const [updatedText, setUpdatedText] = useState();

  function handleText() {
    setUpdatedText(text);
  }
  return (
    <div className="content">
      <textarea
        name="textarea"
        cols="50"
        rows="5"
        onChange={(e) => setText(e.target.value)}
      />
      <div>
        <button type="button" onClick={handleText}>
          Capture Text
        </button>
      </div>

      {updatedText && (
        <div className="display_content">
          <pre> {updatedText}</pre>
        </div>
      )}
    </div>
  );
};

export default Content;
