import React, { memo, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const User = memo(() => {
  const [searchParams] = useSearchParams();
  const param = Object.fromEntries(searchParams.entries());
  useEffect(() => {}, []);
  return (
    <div>
      <h1>{param.name}</h1>
      <h3>{param.age}</h3>
    </div>
  );
});

export default User;
