import "./ProblemFilters.css";

function ProblemFilters() {
  return (
    <div className="problem-filters">

      <input
        placeholder="Search problems..."
      />

      <select>
        <option>All Difficulty</option>
        <option>Easy</option>
        <option>Medium</option>
        <option>Hard</option>
      </select>

      <select>
        <option>All Topics</option>
        <option>Array</option>
        <option>Graph</option>
        <option>DP</option>
        <option>Tree</option>
      </select>

    </div>
  );
}

export default ProblemFilters;