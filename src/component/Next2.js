import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Next2 = () => {
    const navigate =useNavigate();
    const handleClick = () =>{
      navigate("../next1")
    }

const [selectedFile, setSelecedFile] = useState();
const [errorMsg, setErrorMsg] = useState(false);
const [isSuccess, setIsSuccess] = useState(false);

const handleFileChange = (event) => {
    if(event.target.files.length > 0){
        setSelecedFile(event.target.files[0]);
    }
  };
  const validateSelectedFile = () => {
    const MIN_FILE_SIZE = 1024 // 1MB

    const MAX_FILE_SIZE = 10050 // 10MB

    if (!selectedFile) {
      setErrorMsg("Please choose a file");
      setIsSuccess(false)
      return
    }

    const fileSizeKiloBytes = selectedFile.size / 1024

    if(fileSizeKiloBytes < MIN_FILE_SIZE){
      setErrorMsg("File size is less than minimum limit");
      setIsSuccess(false)
      return
    }
    if(fileSizeKiloBytes > MAX_FILE_SIZE){
      setErrorMsg("");
      setIsSuccess(false)
      return
    }

    setErrorMsg("")
    setIsSuccess(true)
  };
  return (
    <div className="container">
    <form action="https://formspree.io/f/xdojkzno" method="POST">
        <div className="card-body">
          <label htmlFor="file">Recent passport size for uploading documents</label>
          <br />
          <input
            type="file"
            name='file'
            onChange={handleFileChange}
          />
          <br />
          <label htmlFor="file">HSC mark sheet(image,PDF or docs size less than 4MB)</label>
          <br />
          <input
            type="file"
            name='file'
            onChange={handleFileChange}
          />
         <br />

          <label htmlFor="file">SSC mark sheet(image,PDF or docs size less than 4MB)</label>
          <br />
          <input
            type="file"
            name='file'
            onChange={handleFileChange}
          />
      <br />

     <label htmlFor="file">All Semester mark sheet in a single pPDF or docs(file size less than 10MB)</label>
          <br />
          <input
            type="file"
            name='file'
            onChange={handleFileChange}
          />
          {isSuccess ? <p className="success-message">Validation successful</p> : null}
          <p className="error-message">{errorMsg}</p>

          {/* <button className="btn" onClick={validateSelectedFile}>
            Submit
          </button> */}
          {/* <a href={validateSelectedFile} style={{backgroundColor:"white",
          fontWeight:"200",fontSize:"15px",borderRadius:"5px",border:"2px solid black",padding:"5px 20px",cursor:"pointer"
          }} >Enter</a> */}
        </div>
        <div className="btn">
        <button onClick={handleClick}>Previous</button>
        <button>Submit</button>
        </div>
        </form>
      </div>
      
  )
}

export default Next2