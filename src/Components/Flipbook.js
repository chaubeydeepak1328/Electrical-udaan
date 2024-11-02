import HTMLFlipBook from 'react-pageflip';
import { Document, pdfjs, Page as PDFPage } from 'react-pdf';
import './Flipbook.css'; // Import the custom CSS file for styling
import { useParams } from "react-router-dom";
import { useEffect, useRef, useState } from 'react';

// Set the PDF.js worker source
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const Flipbook = () => {
    const { pdfFile } = useParams();
    const [numPages, setNumPages] = useState(null);
    const flipBookRef = useRef(); // Reference to the flipbook
    const [dimensions, setDimensions] = useState({ width: 600, height: 800 }); // Initial dimensions

    console.log("PDF File:", pdfFile);

    // Handles document load success
    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    // Update dimensions on window resize
    useEffect(() => {
        const handleResize = () => {
            const newWidth = Math.min(window.innerWidth * 0.9, 800); // Max width of 800px
            const newHeight = Math.min(window.innerHeight * 0.9, 600); // Max height of 600px
            setDimensions({ width: newWidth, height: newHeight });
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // Call on mount to set initial dimensions

        return () => window.removeEventListener('resize', handleResize); // Cleanup on unmount
    }, []);

    return (
        <div className="flipbook-container">
            <Document
                file={`/${pdfFile}.pdf`} // Ensure the file path is correct
                onLoadSuccess={onDocumentLoadSuccess}
                onLoadError={(error) => console.error("Error loading document:", error)}
            >
                <HTMLFlipBook
                    width={dimensions.width}
                    height={dimensions.height}
                    ref={flipBookRef} // Assign the ref to the flipbook
                    className="flipbook"
                    mobileScrollSupport={true}
                >
                    {
                        numPages ? (
                            [...Array(numPages).keys()].map((pg) => (
                                <div className="flipbook-page" key={pg}>
                                    <PDFPage pageNumber={pg + 1} width={dimensions.width} />
                                </div>
                            ))
                        ) : (
                            <div>
                                <p>Loading pages...</p> // Placeholder while loading
                            </div>
                        )
                    }
                </HTMLFlipBook>
            </Document>
        </div>
    );
};

export default Flipbook 