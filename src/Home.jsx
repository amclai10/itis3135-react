import { useEffect, useRef } from "react";

export default function HomePage() {
    useEffect(() => {
        document.title = "Aidan McLain's Ambitious Monkey | ITIS3135 | Home";
    }, []);

    return (
        <main>
            <h2>Home</h2>
            <p>Hello, this is the home page for Aidan McLain's ITIS-3135 course. Here you can find links to my other page.</p>
        </main>
    );
}