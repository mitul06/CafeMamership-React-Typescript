import React from 'react'
import { IFormState } from "../MultipleForms";


interface IProps {
  formState: IFormState;
  previousStep: () => void;
}

const ReviewForm = (props : IProps) => {
  const { formState, previousStep } = props;

  const onConfirmData = () => {
      console.log("Confirm Data : ", formState);
      // backend api call
      alert("Thank You For Joining With Us");
      sessionStorage.setItem('User Data', JSON.stringify(formState));
  }
    return (
      <div>
        <ul className="list-group mb-3 reviewList">
          <li className="list-group-item">Name : {formState.name}</li>
          <li className="list-group-item">
            Father Name : {formState.fathername}
          </li>
          <li className="list-group-item">Surname : {formState.surname}</li>
          <li className="list-group-item">Email : {formState.email}</li>
          <li className="list-group-item">
            Phone Number : {formState.phonenumber}
          </li>
          <li className="list-group-item">Address : {formState.address}</li>
          <li className="list-group-item">
            Permanent Address : {formState.permanentAddress}
          </li>
        </ul>

        <form>
          <button
            className="btn btn-warning me-md-3"
            onClick={previousStep}
            type="submit"
          >
            Previous
          </button>

          <button
            className="btn btn-success confirm"
            onClick={onConfirmData}
            type="submit"
          >
            Confirm
          </button>
        </form>
      </div>
    );
}

export default ReviewForm
