import React, { useEffect, useRef, useState } from "react";
import ml5 from "ml5";
import GaugeChart from "../components/GaugeChart";
import useInterval from "../utils/useInterval";

let classifier;
export default () => {
  const videoRef = useRef();
  const [gaugeData, setGaugeData] = useState([0.5, 0.5]);
  const [shouldClassify, setShouldClassify] = useState(false);

  useEffect(() => {
    classifier = ml5.imageClassifier("./models/model.json", () => {
      navigator.mediaDevices
        .getUserMedia({ video: true, audio: false })
        .then((stream) => {
          videoRef.current.srcObject = stream;
          videoRef.current.play();
        });
    });
  }, []);

  useInterval(() => {
    if (classifier && shouldClassify) {
      classifier.classify(videoRef.current, (error, results) => {
        if (error) {
          console.error(error);
          return;
        }
        results.sort((a, b) => b.label.localeCompare(a.label));
        setGaugeData(results.map((entry) => entry.confidence));
      });
    }
  }, 500);

  return (
    <div>
      <div className="p-10 m-auto" style={{ maxWidth: "fit-content" }}>
        <video
          className="w-full h-full border-solid border-8 rounded-lg border-gray-800 "
          ref={videoRef}
          style={{ maxWidth: "400px" }}
          width="1280"
          height="720"
        />
      </div>
      <div className="text-center">
        <h3 className="pb-2">
          [{gaugeData[0].toFixed(2)}, {gaugeData[1].toFixed(2)}]
        </h3>

        <GaugeChart data={gaugeData} />
        <button
          className="bg-gray-700 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded absolute bottom-0 left-0 m-10 p-10"
          onClick={() => setShouldClassify(!shouldClassify)}
        >
          {shouldClassify ? "Stop classifying" : "Start classifying"}
        </button>
      </div>
    </div>
  );
};
