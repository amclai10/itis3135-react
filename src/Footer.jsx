import { useEffect, useRef } from "react";

export default function Footer() {
    const htmlLinkRef = useRef(null);
    const cssLinkRef = useRef(null);

    useEffect(() => {
        if (htmlLinkRef.current) {
            htmlLinkRef.current.href = `https://validator.w3.org/check?uri=${window.location.href}`;
        }
        if (cssLinkRef.current) {
            cssLinkRef.current.href = `https://jigsaw.w3.org/css-validator/validator?uri=${window.location.href}`;
        }
    }, []);
    return (
        <div className="footer">
            <ul className="footer-links">
                <li><a href="https://github.com/amclai10" target="_blank">GitHub</a></li>
                <li><a href="https://www.linkedin.com/in/aidan-mclain/" target="_blank">LinkedIn</a></li>
                <li><a href="https://webpages.charlotte.edu/amclai10/" target="_blank">CLT Webpage Home</a></li>
                <li><a href="https://webpages.charlotte.edu/amclai10/itis3135" target="_blank">CLT ITIS3135 Page</a></li>
                <li><a href="https://amclai10.github.io/amclai10/" target="_blank">GitHub.io Page</a></li>
                <li><a href="aidanmc.com/">Designed by Aidan McLain LLC</a></li>
                <li><a href="ambitiousMonkey/">Ambitious Monkey</a></li>
                <li><a ref={htmlLinkRef} target="_blank" rel="noopener noreferrer">Validate HTML</a></li>
                <li><a ref={cssLinkRef} target="_blank" rel="noopener noreferrer">Validate CSS</a></li>
                <li><p>Aidan McLain &copy;2025</p></li>
                <li><a className={DesignedBy} href="aidanmc.com/">Designed by Aidan McLain LLC</a></li>
            </ul>
        </div>
    );
}