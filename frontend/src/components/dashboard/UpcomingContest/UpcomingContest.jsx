import "./UpcomingContest.css";

function UpcomingContest(){

    return(

        <div className="upcoming-card">

            <div className="upcoming-header">

                <h2>

                    Upcoming Contest

                </h2>

                <span className="live-badge">

                    Rated

                </span>

            </div>

            <div className="contest-title">

                Weekly Challenge #42

            </div>

            <div className="contest-info">

                <span>🕒 Starts in 2 Hours</span>

                <span>👥 5,243 Participants</span>

                <span>⏱ Duration : 90 Minutes</span>

                <span>🏆 Top 100 gets badge</span>

            </div>

            <button className="register-btn">

                Register Now →

            </button>

        </div>

    );

}

export default UpcomingContest;