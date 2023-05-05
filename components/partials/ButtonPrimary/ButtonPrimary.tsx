import React from "react";
import styles from "./ButtonPrimary.module.css";

const ButtonPrimary: React.FC<{
  children: string;
  buttonType?: "primary-big" | "primary-small" | "secondary-big";
  onClick?: () => void;
  className?: string;
}> = ({ children, buttonType, onClick, className }) => {
  const btnType = `${styles[buttonType ? buttonType : "primary-big"]}`;

  return (
    <button
      onClick={onClick}
      className={`${styles.button} ${btnType} ${className} `}
    >
      {children}
    </button>
  );
};

export default ButtonPrimary;
