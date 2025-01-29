import React from "react";

const Contact: React.FC = () => {
    return (
        <div style={{ backgroundColor: "#030712" }}> {/* Hex color applied */}
            <div className="flex flex-col items-center justify-start w-full h-auto p-28 gap-10">
                {/* Heading */}
                <h1 className="text-4xl sm:text-6xl font-extrabold mb-4 text-white">
                    Get in touch
                </h1>
            </div>
        </div>
    );
};
export default Contact;

