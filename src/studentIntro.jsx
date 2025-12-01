export default function studentIntroduction(student, index, displayName, displayMascot, displayImage, displayLinks, displayQuote, displayCourses) {
    return (
        <article key={index} className="studentIntros">

            <h3>
                {
                    displayName &&
                    `${student.name.first} ${" "}
                            ${student.name.middleInitial ? student.name.middleInitial + ". " : ""}  ${" "}
                            ${student.name.preferred ? '"' + student.name.preferred + '"' : ""} ${" "}
                            ${student.name.last} ${" "}`
                }

                { displayName && displayMascot && student.divider} {" "}
                { displayName && displayMascot && student.mascot}
            </h3>
            <div className="studentIntros content">
                {
                    displayImage ?
                        (<figure className="studentIntros figure">
                            <img src={"https://dvonb.xyz" + student.media.src} alt={student.media.caption} />
                            <figcaption>{student.media.caption}</figcaption>
                        </figure>) : null
                }
                <div className="studentIntros textContent">
                    <p>{student.personalStatement}</p>
                    <ul>
                        <li><strong>Personal Background: </strong> {student.backgrounds.personal}</li>
                        <li><strong>Professional Background: </strong> {student.backgrounds.professional}</li>
                        <li><strong>Academic Background: </strong> {student.backgrounds.academic}</li>
                        <li><strong>Subject Background: </strong> {student.backgrounds.subject}</li>
                        {
                            displayCourses &&
                            <li>
                                <strong>Courses:</strong>
                                <ol>
                                    {student.courses.map((course, index) => <li key={index}><strong>{course.dept} {course.num} - {course.name}</strong>: {course.reason}</li>)}
                                </ol>
                            </li>
                        }

                        <li>
                            <strong>Fun Fact: </strong> {student.funFact}
                        </li>
                        <li>
                            <strong>Additional Information: </strong> {student.additional ? student.additional : "N/A"}
                        </li>
                    </ul>
                    {
                        displayQuote &&
                        <p className="studentIntros quote"><em>{student.quote.text}</em>
                            <br />- {student.quote.author}</p>
                    }

                </div>
            </div>
            {
                displayLinks &&
                <div className="studentIntros links">
                    <a href={student.links.charlotte}>CLT Web</a>
                    <a href={student.links.gitHub}>GitHub</a>
                    <a href={student.links.githubio}>Github.io</a>
                    <a href={student.links.itis3135}>ITIS 3135</a>
                    <a href={student.links.freecodecamp}>freeCodeCamp</a>
                    <a href={student.links.codecademy}>CodeAcademy</a>
                    <a href={student.links.linkedin}>linkedIn</a>
                </div>
            }
            <hr />
        </article>
    )

}