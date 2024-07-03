import { Modal } from "./Modal";

export function Content() {

  const [isResumesShowVisible, setIsResumesShowVisible] = useState(false);
  const [currentResume, setCurrentResume] = useState({});

  















  const handleShowResume = (resume) => {
    console.log("handleShowResume", resume);
    setIsResumesShowVisible(true);
    setCurrentResume(resume);
  };

  const handleClose = () => {
    console.log("handleClose");
    setIsResumesShowVisible(false);
  };

  
  return (
    <main>
      <h1>Welcome to React!</h1>
      <ResumesIndex resumes={resumes} onShowResume={handleShowResume} />
      <Modal show={isResumesShowVisible} onClose={handleClose}>
        <h1>Test</h1>
      </Modal>
    </main>
  );
}


