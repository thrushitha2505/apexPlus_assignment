const checkingObj = {
  scenarioName: (value, error) => {
    if (!value) {
      error["scenarioName"] = "Enter Scenario Name";
    }
  },

  scenarioTime: (value, error) => {
    if (!value) {
      error["scenarioTime"] = "Enter Scenario Time";
    }

    if (value) {
      if (!/^[0-9]+$/.test(value)) {
        error["scenarioTime"] = "Scenario Time should be in number";
      }
    }
  },
};

export const VALIDATION_OBJ = (payload) => {
  let errors = {};

  Object.keys(payload).forEach((key) => {
    checkingObj[key](payload[key], errors);
  });



  return errors;
};
