import React, { useState } from "react";
import Component1 from "../Form-Component1/Component1";
import Component2 from "../Form-Component2/Component2";
import Component3 from "../Form-Component3/Component3";
import Component4 from "../Form-Component4/Component4";

const FormContainer = ({ reducer }) => {
  const [pageno, setPageno] = useState(1);

  const launchHandler = () => {
    setPageno(1);
  };

  // const [state, dispatch] = useReducer(reducer, initialState);

  let reducerstate = {};
  const reducerState = (state) => {
    reducerstate = state;
  };

  const handleClick = () => {
    if (
      pageno === 1 &&
      (reducerstate.fullName.length === 0 ||
        reducerstate.displayName.length === 0)
    ) {
      document.querySelector("span").classList.remove("hidden");
    }

    if (
      pageno === 1 &&
      reducerstate.fullName.length > 0 &&
      reducerstate.displayName.length > 0
    ) {
      setPageno(pageno + 1);
    }

    if (
      pageno === 2 &&
      reducerstate.workspaceName.length > 0 &&
      reducerstate.workspaceUrl.length > 0 &&
      reducerstate.workspaceUrl.includes("@")
    ) {
      setPageno(pageno + 1);
    }
  };

  return (
    <div className="flex flex-col w-[80%] bg-white rounded-lg h-[60%] justify-center items-center">
      {pageno === 1 && (
        <Component1
          page={pageno}
          setPage={setPageno}
          reducer={reducer}
          propsonstate={reducerState}
        />
      )}
      {pageno === 2 && (
        <Component2 page={pageno} setPage={setPageno} reducer={reducer} />
      )}
      {pageno === 3 && (
        <Component3 page={pageno} setPage={setPageno} reducer={reducer} />
      )}
      {pageno === 4 && (
        <Component4 page={pageno} setPage={setPageno} reducer={reducer} />
      )}

      {pageno < 2 && (
        <span className="span1 hidden text-red-500 pt-[-10px] mb-1">
          Please enter both the fields.
        </span>
      )}
      <div className="btn-container w-[70%] sm:w-[42%] lg:w-[25%] flex justify-center bg-purple-700 px-2 rounded-lg hover:bg-purple-500 text-white mb-9">
        {pageno < 4 && (
          <button className="btn1 py-2 w-full" onClick={handleClick}>
            Create Workspace
          </button>
        )}
        {pageno === 4 && (
          <button className="btn-container" onClick={launchHandler}>
            Launch Eden
          </button>
        )}
      </div>
    </div>
  );
};

export default FormContainer;
