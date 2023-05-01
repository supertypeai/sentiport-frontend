import React from "react";

const Input = React.forwardRef((props, ref) => {
  return (
    <input
      className="form-control input input-bordered w-full max-w mb-1 rounded py-3 px-4 leading-tight disabled:hover:cursor-not-allowed"
      {...props}
      ref={ref}
    />
  );
});

Input.displayName = "Input";

export default Input;
