import "./StatCard.css";
import { TrendingUp } from "lucide-react";

function StatCard({ title, value, color, change }) {

    return (

        <div className="stat-card">

            <div className="stat-top">

                <span className="stat-title">

                    {title}

                </span>

                <div className="stat-icon">

                    <TrendingUp size={22}/>

                </div>

            </div>

            <h2
                className="stat-value"
                style={{ color }}
            >

                {value}

            </h2>

            <div className="stat-bottom">

                <span className="change">

                    {change}

                </span>

                <div className="graph">

                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>

                </div>

            </div>

        </div>

    );

}

export default StatCard;