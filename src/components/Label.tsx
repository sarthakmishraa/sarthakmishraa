// import { Link } from "react-router-dom";

// interface labelProps {
//   label: string;
//   keepInline?: boolean;
//   link?: string;
//   extraClassNames?: string;
// }

// export const Label = ({
//   label = "",
//   keepInline = false,
//   link = "",
//   extraClassNames = "",
// }: labelProps) => {
//   const labelStyle = `${
//     link ? "cursor-pointer" : ""
//   } font-medium text-gray-300 hover:text-yellow-400 ${extraClassNames}`;
//   if (keepInline)
//     return (
//       <Link to={link ?? ""}>
//         <span className={labelStyle}> {label} </span>
//       </Link>
//     );
//   return (
//     <Link to={link ?? ""}>
//       <div className={labelStyle}>{label}</div>
//     </Link>
//   );
// };

import { redirectToURL } from "../utils/helper";

interface LabelProps {
  label: string;
  keepInline?: boolean;
  link?: string;
  extraClassNames?: string;
}

export const Label = ({
  label = "",
  keepInline = false,
  link = "",
  extraClassNames = "",
}: LabelProps) => {
  const labelStyle = `${
    link ? "cursor-pointer" : ""
  } font-medium text-gray-300 hover:text-yellow-400 ${extraClassNames}`;

  const handleClick = () => {
    if (!link) return;
    redirectToURL(link);
  };

  const labelWithSpaces = ` ${label} `;

  if (keepInline) {
    return (
      <span className={labelStyle} onClick={handleClick}>
        {labelWithSpaces}
      </span>
    );
  }

  return (
    <div className={labelStyle} onClick={handleClick}>
      {labelWithSpaces}
    </div>
  );
};
