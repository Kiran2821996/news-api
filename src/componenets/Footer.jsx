import React from "react";

function Footer() {
  const date = new Date();
  return (
    <div>
      <h1>
        Last Sync:{" "}
        {`${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} @ ${
          date.getHours() < 10 ? "0" + date.getHours() : date.getHours()
        }:${
          date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()
        }:${
          date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds()
        }`}
      </h1>
    </div>
  );
}

export default Footer;
