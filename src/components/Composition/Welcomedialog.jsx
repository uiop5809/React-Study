import React from "react";
import CustomDialog from "./CustomDialog.jsx";

export default function Welcomedialog() {
  // return (
  //   <div>
  //     <Dialog>
  //       <h1>Welcome</h1>
  //       <h5>Thank you!</h5>
  //     </Dialog>
  //   </div>
  // );
  return <CustomDialog title={<button>Welcome</button>} description="Thanks" />;
}
