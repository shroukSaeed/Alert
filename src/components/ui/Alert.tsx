import { ReactNode } from "react";
import "./ui/index.scss";
import { X } from "lucide-react";
import { AlertTypes } from "../../types";

interface IProps {
  type: AlertTypes;
  icon: ReactNode;
  title: string;
  description?: string;
  children?: ReactNode;
}

const Alert = ({ type, icon, title, description, children }: IProps) => {
  return (
    <div className={type}>
      <div className="alert-header">
        <div className="title">
          {icon}
          <h2>{title}</h2>
        </div>
        <X />
      </div>

      {children ? children : <p>{description}</p>}
    </div>
  );
};

export default Alert;
