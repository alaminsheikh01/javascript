import { useState } from "react";

const params = {
  init: {},
};

/**
 *
 * @typedef {Object} Param
 * @property {Object} init
 * @property {(Object | boolean)} validate
 *
 * create forms using this useForm hook easily
 * @param {*} param0
 * @returns
 */

const useForm = ({ init }) => {
  const [state, setState] = useState(mapValuesToState(init));

  return {
    formState: state,
  };
};

// helper function
const mapValuesToState = (values) => {
  return Object.keys(values).reduce((acc, key) => {
    acc[key] = {
      value: values[key],
      error: "",
      focused: false,
      touched: false,
    };
    return acc;
  }, {});
};

export default useForm;
