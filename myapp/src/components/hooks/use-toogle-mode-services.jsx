import { useContext } from "react";
import { ColorModeServicesContext } from "../context/theme-provider";

export const useToggleModeServices = () => {
    const toggleMode = useContext(ColorModeServicesContext);

    if(toggleMode === undefined) {
        console.log('Error');
    //     throw new Error('You must use useToggleModeServices with ToggleColorModeServicesContext');
    }

    return toggleMode;
}