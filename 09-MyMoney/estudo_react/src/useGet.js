import React, {useReducer, useEffect} from "react";
import axios from "axios";

const reducer = (state, action) => {
    console.log("state", state, " - actoin", action);
    // manipular meu estado
    if (action.type === "REQUEST") {
      return { ...state, loading: true };
    }
    if (action.type === "SUCCESS") {
      return { ...state, loading: false, data: action.data };
    }
    return state;
  };
  
  //---------------------------------------------------------
  
  

const useGet = (url) => {
  const [data, dispach] = useReducer(reducer, { loading: true, data: {} });

  useEffect(() => {
    dispach({ type: "REQUEST" });

    axios.get(url).then((res) => {
      // setData({ loading: false, data: res.data });
      dispach({ type: "SUCCESS", data: res.data });
    });
  }, []);
  return data;
};

export default useGet