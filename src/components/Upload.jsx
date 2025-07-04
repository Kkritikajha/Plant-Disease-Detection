import { useState, useRef } from 'react';
import Webcam from 'react-webcam';

export default function Upload() {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);
  const [useCamera, setUseCamera] = useState(false);
  const webcamRef = useRef(null);

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!file) return;

    const formData = new FormData();
    formData.append('image', file);
    setLoading(true);

    try {
      const res = await fetch('http://localhost:5000/predict', {
        method: 'POST',
        body: formData,
      });
      const data = await res.json();
      setResult(data.prediction);
    } catch (err) {
      setResult('Error processing image. Try again.');
    } finally {
      setLoading(false);
    }
  };
const captureImage = () => {
  const imageSrc = webcamRef.current.getScreenshot();
  if (!imageSrc) {
    alert("Webcam not ready. Please wait a moment and try again.");
    return;
  }

  // Convert base64 to Blob
  const byteString = atob(imageSrc.split(',')[1]);
  const mimeString = imageSrc.split(',')[0].split(':')[1].split(';')[0];
  const ab = new ArrayBuffer(byteString.length);
  const ia = new Uint8Array(ab);
  for (let i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i);
  }
  const blob = new Blob([ab], { type: mimeString });
  const fileFromBlob = new File([blob], 'webcam.jpg', { type: mimeString });

  setFile(fileFromBlob);
};

  return (
    <div
      className="px-6 py-20 min-h-screen text-center"
      style={{
        backgroundImage:
          'linear-gradient(to right top, #070a0e, #0b1120, #14132e, #271138, #3f043b)',
        color: '#f1f1f1',
      }}
    >
      <h2 className="text-4xl font-bold text-yellow-300 mb-8">Upload a Leaf Image</h2>

      <div className="mb-6">
        <button
          onClick={() => {
            setUseCamera(!useCamera);
            setResult('');
            setFile(null);
          }}
          className="px-6 py-2 bg-purple-500 text-white font-semibold rounded hover:bg-purple-400 transition"
        >
          {useCamera ? 'Use File Upload' : 'Use Webcam'}
        </button>
      </div>

      <form onSubmit={handleUpload} className="space-y-6 max-w-xl mx-auto">
        {useCamera ? (
          <div className="flex flex-col items-center space-y-4">
            <Webcam
             
  ref={webcamRef}
  screenshotFormat="image/jpeg"
  className="rounded shadow-md"
  width={300}
  audio={false}
  mirrored={false}
  videoConstraints={{
    width: 300,
    facingMode: 'environment',
  }}
/>  
            <button
              type="button"
              onClick={captureImage}
              className="px-6 py-2 bg-indigo-500 text-white font-semibold rounded hover:bg-indigo-400 transition"
            >
              Capture
            </button>
          </div>
        ) : (
          <input
            type="file"
            accept="image/*"
            onChange={(e) => {
              setFile(e.target.files[0]);
              setResult('');
            }}
            className="mx-auto block w-full max-w-sm file:bg-purple-500 file:text-white file:px-4 file:py-2 file:rounded file:cursor-pointer bg-gray-900 text-white rounded"
          />
        )}

        <button
          type="submit"
          disabled={loading || !file}
          className={`px-8 py-3 text-white text-lg font-semibold rounded transition w-full max-w-sm mx-auto
            ${loading || !file
              ? 'bg-teal-600 cursor-not-allowed opacity-70'
              : 'bg-teal-400 hover:bg-teal-300 cursor-pointer'}`}
        >
          {loading ? 'Predicting...' : 'Predict'}
        </button>
      </form>

      {result && (
        <div className="mt-10 text-2xl text-green-200">
          Prediction: <span className="font-bold">{result}</span>
        </div>
      )}
    </div>
  );
}
