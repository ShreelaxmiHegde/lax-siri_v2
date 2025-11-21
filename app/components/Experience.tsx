export default function Experience() {
    return (
        <section id="experience" className="section">
            <span className="section-name">Experience </span>

            <div className="relative border-l border-gray-700 pl-6 space-y-10 mt-8">
                {/* Open Source */}
                <div className="relative">
                    <div className="timeline-dot"></div>

                    <h3 className="exp-heading">Open Source Contributor - Hacktoberfest</h3>
                    <p className="exp-time">Oct 2025</p>

                    <ul className="exp-details">
                        <li>Fixed interactive filter bug in a React.js application.</li>
                        <li>Implemented a CSS loader improving UX performance.</li>
                        <li>Enhanced README documentation for better onboarding.</li>
                    </ul>
                </div>

                {/* Fullstack Developer Project */}
                <div className="relative">
                    <div className="timeline-dot"></div>

                    <h3 className="exp-heading">Full-Stack Developer - Accommate (MERN App)</h3>
                    <p className="exp-time">Aug 2025 - Present</p>

                    <ul className="exp-details">
                        <li>Built complete eCommerce platform with Auth & backend APIs.</li>
                        <li>Implemented CRUD operations on Listings.</li>
                        <li>Integrated Cloudinary for product media uploads.</li>
                        <li>Deployed frontend & backend on Render.</li>
                    </ul>
                </div>

                {/* Chrome Extension */}
                <div className="relative">
                    <div className="timeline-dot"></div>

                    <h3 className="exp-heading">Chrome Extension Development</h3>
                    <p className="exp-time">July 2025</p>

                    <ul className="exp-details">
                        <li>Built a productivity extension using JavaScript + Manifest V3.</li>
                        <li>The extension can hold upto 10 copy histories.</li>
                        <li>Make smoother workflow for retrieving the copies.</li>
                        <li>Implemented DOM automation features.</li>
                        <li>Code fully available on GitHub (not published due to fees).</li>
                    </ul>
                </div>
            </div>

        </section>

    )
}