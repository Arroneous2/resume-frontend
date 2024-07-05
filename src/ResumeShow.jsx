export function ResumesShow(props) {
  return (
    <div>
      <h1>Resume information</h1>
      <h2>First Name: {props.resume.firstName}</h2>
      <h2>Last Name: {props.resume.lastName}</h2>
      <img src={props.resume.image} width="300" height="300" alt="Resume Index" />
      <p>Job Title: {props.resume.jobTitle}</p>
      <p>Yrs of Experience: {props.resume.experience}</p>
      <p>Skills: {props.resume.Skills}</p>
    </div>
  );
}
