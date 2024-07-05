import { ResumeIndex } from "./ResumeIndex";
import axios from "axios";
import { useState, useEffect } from "react";

export function Content() {

  // const resumes = [
  //   {id: 1, firstName:"vee" ,lastName:"cc" ,skill:["ruby","rails"],jobTitle: "student", experience:2 ,image: "https://media.npr.org/assets/img/2019/07/31/peppa-core-landscape_custom-8b6ae85b4c1b34bdcf5425deef8ae27cbe5493f6.jpg"},
  //   {id: 2, firstName:"bee" ,lastName:"gg" ,Skill:["rails","react"],jobTitle: "student", experience:5 ,image: "https://media.npr.org/assets/img/2019/07/31/peppa-core-landscape_custom-8b6ae85b4c1b34bdcf5425deef8ae27cbe5493f6.jpg"}]
    
  const [resumes, setResumes] = useState([]);
  const handleIndexResume = () => {
    console.log("handleIndexResume");
    axios.get("http://localhost:3000/students.json").
      then((response) => {
       console.log(response.data);
       setResumes(response.data);
      });
  };

  useEffect(handleIndexResume, []);  
  return (
    <main>
      <ResumeIndex resumes={resumes}/>
    </main>
  );
}
