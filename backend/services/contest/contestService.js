// KEEP YOUR CURRENT FILE

// ADD THIS FUNCTION BEFORE module.exports

const getContestLeaderboard = async (contestId) => {

    const contest = await Contest.findById(contestId)

        .populate(
            "participants.user",
            "name email"
        );

    if (!contest) {

        throw new Error("Contest Not Found");

    }

    const leaderboard = [...contest.participants]

        .sort((a, b) => {

            if (a.solvedProblems !== b.solvedProblems) {

                return b.solvedProblems - a.solvedProblems;

            }

            return a.penalty - b.penalty;

        })

        .map((participant, index) => ({

            rank: index + 1,

            user: participant.user,

            solvedProblems: participant.solvedProblems,

            penalty: participant.penalty

        }));

    return leaderboard;

};