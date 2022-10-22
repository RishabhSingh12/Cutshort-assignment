import React, { useReducer } from "react";
import { initialState } from "../../App";

const Component1 = ({ page, reducer, propsonstate }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const inputHandler1 = (e) => {
    dispatch({
      type: "SET_FULL_NAME",
      payload: { ...state, fullName: e.target.value },
    });
  };

  //lifting the state up to form component

  const inputHandler2 = (e) => {
    dispatch({
      type: "SET_DISPLAY_NAME",
      payload: { ...state, displayName: e.target.value },
    });
  };

  if (
    page === 1 &&
    state?.fullName?.length > 0 &&
    state?.displayName?.length > 0
  ) {
    document.querySelector(".span1").classList.add("hidden");
  }
  propsonstate(state);

  return (
    <>
      <div className=" w-[350px] md:w-[400px] flex flex-col gap-y-8 p-8 my-5">
        <div className="title-container space-y-1">
          <h1 className="md:text-2xl text-xl font-semibold text-center">
            Welcome! First things first...
          </h1>
          <p className="text-xs text-center font-semibold text-gray-500">
            You can always change them later.
          </p>
        </div>
        <div className="input-section flex flex-col items-start ml-5 space-y-3">
          {/* input-1 */}
          <label htmlFor="full-name" className="text-xs font-semibold ">
            Full Name
          </label>
          <input
            type="text"
            required
            id="fullName"
            placeholder="Steve Jobs"
            value={state.fullName}
            onChange={inputHandler1}
            className="p-1 px-3 outline-none border-[1px] border-gray-300 rounded-md placeholder:text-xs placeholder:font-semibold"
          />

          {/* input-2 */}
          <label
            htmlFor="display-name"
            className="label-container2 text-xs font-semibold"
          >
            Display Name
          </label>
          <input
            type="text"
            required
            id="displayName"
            placeholder="Steve"
            value={state.displayName}
            onChange={inputHandler2}
            className="p-1 px-3 outline-none border-[1px] border-gray-300 rounded-md placeholder:text-xs placeholder:font-semibold"
          />
        </div>
      </div>
    </>
  );
};

export default Component1;
