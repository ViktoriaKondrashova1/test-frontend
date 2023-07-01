import { useState } from "react";
import { TextField } from "react-admin";
import "./NameField.scss";

interface INameFieldProps {
  source: string;
  label: string;
}

const NameField = ({ source, label }: INameFieldProps) => {
  const [isShow, setIsShow] = useState<boolean>(false);

  return (
    <div className="name-field">
      {isShow ? (
        <TextField source={source} label={label} />
      ) : (
        <button className="name-field__button" onClick={() => setIsShow(true)}>
          <div className="name-field__icon" />
          Get the name
        </button>
      )}
    </div>
  );
};

export default NameField;
