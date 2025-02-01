import { useState } from 'react';
import axios from 'axios';

const FileUpload = ({ onDataFetched }) => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState('');

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
    setError('');
  };

  const handleUpload = async () => {
    if (!file) {
      setError('Please select a JSON file.');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post(`${REACT_APP_PUBLIC_API}/api/temperature/upload`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      onDataFetched(response.data.temperatures);
    } catch (error) {
      setError('Error uploading file. Please try again.');
    }

  };

  return (
    <div>
      <input type="file" accept=".json" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default FileUpload;
