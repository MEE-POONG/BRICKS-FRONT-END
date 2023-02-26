import React, { useEffect, useState, useRef } from "react";

export default function Stepper({ steps, currentStep }) {
  const [newStep, setNewStep] = useState([]);
  const stepRef = useRef();
  const updateStep = (stepNumber, steps) => {
    const newSteps = [...steps];
    let count = 0;

    while (count < newSteps.length) {
      //current step
      if (count === stepNumber) {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: false,
          selected: true,
          completed: true,
        };
        count++;
      }
      //step complete
      else if (count < stepNumber) {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: false,
          selected: true,
          completed: true,
        };
        count++;
      }
      //step pending
      else {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: true,
          selected: false,
          completed: false,
        };
        count++;
      }
    }
    return newSteps;
  };
  useEffect(() => {
    //create object
    const stepsState = steps.map((step, index) =>
      Object.assign(
        {},
        {
          description: step,
          completed: false,
          highlighted: index === 0 ? true : false,
          selected: index === 0 ? true : false,
        }
      )
    );
    stepRef.current = stepsState;
    const current = updateStep(currentStep - 1, stepRef.current);
    setNewStep(current);
  }, [steps, currentStep]);

  const displaySteps = newStep.map((step, index) => {
    return (
      <div
        key={index}
        className={
          index !== newStep.length - 1
            ? "w-full flex items-center"
            : "flex items-center"
        }
      >
        <div className="relative flex flex-col items-center text-secondary">
          <div
            className={` ${
              step.selected
                ? "bg-primary text-white font-bold border border-primary"
                : ""
            } rounded-full transition duration-500 ease-in-out border-2 border-gray-300 h-12 w-12 flex items-center justify-center py-3`}
          >
            {/* Display number */}
            {step.completed ? (
              <span className="text-white font-bold text-xl">&#10003;</span>
            ) : (
              index + 1
            )}
          </div>
          <div
            className={`${
              step.highlighted ? "text-gray-900" : "text-gray-400"
            } absolute top-0 text-center mt-16 w-32 text-2xl font-fontTh font-bold uppercase`}
          >
            {/* Display description */}
            {step.description}
          </div>
        </div>
        <div
          className={`${
            step.completed ? "border-primary" : "border-gray-200"
          } flex-auto border-t-2 transition duration-500 ease-in-out`}
        >
          {/* Display line */}
        </div>
      </div>
    );
  });
  return (
    <div className="w-full mx-auto p-4 flex justify-between items-center lg:w-1/2">
      {displaySteps}
    </div>
  );
}
