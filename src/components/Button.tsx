interface buttonProps {
  buttonClassNames?: string;
  buttonLabel?: string;
  buttonLabelClassNames?: string;
  iconClassnames?: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  isLoading?: boolean;
  disabled?: boolean;
}

export const Button = ({
  buttonClassNames = "text-gray-300 hover:text-yellow-400 hover:border-yellow-400",
  buttonLabel = "Submit",
  buttonLabelClassNames = "font-medium",
  iconClassnames,
  icon = <></>,
  onClick,
  isLoading,
  disabled,
}: buttonProps) => {
  return (
    <button
      className={`${
        disabled || isLoading
          ? "cursor-not-allowed"
          : onClick
          ? "cursor-pointer"
          : ""
      } flex ${
        icon ? "justify-around" : "justify-center"
      } items-center ${buttonClassNames} space-x-2 border py-1 px-2 rounded-lg w-max h-content`}
      onClick={onClick}
      disabled={disabled}
    >
      <div
        className={`${
          isLoading ? "animate-pulse " : ""
        } ${iconClassnames}`}
      >
        {icon}
      </div>
      <div
        className={`${
          isLoading ? "animate-pulse " : ""
        } ${buttonLabelClassNames}`}
      >
        {buttonLabel}
      </div>
    </button>
  );
};
