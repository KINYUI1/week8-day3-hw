function Score({scores}){
    return<>{scores.map(score => <><h3>Date: {score.date}</h3> <p>Score: {score.score}</p></>)}</>
}

export default Score;