import { createContext } from "react";

export const HomeContext=createContext(null);

const HomeContextProvider=(props)=>{
    const contextValue={Uploaded_product};

    return(
        
       <HomeContext.Provider value={contextValue}>
        {props.children}
       </HomeContext.Provider>
        
        
    )
}
export default HomeContextProvider