import { ChangeHandler, FieldErrors, RefCallBack } from "react-hook-form";

interface Props {
  id: string;
  type: string;
  placeholder: string;
  register: HookRegister;
}
interface HookRegister {
  onChange: ChangeHandler;
  onBlur: ChangeHandler;
  ref: RefCallBack;
  name: string;
  min?: string | number;
  max?: string | number;
  maxLength?: number;
  minLength?: number;
  pattern?: string;
  required?: boolean;
  disabled?: boolean;
}

export default function Input(props: Props) {
  return (
    <div>
      <input
        className="shadow focus:border-blue-400 focus:border-2 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        {...props.register}
      ></input>
    </div>
  );
}
