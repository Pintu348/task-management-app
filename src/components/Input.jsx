import { ForwardedRef, forwardRef } from "react";

const Input = forwardRef(function Input({ label, isTextArea, ...props }, ref) {
  const classInput =
    "w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600";
  return (
    <div className='flex flex-col gap-1 my-4'>
      <label className='text-sm font-bold uppercase text-stone-500'>
        {label}
      </label>
      {isTextArea ? (
        <textarea {...props} ref={ref} className={classInput} />
      ) : (
        <input className={classInput} ref={ref} {...props} />
      )}
      {/* <p className="form-erro" style={{
        color: "#b30000",
        fontSize: "12px", "display": errorMessage ? "" : "none"
      }}>This field is required!</p> */}
    </div>
  );
});
export default Input;
