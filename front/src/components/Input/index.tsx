import { StyledInput, Error } from "./style";
import { BiError } from "react-icons/bi";
import { UseFormRegister } from "react-hook-form";
import { IProduct } from "../../context/appContext";

interface IInputProps {
  type: string;
  id: string;
  error?: IError;
  value?: string;
  isDisabled?: boolean;
  children: string;
  register: any | UseFormRegister<IProduct>;
}

interface IError {
  message?: string;
  title?: string;
}

const Input = ({
  type,
  id,
  register,
  error,
  value = undefined,
  isDisabled = false,
  children,
}: IInputProps) => {
  return (
    <StyledInput>
      <label htmlFor={id}>{children}</label>
      <div className="div-input">
        <input
          type={type}
          id={id}
          {...(register && { ...register(id) })}
          disabled={isDisabled}
          value={value}
        />

        {error?.message && (
          <Error>
            <BiError />
            <div>
              <span>{error.message}</span>
            </div>
          </Error>
        )}
      </div>
    </StyledInput>
  );
};

export default Input;
