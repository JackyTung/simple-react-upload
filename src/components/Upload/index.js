import React, { useState } from 'react';

import axios from 'axios';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const Upload = () => {
  const [files, setFiles] = useState(null);
  const [progress, setProgress] = useState(0);
  const checkMimeType = file => {
    const whiteListType = ['text/csv', 'image/png', 'image/jpg', 'image/jpeg'];
    if (file.name === '.DS_Store' || !whiteListType.includes(file.type)) {
      return false;
    }
    return true;
  };

  const checkFileSize = file => {
    // TODO: handle file size
    // const MAX_FILE_SIZE = xxxxx
    // if (file.size < MAX_FILE_SIZE) { return false }
    return true;
  };

  const checkCSVFormat = file => {
    if (file.type === 'text/csv') {
      // TODO: parse CSV file
    }
    return true;
  };

  const handleOnChange = event => {
    // TODO: check file length
    const f = Array.from(event.target.files).filter(f => checkMimeType(f) && checkFileSize(f) && checkCSVFormat(f));
    setFiles(f);
  };

  const handleClickUpload = () => {
    const data = new FormData();
    for (let x = 0; x < files.length; x++) {
      data.append('file', files[x]);
    }
    axios
      .post('http://localhost:8000/upload', data, {
        onUploadProgress: ProgressEvent => {
          setProgress((ProgressEvent.loaded / ProgressEvent.total) * 100);
        },
      })
      .then(res => {
        // then print response status
        // console.log('upload success');
      })
      .catch(err => {
        // then print response status
        // console.log('upload fail');
      });
  };

  return (
    <>
      <Typography variant="h5">This is upload page</Typography>
      <input type="file" webkitdirectory="" mozdirectory="" onChange={handleOnChange} />
      <Button variant="contained" onClick={handleClickUpload}>
        Upload
      </Button>
      <div>Progress: {progress}</div>
    </>
  );
};

export default Upload;
