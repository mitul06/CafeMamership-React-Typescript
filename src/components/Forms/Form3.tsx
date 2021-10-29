import React from 'react'
import { IFormState } from "../MultipleForms";
import { isEmpty, isEqual } from "lodash";


interface IProps {
  nextStep: () => void;
  formState: IFormState;
  handleChange: (value: string, fieldName: string) => void;
  previousStep: () => void;
}

const Form3 = (props: IProps) => {
  const { nextStep, formState, handleChange, previousStep } = props;

  const onChangeCheckbox = (event : any) => {
      if(isEmpty(formState.permanentAddress) && event.target.checked){
          props.handleChange(formState.address, "permanentAddress");
      }else if (
        isEqual(formState.address, formState.permanentAddress) &&
        !event.target.checked
      ) {
          props.handleChange("", "permanentAddress");
      }
  }

  return (
    <div>
      <form>
        <div className="mb-3">
          <label htmlFor="addressInput">Address</label> <br />
          <input
            className="form-control"
            value={formState.address}
            onChange={(event) => handleChange(event.target.value, "address")}
            type="text"
            placeholder="Enter Address"
            id="addressInput"
          />
        </div>

        <div className="form-check form-switch">
          <input
            id="customSwitch"
            onChange={onChangeCheckbox}
            className="form-check-input"
            type="checkbox"
            role="switch"
          />
          <label className="form-check-label switchLable" htmlFor="customSwitch">
            Permanent Address Same as Address
          </label>
        </div>

        <div className="mb-3">
          <label htmlFor="permanentAddressInput">Permanent Address</label>
          <br />
          <input
            className="form-control"
            value={formState.permanentAddress}
            onChange={(event) =>
              handleChange(event.target.value, "permanentAddress")
            }
            type="text"
            placeholder="Enter Permanent Address"
            id="permanentAddressInput"
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

export default Form3
