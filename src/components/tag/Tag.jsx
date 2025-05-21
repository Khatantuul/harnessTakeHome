import React from "react";
import "./tagStyles.css";

export default function Tag({ label, type }) {
  const classNames = {
    public: "tag--public",
    private: "tag--private",
  };

  return <div className={`tag ${classNames[type]}`}>{label}</div>;
}