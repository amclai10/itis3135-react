import {useState, useEffect} from "react";

export default function ClassIntros() {
    const [introductionData, setIntroductionData] = useState([]);
    const [error, setError] = useState(null);
    useEffect(() => {
        fetch("https://dvonb.xyz/api/2025-fall/itis-3135/students?full=1")
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error(response.status);
                }
            })
            .then((data) => setIntroductionData(data))
            .catch(error => setError(error.message));
    }, [])
    return <main>
        <h2>Everybody's Introductions</h2>
        {error == null ? "" : <p>Error Code {error}</p>}
        {
            introductionData.map((student, index) =>
                <article key={index} className="studentIntros">
                    <h3>
                        {student.name.first} {" "}
                        {student.name.middleInitial ? student.name.middleInitial + ". " : ""}  {" "}
                        {student.name.preferred ? '"' + student.name.preferred + '"' : ""} {" "}
                        {student.name.last} {" "}
                        {student.divider} {" "}
                    </h3>
                    <div className="studentIntros content">
                        <figure className="studentIntros figure">
                            <img src={"https://dvonb.xyz" + student.media.src} alt={student.media.caption} />
                            <figcaption>{student.media.caption}</figcaption>
                        </figure>
                        <div className="studentIntros textContent">
                            <p>{student.personalStatement}</p>
                            <ul>
                                <li><strong>Personal Background: </strong> {student.backgrounds.personal}</li>
                                <li><strong>Professional Background: </strong> {student.backgrounds.professional}</li>
                                <li><strong>Academic Background: </strong> {student.backgrounds.academic}</li>
                                <li><strong>Subject Background: </strong> {student.backgrounds.subject}</li>
                                <li>
                                    <strong>Courses:</strong>
                                    <ol>
                                        {student.courses.map((course, index) => <li key={index}><strong>{course.dept} {course.num} - {course.name}</strong>: {course.reason}</li>)}
                                    </ol>
                                </li>
                                <li>
                                    <strong>Fun Fact: </strong> {student.funFact}
                                </li>
                                <li>
                                    <strong>Additional Information: </strong> {student.additional ? student.additional : "N/A"}
                                </li>
                            </ul>
                            <p><em>{student.quote.text}</em>
                            <br />- {student.quote.author}</p>
                        </div>
                    </div>
                    <div className="studentIntros links">
                        <a href={student.links.charlotte}>CLT Web</a> 
                        <a href={student.links.gitHub}>GitHub</a> 
                        <a href={student.links.githubio}>Github.io</a> 
                        <a href={student.links.itis3135}>ITIS 3135</a> 
                        <a href={student.links.freecodecamp}>freeCodeCamp</a>
                        <a href={student.links.codecademy}>CodeAcademy</a>
                        <a href={student.links.linkedin}>linkedIn</a>
                    </div>
                    <hr />
                </article>
            )

        }
    </main>
}