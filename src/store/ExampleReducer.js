const ExampleReducer = (currentItems, action) => {
  switch (action.type) {
    case "X":
      return currentItems;

    default:
      return currentItems;
  }
};

export default ExampleReducer;
