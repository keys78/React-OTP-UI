import { Tabs } from "../components/Tab";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrowNight } from "react-syntax-highlighter/dist/esm/styles/hljs";
import Card, { card } from "../components/Card";
import { useState } from "react";

const Examples = () => {
  const customSyntaxHighlighterStyle = {
    backgroundColor: "var(--accent1)",
    padding: "0 20px",
    borderRadius: "10px",
  };

  const [showCheck, setShowCheck] = useState(false);

  const handleCopyClick = () => {
    navigator.clipboard.writeText(card);
    setShowCheck(true);
    setTimeout(() => {
      setShowCheck(false);
    }, 2000);
  };

  return (
    <div className="w-[900px]">
      <h1>{"Examples"}</h1>
      <div className="p-4">
        <Tabs
          tabs={[
            {
              label: "Preview",
              content: <Card />,
            },
            {
              label: "Code",
              content: (
                <div className="border border-baseTwo rounded-[10px] relative">
                  <SyntaxHighlighter
                    language="jsx"
                    customStyle={customSyntaxHighlighterStyle}
                    style={tomorrowNight}
                  >
                    {card}
                  </SyntaxHighlighter>
                  <button
                    className="absolute top-5 right-10 copy-svg"
                    onClick={handleCopyClick}
                  >
                    {!showCheck && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        fill="currentColor"
                        viewBox="0 0 256 256"
                      >
                        <path d="M184,64H40a8,8,0,0,0-8,8V216a8,8,0,0,0,8,8H184a8,8,0,0,0,8-8V72A8,8,0,0,0,184,64Zm-8,144H48V80H176ZM224,40V184a8,8,0,0,1-16,0V48H72a8,8,0,0,1,0-16H216A8,8,0,0,1,224,40Z"></path>
                      </svg>
                    )}
                  </button>
                  {showCheck && (
                    <svg
                      className="absolute top-5 right-10"
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      fill="#089904"
                      viewBox="0 0 256 256"
                    >
                      <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path>
                    </svg>
                  )}
                </div>
              ),
            },
          ]}
        />
      </div>
    </div>
  );
};

export default Examples;