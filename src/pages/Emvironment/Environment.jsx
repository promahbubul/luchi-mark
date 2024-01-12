import React, { useState } from "react";
import Listview from "./Listview";
import Heading from "./Heading";

const Environment = () => {
  const [environments, setEnvironments] = useState([1, 2, 3, 4, 5, 6, 7, 8]);
  return (
    <div>
      <Heading />
      <Listview environments={environments} />
    </div>
  );
};

export default Environment;
