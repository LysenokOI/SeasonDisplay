import React from "react";

let Spinner = props => {
  return (
    <div class="ui active dimmer">
      <div class="ui indeterminate text loader">{props.message}</div>
    </div>
  );
};

Spinner.defaultProps = {
  message: "Loading"
};

export default Spinner;
