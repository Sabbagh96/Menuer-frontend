import { Children, createContext, useState } from "react";

export const SectionContext = createContext();

const SectionContextProvider = (props) => {
  const [items, setItems] = useState([]);

  return (
    <SectionContext.Provider value={{ items }}>
      {props.children}
    </SectionContext.Provider>
  );
};

export default SectionContextProvider;
