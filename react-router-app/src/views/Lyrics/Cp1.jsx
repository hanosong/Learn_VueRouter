import React, { memo, useState, forwardRef, useImperativeHandle } from "react";
import { DETAIL_LIST } from "../../static";
const Cp1 = memo(
  forwardRef((props, ref) => {
    const [state, setState] = useState({
      desc: "",
    });
    useImperativeHandle(ref, () => ({
      getState: () => state,
      setState: (desc) => {
        setState({ desc });
      },
    }));
    return (
      <div>
        <h1>歌曲详细信息</h1>
      </div>
    );
  })
);

export default Cp1;
