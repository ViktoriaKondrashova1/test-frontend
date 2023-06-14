import { useState } from "react";
import { TextField } from "react-admin";
import "./NameField.scss";

interface INameFieldProps {
  source: string;
  label: string;
}

const NameField = ({ source, label }: INameFieldProps) => {
  const [isShow, setIsShow] = useState<boolean>(false);

  return isShow ? (
    <TextField source={source} label={label} />
  ) : (
    <button className="name-button" onClick={() => setIsShow(true)}>
      <div className="name-button__icon" />
      Get the name
    </button>
  );
};

export default NameField;
