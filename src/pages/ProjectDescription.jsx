import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import Quill CSS for styling

const ProjectDescription = () => {
  // Titles for each editor
  const titles = [
    "Project Overview",
    "Objective",
    "Benefits:",
    "Future outlook:",
    "Vision For Sustainable Growth and Market Leadership in Eco-Friendly",
    "Project Proponent",
    "Brief project Description",
    "Need of The Project",
    "Technical Feasibilty",
  ];

  const titlestwo = ["Strengths", "Weaknesses", "Opportunities", "Threats"];

  // State to hold content for each editor
  const [content, setContent] = useState(Array(titles.length).fill(""));

  // Handler for updating editor content
  const handleContentChange = (value, index) => {
    const updatedContent = [...content];
    updatedContent[index] = value;
    setContent(updatedContent);
  };

  return (
    <>
      <div className="p-4 min-h-screen bg-[#f4f9fd]">
        {/* <h1 className="text-2xl font-bold mb-6 text-center">Project Description Page</h1> */}
        <div className="space-y-6">
          {titles.map((title, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-4">
              {/* Title for each editor */}
              <p className="text-xl font-bold mb-4">{title}</p>
              {/* Rich Text Editor */}
              <ReactQuill
                value={content[index]}
                onChange={(newValue) => handleContentChange(newValue, index)}
                modules={{
                  toolbar: [
                    ["bold", "italic", "underline", "strike"], // Formatting buttons
                    [{ list: "ordered" }, { list: "bullet" }], // Lists
                    ["link", "image"], // Link and image options
                    [{ header: [1, 2, 3, false] }], // Header dropdown
                    [{ align: [] }], // Alignments
                    [{ color: [] }, { background: [] }],
                  ],
                }}
                placeholder={`Write your content for ${title} here...`}
                className="w-full"
                style={{
                  height: "200px", // Set the height of the text editor
                  overflowY: "auto", // Add vertical scrolling if needed
                }}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="p-4 bg-[#f4f9fd] min-h-screen">
        <h1 className="text-2xl font-bold mb-6 ">SWOT Analysis</h1>
        <div className="space-y-6">
          {titlestwo.map((title, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-4">
              {/* Title for each editor */}
              <p className="text-xl font-bold mb-4">{title}</p>
              {/* Rich Text Editor */}
              <ReactQuill
                value={content[index]}
                onChange={(newValue) => handleContentChange(newValue, index)}
                modules={{
                  toolbar: [
                    ["bold", "italic", "underline", "strike"], // Formatting buttons
                    [{ list: "ordered" }, { list: "bullet" }], // Lists
                    ["link", "image"], // Link and image options
                    [{ header: [1, 2, 3, false] }], // Header dropdown
                    [{ align: [] }], // Alignments
                    [{ color: [] }, { background: [] }],
                  ],
                }}
                placeholder={`Write your content for ${title} here...`}
                className="w-full"
                style={{
                  height: "500px", // Set the height of the text editor
                  overflowY: "auto", // Add vertical scrolling if needed
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProjectDescription;
