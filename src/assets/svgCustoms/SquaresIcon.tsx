import React from "react";

const SquaresIcon = ({ width = 16, height = 16 }) => {
  return (
    <div>
      <svg
        width={width}
        height={height}
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.770874 0.1875H1.45837H15.2084H15.8959V0.875V14.625V15.3125H15.2084H1.45837H0.770874V14.625V0.875V0.1875ZM2.14587 1.5625V7.0625H7.64587V1.5625H2.14587ZM9.02087 1.5625V7.0625H14.5209V1.5625H9.02087ZM2.14587 8.4375V13.9375H7.64587V8.4375H2.14587ZM9.02087 8.4375V13.9375H14.5209V8.4375H9.02087Z"
          fill="white"
        />
      </svg>
    </div>
  );
};

export default SquaresIcon;
