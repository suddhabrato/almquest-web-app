import React from "react";
import { useAlertContext } from "../../contexts/AlertContext";
import AlertError from "./AlertError";
import AlertInfo from "./AlertInfo";
import AlertNotifPop from "./AlertNotifPop";
import AlertSuccess from "./AlertSuccess";
import AlertWarning from "./AlertWarning";

const Alert = () => {
  const { alert } = useAlertContext();
  const { showing, img, title, type, msg, pid } = alert;

  console.log(alert);
  return (
    <div
      className={`${
        showing ? "translate-x-0 opacity-95 " : "opacity-0 translate-x-full"
      } fixed right-0 sm:right-6 my-4 mx-6 z-50 transition-all duration-500 ease-in-out`}
    >
      {type === "error" && <AlertError msg={msg} title={title} />}
      {type === "info" && <AlertInfo msg={msg} title={title} />}
      {type === "success" && <AlertSuccess msg={msg} title={title} />}
      {type === "warning" && <AlertWarning msg={msg} title={title} />}
      {type === "notif" && <AlertNotifPop msg={msg} img={img} pid={pid} />}
    </div>
  );
};

export default Alert;
