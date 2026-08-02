import "./BottomPanel.css";

import {
  CheckCircle2,
  Clock3,
  Cpu,
} from "lucide-react";

function BottomPanel({
  input,
  setInput,
  output,
  verdict,
  runtime,
  memory,
}) {

  return (

    <div className="bottom-panel">

      <div className="bottom-header">

        <button className="tab active">

          Console

        </button>

        <button className="tab">

          Custom Input

        </button>

      </div>

      <div className="bottom-body">

        <div className="io-panel">

          <div className="io-card">

            <h4>Custom Input</h4>

            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Enter custom input..."
            />

          </div>

          <div className="io-card">

            <h4>Output</h4>

            <textarea
              readOnly
              value={output}
            />

          </div>

        </div>

        <div className="result-panel">

          <div className="result-card accepted">

            <CheckCircle2 size={18} />

            <span>{verdict}</span>

          </div>

          <div className="result-card">

            <Clock3 size={18} />

            <span>Runtime</span>

            <strong>{runtime}</strong>

          </div>

          <div className="result-card">

            <Cpu size={18} />

            <span>Memory</span>

            <strong>{memory}</strong>

          </div>

        </div>

      </div>

    </div>

  );
}

export default BottomPanel;