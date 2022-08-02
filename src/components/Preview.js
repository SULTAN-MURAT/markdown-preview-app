import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useSelector } from "react-redux/es/exports";
import { textSelector } from "../redux/text/textSlice";
function Preview() {
  const markdownText = useSelector(textSelector);
  return (
    <div className="text-panel-right">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdownText}</ReactMarkdown>
    </div>
  );
}

export default Preview;
