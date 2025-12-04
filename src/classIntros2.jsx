import { useState, useEffect } from "react";
import studentIntroduction from './studentIntro.jsx';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function ClassIntros2() {
    const [introductionData, setIntroductionData] = useState([]);
    const [error, setError] = useState(null);
    const [nameSearch, setNameSearch] = useState("");
    const [displayName, setDisplayName] = useState(true);
    const [displayMascot, setDisplayMascot] = useState(true);
    const [displayImage, setDisplayImage] = useState(true);
    const [displayLinks, setDisplayLinks] = useState(true);
    const [displayQuote, setDisplayQuote] = useState(true);
    const [displayCourses, setDisplayCourses] = useState(true);
    const [displayPersonalStatement, setDisplayPersonalStatement] = useState(true);
    const [displayBackgrounds, setDisplayBackgrounds] = useState(true);
    const [displayExtraInfo, setDisplayExtraInfo] = useState(true);

    // Remove the manual Swiper initialization - React components handle this

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
        <h2>Enhanced Introductions</h2>
        <label>
            Search For Student: &nbsp;&nbsp;
            <input type="text" placeholder="Search" onChange={(e) => setNameSearch(e.target.value)}/>
        </label>
        <section className="studentIntros showItems">
            <h3>Show Items:</h3>
            <label>
            Name:&nbsp;&nbsp;
            <input type="checkbox"  checked={displayName} onClick={() => setDisplayName(!displayName)} />
            </label>

            <label>
                &nbsp;&nbsp;Mascot:&nbsp;&nbsp;
                <input type="checkbox" checked={displayMascot} onClick={() => setDisplayMascot(!displayMascot)} />
            </label>

            <label>
                &nbsp;&nbsp;Personal Statement:&nbsp;&nbsp;
                <input type="checkbox" checked={displayPersonalStatement} onClick={() => setDisplayPersonalStatement(!displayPersonalStatement)} />
            </label>

            <label>
                &nbsp;&nbsp;Backgrounds:&nbsp;&nbsp;
                <input type="checkbox" checked={displayBackgrounds} onClick={() => setDisplayBackgrounds(!displayBackgrounds)} />
            </label>

            <label>
                &nbsp;&nbsp;Extra Information:&nbsp;&nbsp;
                <input type="checkbox" checked={displayExtraInfo} onClick={() => setDisplayExtraInfo(!displayExtraInfo)} />
            </label>

            <label>
                &nbsp;&nbsp;Image:&nbsp;&nbsp;
                <input type="checkbox" checked={displayImage} onClick={() => setDisplayImage(!displayImage)} />
            </label>
            <label>
                &nbsp;&nbsp;Links:&nbsp;&nbsp;
                <input type="checkbox" checked={displayLinks} onClick={() => setDisplayLinks(!displayLinks)} />
            </label>
            <label>
                &nbsp;&nbsp;Quote:&nbsp;&nbsp;
                <input type="checkbox" checked={displayQuote} onClick={() => setDisplayQuote(!displayQuote)} />
            </label>
            <label>
                &nbsp;&nbsp;Courses:&nbsp;&nbsp;
                <input type="checkbox" checked={displayCourses} onClick={() => setDisplayCourses(!displayCourses)} />
            </label>
        </section>

        {error == null ? "" : <p>Error Code {error}</p>}
        <Swiper
            className="mySwiper"
            modules={[Navigation, Pagination]}
            slidesPerView={1}
            spaceBetween={30}
            centeredSlides={true}
            autoHeight={true}
            pagination={{
                type: "fraction",
                clickable: true,
            }}
            navigation={true}
        >
            {
                introductionData.filter((studentData) => {
                    if (nameSearch === "") return true;
                    const fullStudentName = `${studentData.name.first} ${studentData.name.middleInitial}. "${studentData.name.preferred}" ${studentData.name.last}`;
                    return fullStudentName.toLowerCase().includes(nameSearch.toLowerCase());
                }).map((student, index) => (
                    <SwiperSlide key={index}>
                        {studentIntroduction(student, index, displayName, displayMascot, displayImage, displayLinks, displayQuote, displayCourses, displayPersonalStatement, displayBackgrounds, displayExtraInfo)}
                    </SwiperSlide>
                ))
            }
        </Swiper>

    </main>
}