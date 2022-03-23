
import { createContext,useContext } from "react";



const FormContext = createContext(undefined);


//provider


const FormProvider=({children})=>{
    return(
        <FormContext.Provider value={undefined}>

            {children}

        </FormContext.Provider>

    );
}


export default FormProvider;