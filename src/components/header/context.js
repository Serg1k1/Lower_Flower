import { createContext } from "react";

const shopContext = createContext({
    position: null,
    setCoordinates: () => { }
});

export default shopContext;