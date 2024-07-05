export function ResumeIndex(props) {
  console.log(props.resumes[0].skill[0])
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
            <h2>Skills: {resume.skill}</h2>
            <hr />
        </div>
        ))
      }
    </div>
  );
}