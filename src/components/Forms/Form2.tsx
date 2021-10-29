import React from 'react'
import { IFormState } from "../MultipleForms";

interface IProps {
  nextStep: () => void;
  formState: IFormState;
  handleChange: (value: string, fieldName: string) => void;
  previousStep: () => void;
}



const Form2 = (props : IProps) => {
  const { nextStep, formState, handleChange, previousStep } = props;

  return (
    <div>
      <form>
        <div className="mb-3">
          <label htmlFor="emailInput">Email</label> <br />
          <input
            className="form-control"
            onChange={(event) => handleChange(event.target.value, "email")}
            type="text"
            placeholder="Enter Email"
            id="emailInput"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="phonenumberInput">Phone Number</label> <br />
          <input
            className="form-control"
            value={formState.phonenumber}
            onChange={(event) =>
              handleChange(event.target.value, "phonenumber")
            }
            type="text"
            placeholder="Enter Phone Number"
            id="phonenumberInput"
          />
        </div>

        <button
          className="btn btn-warning me-md-3"
          onClick={previousStep}
          type="submit"
        >
          Previous
        </button>
        <button
          className="btn btn-info continue"
          onClick={nextStep}
          type="submit"
        >
          Continue
        </button>
      </form>
    </div>
  );
};

export default Form2
