import Score from './Score'
function students({name,bio,scores}){
return<>
<h2>NAME: {name}</h2>
<p><strong>BIO:</strong> {bio}</p>
<Score scores={scores}/>
</>
}

export default students;