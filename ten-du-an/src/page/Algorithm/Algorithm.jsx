import React, { useState } from "react";
import { Play, RotateCcw, ChevronDown, Upload, FileText } from "lucide-react";
import { useNavigate } from "react-router-dom"; // THÊM DÒNG NÀY
import "./Algorithm.css";

function Algorithm() {
  const navigate = useNavigate(); // THÊM DÒNG NÀY

  const [activeTab, setActiveTab] = useState("manual");

  const [params, setParams] = useState({
    populationSize: 100,
    generations: 50,
    mutationRate: 0.05,
    crossoverRate: 0.8,
    selectionMethod: "Tournament Selection",
    crossoverMethod: "Uniform Crossover",
  });

  const [graphInput, setGraphInput] = useState("");
  const [status, setStatus] = useState("Waiting for input...");
  const [result, setResult] = useState({
    weight: "--",
    edges: "Not yet calculated.",
  });

  const handleParamChange = (e) => {
    const { name, value } = e.target;
    setParams((prev) => ({
      ...prev,
      [name]: name.includes("Rate") ? parseFloat(value) : parseInt(value),
    }));
  };

  // HÀM ĐÃ ĐƯỢC SỬA: CHUYỂN TRANG SAU KHI RUN
  const handleRunGA = () => {
    setStatus("Evolution in progress...");
    setTimeout(() => {
      setStatus("Completed");
      setResult({ weight: 15, edges: "0-1, 1-3, 3-4" });

      // CHUYỂN SANG TRANG KẾT QUẢ (KHÔNG ĐỘNG VÀO FILE KQ CỦA BẠN)
      navigate("/result");
    }, 1500);
  };

  const handleReset = () => {
    setGraphInput("");
    setStatus("Waiting for input...");
    setResult({ weight: "--", edges: "Not yet calculated." });
  };

  return (
    <>
      <div className="app-layout">
        {/* SIDEBAR - CỐ ĐỊNH BÊN TRÁI */}
        <aside className="sidebar-container">
          <div className="sidebar-content">
            <div className="sidebar-header">
              <h1 className="brand-title">Genetic Algorithm MST</h1>
              <p className="brand-desc">
                Input graph, configure GA parameters, and find the Minimum
                Spanning Tree.
              </p>
            </div>

            <div className="tab-group">
              <button
                onClick={() => setActiveTab("manual")}
                className={`tab-btn ${activeTab === "manual" ? "active" : ""}`}
              >
                <FileText size={16} />
                <span>Manual Input</span>
              </button>
              <button
                onClick={() => setActiveTab("upload")}
                className={`tab-btn ${activeTab === "upload" ? "active" : ""}`}
              >
                <Upload size={16} />
                <span>Upload File</span>
              </button>
            </div>

            <div className="input-section">
              <label className="input-label">Graph Data</label>
              {activeTab === "manual" ? (
                <textarea
                  value={graphInput}
                  onChange={(e) => setGraphInput(e.target.value)}
                  className="text-area"
                  placeholder={`Enter edge list (u v weight):\n0 1 4\n0 7 8\n1 2 8`}
                  spellCheck="false"
                />
              ) : (
                <div className="upload-box">
                  <div className="upload-content">
                    <Upload className="upload-icon" size={32} />
                    <p>Click to upload .txt or .json</p>
                  </div>
                </div>
              )}
            </div>

            <div className="params-section">
              <h2 className="section-title">GA Parameters</h2>

              <div className="slider-group">
                <ParamSlider
                  label="Population Size"
                  name="populationSize"
                  value={params.populationSize}
                  min="10"
                  max="500"
                  step="10"
                  onChange={handleParamChange}
                />
                <ParamSlider
                  label="Generations"
                  name="generations"
                  value={params.generations}
                  min="10"
                  max="1000"
                  step="10"
                  onChange={handleParamChange}
                />
                <ParamSlider
                  label="Mutation Rate"
                  name="mutationRate"
                  value={params.mutationRate}
                  min="0"
                  max="1"
                  step="0.01"
                  onChange={handleParamChange}
                />
                <ParamSlider
                  label="Crossover Rate"
                  name="crossoverRate"
                  value={params.crossoverRate}
                  min="0"
                  max="1"
                  step="0.01"
                  onChange={handleParamChange}
                />
              </div>

              <div className="select-group">
                <SelectField
                  label="Selection Method"
                  value={params.selectionMethod}
                  onChange={(e) =>
                    setParams({ ...params, selectionMethod: e.target.value })
                  }
                  options={["Tournament Selection", "Roulette Wheel"]}
                />
                <SelectField
                  label="Crossover Method"
                  value={params.crossoverMethod}
                  onChange={(e) =>
                    setParams({ ...params, crossoverMethod: e.target.value })
                  }
                  options={["Uniform Crossover", "One-Point Crossover"]}
                />
              </div>
            </div>

            <div className="action-buttons">
              <button onClick={handleRunGA} className="btn btn-primary">
                <Play size={20} fill="currentColor" /> Run Algorithm
              </button>
              <button onClick={handleReset} className="btn btn-secondary">
                <RotateCcw size={20} /> Reset
              </button>
            </div>
          </div>
        </aside>

        {/* MAIN CONTENT */}
        <main className="main-container">
          <div className="main-wrapper">
            <div className="main-header">
              <h2 className="section-title">Graph Visualization</h2>
              <p className="status-line">
                Status:{" "}
                <span
                  className={
                    status === "Evolution in progress..."
                      ? "status-text running"
                      : "status-text"
                  }
                >
                  {status}
                </span>
              </p>
            </div>

            <div className="visualization-box">
              {status === "Completed" ? (
                <div className="vis-placeholder">
                  <div className="vis-mst-icon">MST</div>
                  <p>Visualization Rendered</p>
                </div>
              ) : (
                <div className="vis-placeholder">
                  <p className="vis-title">
                    Graph visualization will appear here.
                  </p>
                  <p className="vis-subtitle">
                    Enter data and run the algorithm to begin.
                  </p>
                </div>
              )}
            </div>

            <div className="results-section">
              <h3 className="section-title">Results</h3>
              <div className="results-cards">
                <div className="result-card">
                  <p className="result-label">MST Total Weight</p>
                  <p className="result-value large">{result.weight}</p>
                </div>
                <div className="result-card">
                  <p className="result-label">Edges in MST</p>
                  <p className="result-value">{result.edges}</p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

// Helper Components (giữ nguyên)
const ParamSlider = ({ label, name, value, min, max, step, onChange }) => {
  const percentage = ((value - min) / (max - min)) * 100;
  return (
    <div className="slider-item">
      <div className="slider-top">
        <span className="slider-label">{label}</span>
        <span className="slider-val">{value}</span>
      </div>
      <div className="slider-input-wrapper">
        <input
          type="range"
          name={name}
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={onChange}
          className="slider-range"
        />
        <div className="slider-track-bg">
          <div
            className="slider-track-fill"
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
        <div className="slider-thumb" style={{ left: `${percentage}%` }}></div>
      </div>
    </div>
  );
};

const SelectField = ({ label, options, value, onChange }) => (
  <label className="select-item">
    <span className="select-label">{label}</span>
    <div className="select-box">
      <select value={value} onChange={onChange} className="select-input">
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
      <ChevronDown className="select-icon" size={16} />
    </div>
  </label>
);

export default Algorithm;
