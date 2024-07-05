
import { Modal } from "./Modal";
import { ResumeIndex } from "./ResumeIndex";
import axios from "axios";
import { useState, useEffect } from "react";
import { ResumesShow } from "./ResumeShow";

export function Content() {

  const [isResumesShowVisible, setIsResumesShowVisible] = useState(false);
  const [currentResume, setCurrentResume] = useState({});

  const resumes = [
    {id: 1, firstName: "vee", lastName: "cc", Skills: "ruby", jobTitle: "student", experience: 2, image: "https://media.npr.org/assets/img/2019/07/31/peppa-core-landscape_custom-8b6ae85b4c1b34bdcf5425deef8ae27cbe5493f6.jpg"},
    {id: 2, firstName: "bee", lastName: "gg", Skills:"rails", jobTitle: "student", experience: 5, image: "https://media.npr.org/assets/img/2019/07/31/peppa-core-landscape_custom-8b6ae85b4c1b34bdcf5425deef8ae27cbe5493f6.jpg"}]

  const handleShowResume = (resume) => {
    console.log("handleShowResume", resume);
    setIsResumesShowVisible(true);
    setCurrentResume(resume);
  };

  const handleClose = () => {
    console.log("handleClose");
    setIsResumesShowVisible(false);
  };

  // const [resumes, setResumes] = useState([]);

  // const handleIndexResumes = () => {
  //   console.log("handleIndexResume");
  //   axios.get("http://localhost:3000/resumes.json").
  //     then((response) => {
  //      console.log(response.data);
  //      setResumes(response.data);
  //     });
  // };

  // useEffect(handleIndexResume, []); 

  return (
    <main>
      <h1>Welcome to React!</h1>
      <ResumeIndex resumes={resumes} onShowResume={handleShowResume} />
      <Modal show={isResumesShowVisible} onClose={handleClose}>
      <ResumesShow resume={currentResume} />
      </Modal>
    </main>
  );
}


