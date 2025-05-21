import React from "react";
import "./buttonStyles.css"; 

export default function Button({ children }) {
  return <button className="button">{children}</button>;
}