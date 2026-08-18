import "./ChallengeCard.css";
import { Rocket } from "lucide-react";

function ChallengeCard() {
  return (
    <div className="challenge-card">
      <div className="challenge-content">
        <span className="challenge-label">
          TODAY'S CHALLENGE
        </span>

        <h2>Two Sum</h2>

        <p>
          Solve today's featured challenge and continue your coding streak.
        </p>

        <div className="challenge-footer">
          <button>
            Solve Now →
          </button>

          <div className="challenge-stats">
            <span>Easy</span>
            <span>245K Solved</span>
            <span>87% Acceptance</span>
          </div>
        </div>
      </div>

      <Rocket
        className="rocket"
        size={90}
      />
    </div>
  );
}

export default ChallengeCard;