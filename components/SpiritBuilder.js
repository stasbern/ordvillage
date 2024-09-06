"use client"

import React, { useRef, useState, useEffect } from 'react';
import layersData from '../public/spirit_layers.json';

const NFTBuilder = () => {
  const initialSelectedFiles = {};
  const initialSelectedOptions = {};

  Object.keys(layersData).forEach((folder) => {
    const files = layersData[folder];
    if (files.length > 0) {
      const randomFile = files[Math.floor(Math.random() * files.length)];
      initialSelectedFiles[folder] = `spirit layers/${folder}/${randomFile}`;
      initialSelectedOptions[folder] = randomFile;
    }
  });

  const [selectedFiles, setSelectedFiles] = useState(initialSelectedFiles);
  const [selectedOptions, setSelectedOptions] = useState(initialSelectedOptions);
  const canvasRef = useRef(null);

  useEffect(() => {
    drawImages();
  }, []);

  useEffect(() => {
    drawImages();
  }, [selectedFiles]);

  const drawImages = async () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (const [folder, imagePath] of Object.entries(selectedFiles)) {
      if (imagePath) {
        await new Promise((resolve) => {
          const img = new Image();
          img.onload = function () {
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
            resolve();
          };
          img.src = `/${imagePath}`;
        });
      }
    }
  };

  const handleFileChange = (folder, fileName) => {
    const filePath = `spirit layers/${folder}/${fileName}`;
    setSelectedFiles((prev) => ({ ...prev, [folder]: filePath }));
    setSelectedOptions((prev) => ({ ...prev, [folder]: fileName }));
  };

  const handleExport = async () => {
    const canvas = canvasRef.current;
    const image = canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream');
    const link = document.createElement('a');
    link.download = 'custom-nft.png';
    link.href = image;
    link.click();
  };

  return (
    <div className="flex flex-col items-center justify-center">
  {/* Image Preview and Layer Controls */}
  <div className="flex flex-row items-center justify-center flex-wrap">
    <canvas
      ref={canvasRef}
      width="500"
      height="500"
      style={{
        border: '2px solid red',
        marginRight: '20px',
        maxWidth: '80vw',
        maxHeight: '80vh',
      }}
    ></canvas>

    {/* Layer Controls */}
    <div className="flex flex-col">
      {Object.entries(layersData).map(([folder, files]) => (
        <div
          key={folder}
          className="mt-2 flex flex-row items-center justify-between"
          style={{ width: '300px' }}
        >
          <label className="mr-2">{folder.substring(1)}</label>
          <select
            value={selectedOptions[folder] || ''}
            onChange={(e) => handleFileChange(folder, e.target.value.split('/').pop())}
            className="block bg-gray-900 text-white w-3/4"
          >
            {files.length > 0 &&
              files.map((file) => (
                <option key={file} value={file}>
                  {file.substring(0, file.length - 4)}
                </option>
              ))}
          </select>
        </div>
      ))}

      {/* Export Button */}
      <button
        className="mt-4 px-4 py-2 bg-red-600 hover:bg-red-900 text-white font-bold rounded"
        onClick={handleExport}
      >
        Export as PNG
      </button>
    </div>
  </div>
</div>
  );
};

export default NFTBuilder;