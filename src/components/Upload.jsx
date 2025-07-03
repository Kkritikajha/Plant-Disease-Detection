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
    fetch(imageSrc)
      .then(res => res.blob())
      .then(blob => {
        const fileFromBlob = new File([blob], 'webcam.jpg', { type: 'image/jpeg' });
        setFile(fileFromBlob);
      });
  };

  return (
    <div
      className="px-6 py-20 min-h-screen text-center"
      style={{
        backgroundImage:
          'linear-gradient(to left bottom, #6c42a4, #5c489f, #4f4d99, #454f90, #3f5186, #365787, #2f5c87, #2c6185, #176c8c, #00778f, #00818e, #058b8b)',
        color: '#f1f1f1',
      }}
    >
      <h2 className="text-4xl font-bold text-yellow-300 mb-8">Upload a Leaf Image</h2>

      <div className="mb-6">
        <button
          onClick={() => setUseCamera(!useCamera)}
          className="px-6 py-2 bg-yellow-400 text-black font-semibold rounded hover:bg-yellow-300 transition"
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
              videoConstraints={{
                width: 300,
                facingMode: 'environment',
              }}
            />
            <button
              type="button"
              onClick={captureImage}
              className="px-6 py-2 bg-green-500 text-black font-semibold rounded hover:bg-green-400 transition"
            >
              Capture
            </button>
          </div>
        ) : (
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setFile(e.target.files[0])}
            className="mx-auto block w-full max-w-sm file:bg-yellow-500 file:text-black file:px-4 file:py-2 file:rounded file:cursor-pointer bg-gray-800 text-white rounded"
          />
        )}

        <button
          type="submit"
          disabled={loading || !file}
          className="px-8 py-3 bg-yellow-400 text-black text-lg font-semibold rounded hover:bg-yellow-300 transition"
        >
          {loading ? 'Predicting...' : 'Predict'}
        </button>
      </form>

      {result && (
        <div className="mt-10 text-2xl text-purple-100">
          Prediction: <span className="font-bold">{result}</span>
        </div>
      )}
    </div>
  );
}
