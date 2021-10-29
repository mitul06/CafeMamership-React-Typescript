import React, {useState} from 'react'
import Form1 from './Forms/Form1';
import Form2 from './Forms/Form2';
import Form3 from './Forms/Form3';
import ReviewForm from './Forms/ReviewForm';

export interface IFormState {
    step: number;
    name: string;
    fathername: string;
    surname : string;
    email : string;
    phonenumber : number | undefined;
    address : string;
    permanentAddress: string;
}

const defaultValue: IFormState = {
  step: 1,
  name: "",
  fathername: "",
  surname: "",
  email: "",
  phonenumber: undefined,
  address: "",
  permanentAddress: "",
};

const MultipleForms = () => {
    const [formState, setformState] = useState<IFormState>(defaultValue);

    const handleFieldUpdate = (value : string, fieldName : string) => {
        setformState({
            ...formState,
            [fieldName] : value,
        })
    }

    const handleNextStep = () => {
        setformState({
          ...formState,
          step : formState.step + 1
        });
    }

    const handlePreviousStep = () => {
        setformState({
          ...formState,
          step : formState.step - 1
        });
    }

    const renderForms = () => {
        if(formState.step === 1){
            return (
              <Form1
                formState={formState}
                handleChange={handleFieldUpdate}
                nextStep={handleNextStep}
              />
            );
        }else if (formState.step === 2 ){
            return (
              <Form2
                formState={formState}
                handleChange={handleFieldUpdate}
                nextStep={handleNextStep}
                previousStep = {handlePreviousStep}
              />
            );
        }else if (formState.step === 3 ){
            return (
              <Form3
                formState={formState}
                handleChange={handleFieldUpdate}
                nextStep={handleNextStep}
                previousStep = {handlePreviousStep}
              />
            );
        }else if (formState.step === 4 ){
            return (
              <ReviewForm
                formState={formState}
                previousStep = {handlePreviousStep}
              />
            );
        }
        
        return <> </>;
    }

    return (
        <div>
            {renderForms()}
        </div>
    )
}

export default MultipleForms
