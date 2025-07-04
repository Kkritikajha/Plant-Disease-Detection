import { useState, useRef } from 'react';
import Webcam from 'react-webcam';

export default function Upload() {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);
  const [useCamera, setUseCamera] = useState(false);
  const webcamRef = useRef(null);

  const handleUpload = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    if (useCamera && webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot();
      const blob = await (await fetch(imageSrc)).blob();
      formData.append('image', blob, 'webcam-capture.jpg');
    } else if (file) {
      formData.append('image', file);
    } else {
      setResult('Please select or capture an image.');
      return;
    }

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

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFile(file);
    setPreview(URL.createObjectURL(file));
  };

  const captureWebcamImage = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setPreview(imageSrc);
  };

  return (
    <div
      className="px-6 py-20 text-white min-h-screen"
      style={{
        backgroundImage:
          'linear-gradient(to right top, #070a0e, #0b1120, #14132e, #271138, #3f043b)',
      }}
    >
      <h2 className="text-4xl font-bold text-purple-300 mb-8 text-center">Upload a Leaf Image</h2>

      <form onSubmit={handleUpload} className="space-y-8 max-w-xl mx-auto text-center">
        <div className="space-x-4 mb-4">
          <button
            type="button"
            onClick={() => {
              setUseCamera(false);
              setPreview(null);
              setResult('');
            }}
            className={`px-4 py-2 rounded font-semibold ${
              !useCamera
                ? 'bg-purple-500 text-white'
                : 'bg-white/10 text-gray-200 border border-pink-400'
            } hover:bg-pink-600 transition`}
          >
            Upload File
          </button>
          <button
            type="button"
            onClick={() => {
              setUseCamera(true);
              setFile(null);
              setResult('');
              setPreview(null);
            }}
            className={`px-4 py-2 rounded font-semibold ${
              useCamera
                ? 'bg-purple-500 text-white'
                : 'bg-white/10 text-gray-200 border border-pink-400'
            } hover:bg-pink-600 transition`}
          >
            Use Webcam
          </button>
        </div>

        {useCamera ? (
          <div className="flex flex-col items-center gap-4">
            <Webcam
              audio={false}
              ref={webcamRef}
              screenshotFormat="image/jpeg"
              className="rounded-xl shadow-md w-full max-w-md"
            />
            <button
              type="button"
              onClick={captureWebcamImage}
              className="px-6 py-2 bg-purple-500 text-white font-semibold rounded hover:bg-pink-600 transition"
            >
              Capture
            </button>
          </div>
        ) : (
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="mx-auto block w-full max-w-sm file:bg-purple-500 file:text-white file:px-4 file:py-2 file:rounded file:cursor-pointer bg-gray-800 text-white rounded"
          />
        )}

        {preview && (
          <div className="mt-6">
            <h3 className="text-lg text-purple-300 mb-2">Image Preview:</h3>
            <img
              src={preview}
              alt="Preview"
              className="rounded-xl shadow-md mx-auto max-h-80 border border-white/20"
            />
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className="px-8 py-3 bg-purple-500 text-white text-lg font-semibold rounded hover:bg-pink-600 transition"
        >
          {loading ? 'Predicting...' : 'Predict'}
        </button>
      </form>

      {result && (
        <div className="mt-10 text-2xl text-pink-300 text-center">
          Prediction: <span className="font-bold">{result}</span>
        </div>
      )}
    </div>
  );
}
