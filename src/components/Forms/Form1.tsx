import React from 'react'
import { IFormState } from '../MultipleForms';

interface IProps {
  nextStep: () => void;
  formState: IFormState;
  handleChange: (value: string, fieldName: string) => void;
}

const Form1 = (props: IProps) => {
    const {nextStep, formState, handleChange} = props;
    
  return (
    <div>
      <form>
        <div className="mb-3">
          <label htmlFor="nameInput">First Name</label> <br />
          <input
            className="form-control"
            value={formState.name}
            onChange={(event) => handleChange(event.target.value, "name")}
            type="text"
            placeholder="Enter Your Name"
            id="nameInput"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="fathernameInput">Last Name</label> <br />
          <input
            className="form-control"
            value={formState.fathername}
            onChange={(event) => handleChange(event.target.value, "fathername")}
            type="text"
            placeholder="Enter Father Name"
            id="fathernameInput"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="surnameInput"> Surname</label> <br />
          <input
            className="form-control"
            value={formState.surname}
            onChange={(event) => handleChange(event.target.value, "surname")}
            type="text"
            placeholder="Enter Surname"
            id="surnameInput"
          />
        </div>

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

export default Form1
