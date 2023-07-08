import { forwardRef, useImperativeHandle, useRef } from "react";
import classes from "./Input.module.css";

export default forwardRef(function Input(props, ref) {
  const inputRef = useRef();

  function focus(){
    inputRef.current.focus();
  }

  useImperativeHandle(ref, () => {
    return {
      focus
    }
  })

  return (
    <div
      className={`${classes.control} ${
        props.isValid === false ? classes.invalid : ""
      }`}
    >
      <label htmlFor={props.id}>{props.label}</label>
      <input
        ref={inputRef}
        type={props.type}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
    </div>
  )
})
