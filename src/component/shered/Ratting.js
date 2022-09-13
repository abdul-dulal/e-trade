import React from "react";

const Rattings = ({ ratting }) => {
  return (
    <div>
      <div className="mt-3">
        <p>
          {ratting == 1 ? (
            <div>
              <span
                style={{
                  position: "relative",
                  overflow: "hidden",
                  cursor: "default",
                  display: "block",
                  float: "left",
                  color: "red",
                  fontSize: "20px",
                }}
              >
                ★
              </span>
            </div>
          ) : (
            ""
          )}
        </p>
        <p>
          {ratting == 2 ? (
            <div>
              <span
                style={{
                  position: "relative",
                  overflow: "hidden",
                  cursor: "default",
                  display: "block",
                  float: "left",
                  color: "red",
                  fontSize: "20px",
                }}
              >
                ★
              </span>
              <span
                style={{
                  position: "relative",
                  overflow: "hidden",
                  cursor: "default",
                  display: "block",
                  float: "left",
                  color: "red",
                  fontSize: "20px",
                }}
              >
                ★
              </span>
            </div>
          ) : (
            ""
          )}
        </p>
        <p>
          {ratting == 3 ? (
            <div>
              <span
                style={{
                  position: "relative",
                  overflow: "hidden",
                  cursor: "default",
                  display: "block",
                  float: "left",
                  color: "red",
                  fontSize: "20px",
                }}
              >
                ★
              </span>
              <span
                style={{
                  position: "relative",
                  overflow: "hidden",
                  cursor: "default",
                  display: "block",
                  float: "left",
                  color: "red",
                  fontSize: "20px",
                }}
              >
                ★
              </span>
              <span
                style={{
                  position: "relative",
                  overflow: "hidden",
                  cursor: "default",
                  display: "block",
                  float: "left",
                  color: "red",
                  fontSize: "20px",
                }}
              >
                ★
              </span>
            </div>
          ) : (
            ""
          )}
        </p>
        <p>
          {ratting == 4 ? (
            <div>
              <span
                style={{
                  position: "relative",
                  overflow: "hidden",
                  cursor: "default",
                  display: "block",
                  float: "left",
                  color: "red",
                  fontSize: "20px",
                }}
              >
                ★
              </span>
              <span
                style={{
                  position: "relative",
                  overflow: "hidden",
                  cursor: "default",
                  display: "block",
                  float: "left",
                  color: "red",
                  fontSize: "20px",
                }}
              >
                ★
              </span>
              <span
                style={{
                  position: "relative",
                  overflow: "hidden",
                  cursor: "default",
                  display: "block",
                  float: "left",
                  color: "red",
                  fontSize: "20px",
                }}
              >
                ★
              </span>
              <span
                style={{
                  position: "relative",
                  overflow: "hidden",
                  cursor: "default",
                  display: "block",
                  float: "left",
                  color: "red",
                  fontSize: "20px",
                }}
              >
                ★
              </span>
              <span> ★</span>
            </div>
          ) : (
            ""
          )}
        </p>
        <p>
          {ratting == 5 ? (
            <div>
              <span
                style={{
                  position: "relative",
                  overflow: "hidden",
                  cursor: "default",
                  display: "block",
                  float: "left",
                  color: "red",
                  fontSize: "20px",
                }}
              >
                ★
              </span>
              <span
                style={{
                  position: "relative",
                  overflow: "hidden",
                  cursor: "default",
                  display: "block",
                  float: "left",
                  color: "red",
                  fontSize: "20px",
                }}
              >
                ★
              </span>
              <span
                style={{
                  position: "relative",
                  overflow: "hidden",
                  cursor: "default",
                  display: "block",
                  float: "left",
                  color: "red",
                  fontSize: "20px",
                }}
              >
                ★
              </span>
              <span
                style={{
                  position: "relative",
                  overflow: "hidden",
                  cursor: "default",
                  display: "block",
                  float: "left",
                  color: "red",
                  fontSize: "20px",
                }}
              >
                ★
              </span>
            </div>
          ) : (
            ""
          )}
        </p>
      </div>
    </div>
  );
};

export default Rattings;
