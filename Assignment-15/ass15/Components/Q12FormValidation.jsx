import { useState, useRef } from "react";
export const Q12FormValidation = () => {
  const nameRef = useRef();
  const mailRef = useRef();
  const [submittedData, updateData] = useState(null);
  const resetForm = () => {
    updateData(null);
    nameRef.current.value = mailRef.current.value = "";
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    updateData({
      name: nameRef.current.value,
      mail: mailRef.current.value,
    });
  };
  return (
    <div className="form-validation">
      <form>
        <table>
          <tbody>
            <tr>
              <td>
                <label htmlFor="name">Enter name: </label>
              </td>
              <td>
                <input id="name" type="text" ref={nameRef} />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="mail">Enter mail: </label>
              </td>
              <td>
                <input id="mail" type="email" ref={mailRef} />
              </td>
            </tr>
          </tbody>
        </table>
        <div className="buttons">
          <button
            type="submit"
            onClick={(event) => {
              handleSubmit(event);
            }}
          >
            SUBMIT
          </button>
          <button type="button" onClick={resetForm}>
            RESET
          </button>
        </div>
      </form>
      <div className="output">
        {submittedData && (
          <h1>
            Name : {submittedData.name}
            <br />
            Email : {submittedData.mail}
          </h1>
        )}
      </div>
    </div>
  );
};
