export default function Footer() {
    return (
        <footer id="contact" className="w-full bg-[#111111] text-gray-300 py-12 px-6 mt-20">
            <div className="max-w-4xl mx-auto flex flex-col items-center gap-8">
                <span className="section-name text-center">Let's Connect</span>

                <p className="text-center text-base md:text-lg text-gray-400 max-w-md">
                    Open to internships, freelance work, collaboration, and tech discussions.
                    Feel free to reach out!
                </p>

                {/* Contact List */}
                <div className="flex flex-col items-center gap-1 text-sm">
                    <a href="mailto:shreelaxmihegde9@gmail.com" className="hover:text-white transition text-lg">
                        <i className="fa-solid fa-envelope text-lg mr-2"></i>
                        shreelaxmihegde9@gmail.com
                    </a>
                    <p className="flex items-center gap-1 text-md">
                        <i className="fa-solid fa-location-dot text-[#e63d3d] mr-1"></i>
                        <b>Karnataka, India (Remote Friendly)</b>
                    </p>
                </div>

                {/* Social Icons Pill */}
                <div className="bg-[#1a1a1a] border border-gray-700 rounded-full px-6 py-3 flex items-center gap-6 shadow-lg">
                    {/* LinkedIn */}
                    <a href="https://www.linkedin.com/in/shreelaxmi-hegde-832168358"
                        className="media-btn text-[#0862b0]"
                    >
                        <i className="fa-brands fa-linkedin-in text-3xl"></i>
                    </a>

                    {/* GitHub */}
                    <a href="https://github.com/ShreelaxmiHegde"
                        className="media-btn text-white"
                    >
                        <i className="fa-brands fa-github text-3xl"></i>
                    </a>

                    {/* Dev.to */}
                    <a href="https://dev.to/shreelaxmihegde"
                        className="media-btn"
                    >
                        <i className="fa-brands fa-dev text-3xl text-white"></i>
                    </a>
                </div>

                {/* Bottom Line */}
                <p className="text-md text-center text-gray-500 mt-6">
                    © {new Date().getFullYear()} ShreelaxmiHegde. All Rights Reserved
                </p>
            </div>
        </footer>
    );
}