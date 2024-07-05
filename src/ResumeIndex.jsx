export function ResumeIndex(props) {
  return (
    <div>
      <h1>All Resumes</h1>

      {props.resumes.map((resume) => (
        <div key={resume.id}>
           <h2>First Name: {resume.firstName}</h2>
            <h2>Last Name:{resume.lastName}</h2>
            <img src={resume.image} width="300" height="300"/>
            <h2>Job Title:{resume.jobTitle}</h2>
            <h2>Yrs Of Experience:{resume.experience}</h2>
            <h2>Skills: {resume.Skills}</h2>
            <button onClick={() => props.onShowResume(resume)}>More info</button>
            <hr />
        </div>
        ))
      }
    </div>
  );
}

