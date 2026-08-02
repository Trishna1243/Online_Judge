import "./EditorWindow.css";
import { FileCode2 } from "lucide-react";
import CodeEditor from "../CodeEditor/CodeEditor";

function EditorWindow({
  language,
  code,
  setCode,
}) {
  const fileNames = {
    cpp: "Solution.cpp",
    java: "Main.java",
    python: "solution.py",
    javascript: "solution.js",
  };

  return (
    <div className="editor-window">

      <div className="editor-tabs">

        <div className="editor-tab active">

          <FileCode2 size={16} />

          <span>{fileNames[language]}</span>

        </div>

      </div>

      <div className="editor-body">

        <CodeEditor
          language={language}
          code={code}
          setCode={setCode}
        />

      </div>

    </div>
  );
}

export default EditorWindow;