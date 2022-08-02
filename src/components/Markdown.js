import React from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { exampleVisibilitySelector, setText, textSelector } from "../redux/text/textSlice";

function Markdown() {
    const dispatch=useDispatch();
    const markdownText=useSelector(textSelector);
    const isExampleTextShown=useSelector(exampleVisibilitySelector);
  return (
      <div className="left-panel-container">
        <textarea
          value={markdownText}
          onChange={(event) => dispatch(setText(event.target.value))}
          className="text-panel-left"
          readOnly={isExampleTextShown}
        ></textarea>
      </div>
  );
}

export default Markdown;
