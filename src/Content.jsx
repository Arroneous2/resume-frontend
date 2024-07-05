
import { Modal } from "./Modal";
import { ResumeIndex } from "./ResumeIndex";
import axios from "axios";
import { useState, useEffect } from "react";
import { ResumesShow } from "./ResumeShow";

export function Content() {
    
  const [resumes, setResumes] = useState([]);

  const handleIndexResume = () => {
    console.log("handleIndexResume");
    axios.get("http://localhost:3000/students.json").
      then((response) => {
       console.log(response.data);
       setResumes(response.data);
      });
    }

  const [isResumesShowVisible, setIsResumesShowVisible] = useState(false);
  const [currentResume, setCurrentResume] = useState({});

  const handleShowResume = (resume) => {
    console.log("handleShowResume", resume);
    axios.get("http://localhost:3000/students.json").then((response) => {
    setIsResumesShowVisible(true);
    setCurrentResume(resume);
  });
};

  const handleClose = () => {
    console.log("handleClose");
    setIsResumesShowVisible(false);

  };

  useEffect(handleIndexResume, []); 

  return (
    <main>
      <h1>All Students</h1>
      <ResumeIndex resumes={resumes} onShowResume={handleShowResume} /> 
      <Modal show={isResumesShowVisible} onClose={handleClose}>
        <ResumesShow resume={currentResume} />
      </Modal>
    </main>
  );
}


