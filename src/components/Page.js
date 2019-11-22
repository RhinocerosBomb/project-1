import React, { useState } from "react";

export default function Page({ children, show }) {

    return (
    <div className={"Page Page--" + (show ? "visible" : "hidden")}>
      {children}
    </div>
  );
}
