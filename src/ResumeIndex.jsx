import React from 'react';

export function ResumeIndex(props) {
 

  
    const calculateDifference = (start_date, end_date) => {
    
      const start = new Date(start_date);      
      const end = (end_date) ? new Date(end_date) : new Date();

        const yearsDifference = end.getFullYear() - start.getFullYear();
        const monthsDifference = end.getMonth() - start.getMonth();
        
        const totalMonths = yearsDifference * 12 + monthsDifference;
     
     

      // const differenceInTime = end - start; // Difference in milliseconds
      // const differenceInDays = differenceInTime / (1000 * 3600 * 24); // Convert milliseconds to days
      // return differenceInDays;
      return totalMonths;
    };



  return (
    <div>

      {props.resumes.map((resume) => (
        <div key={resume.id}>
            <img src={resume.image} width="300" height="300"/>
           <h2>First Name: {resume.first_name}</h2>
            <h2>Last Name:{resume.last_name}</h2>
            <h2>Skill: {resume.Skills} </h2>

            <h2>Resume Url: {resume.resume_url} </h2>
            <h2>Latest Job Title: {resume.experiences[(resume.experiences.length)-1].job_title} </h2>
              {resume.experiences.map((exp) => (
              <h2> Exp(in months): {calculateDifference(exp.start_date, exp.end_date)} months</h2>
              ))}
         

            <button onClick={() => props.onShowResume(resume)}>More info</button>

            <hr />
        </div>
        ))
      }
    </div>
  );
}

