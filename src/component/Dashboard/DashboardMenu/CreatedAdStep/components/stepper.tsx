import React from 'react';
import '../../../../../style/styles.css';

interface StepperProps {
  currentStep: number;
}

const Stepper: React.FC<StepperProps> = ({ currentStep }) => {
  const steps = ['Personal Info', 'Contact Info', 'Address Info', 'Review',"VERIFICATION"];

  return (
    <div className="stepper-container">
      <div className="steps">
        {steps.map((step, index) => (
          <React.Fragment key={step}>
            <div className={`step ${index + 1 <= currentStep ? 'active' : ''}`}>
              <span>{index + 1}</span>
            </div>
            {index < steps.length - 1 && (
              <span className={`stepperline ${index + 1 < currentStep ? 'completed' : ''}`}></span>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Stepper;

