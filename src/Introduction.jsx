import profileImage from './assets/aidanmclain-profile.png';
import {useEffect} from "react";

export default function Introduction() {
    useEffect(() => {
        document.title = "Aidan McLain's Ambitious Monkey | ITIS3135 | Introduction";
    }, []);
    return (
        <main>
            <h2>ITIS-3135 Introduction Page</h2>
            <h3>Aidan J. McLain ~ Ambitious Monkey</h3>
            <figure className="profile-picture">
                <img src={profileImage} alt="Aidan McLain's Profile Picture"/>
                <figcaption>First Day of Class</figcaption>
            </figure>
            <div className="bio">
                <ul className="bio-list">
                    <li>
                        <h3>Personal Statement</h3>
                        <p>I am a big fan of game development, so much so that I sometimes find it more interesting to learn
                            about how a game works than actually playing it. Also, I enjoy old mafia movies like the
                            godfather and goodfellas.</p>
                    </li>
                    <li>
                        <h3>Personal Background</h3>
                        <p>Hi, I am Aidan McLain. I have lived in North Carolina for nearly all my life and was born in
                            Wilmington, N.C. For most of my educational career I have been homeschooled, which eventually
                            allowed me to dual enroll in high school and graduate with an associates degree.</p>
                    </li>
                    <li>
                        <h3>Professional Background</h3>
                        <p>Only being 18 years old, my professional background is not exactly an extensive one. I have
                            worked at a couple restaurants, starting with the food and beverage department at Hershey Park
                            in 2022. I also worked at Chick-Fil-A from late 2022 to 2025.</p>
                    </li>
                    <li>
                        <h3>Academic Background</h3>
                        <p>I am currently working towards receiving my bachelors of arts degree in computer science and
                            already hold an associate of arts degree.</p>
                    </li>
                    <li>
                        <h3>Background in Web Development</h3>
                        <p>I do not have a particularly extensive background in web development. Outside of occasionally
                            tinkering with HTML and watching some tutorials on it, I have not done anything in regards to
                            developing websites.</p>
                    </li>
                    <li>
                        <h3>Primary Computer</h3>
                        <p>Apple 2024 Mac Mini with an M4 processor running off MacOS which I exclusively use in my dorm
                            room. I also regularly use my Apple Macbook Air 2024 with an M3 processor, also running off
                            MacOS, whenever I am in an environment where the Mac Mini is inaccessible.</p>
                    </li>
                </ul>
                <ul className="course-list">
                    <h3>My Courses</h3>
                    <li>
                        <p>ITIS-3135 - Front End Web App Development: A course on learning how to develop web-based
                            applications.</p>
                    </li>
                    <li>
                        <p>ITSC-1213 - Intro to Computer Science 2: Second course in computer science fundamentals.</p>
                    </li>
                    <li>
                        <p>ITSC-1600 - Computing Professionals: Introduction to the computing profession and professional
                            ethics.</p>
                    </li>
                    <li>
                        <p>ITSC-3688 - Computers and Their Impact on Society: Study of the social, ethical, and legal
                            implications of computing technology.</p>
                    </li>
                    <li>
                        <p>MATH-1120 - Calculus: Introduction to differential and integral calculus.</p>
                    </li>
                </ul>
                <div className="quote-section">
                    <blockquote>"Your time is limited, so don't waste it living someone else's life."</blockquote>
                    <cite>- Steve Jobs</cite>
                </div>
            </div>
        </main>
    );
}
