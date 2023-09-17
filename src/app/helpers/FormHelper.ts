//Helper methods for a form

import { formatNumberWithCommas } from "./NumberHelper";

    /**
    * Displays an error message for a required field
    * @param fieldName 
    * @returns 
    */
    export const displayReqErrMsg = (fieldName:string) => {
        return `Please enter a valid ${fieldName}`;
    }
    
    /**
    * Displays an error message for fields that do not meet the minimum character limit
    * @param fieldName 
    * @param charLimit
    * @returns 
    */
    export const displayMinCharErrMsg = (fieldName:string, charLimit:number) => {
        return `${fieldName} must be ${charLimit} characters or more`
    }

    /**
    * Displays an error message for fields that do not meet the maximum character limit
    * @param fieldName 
    * @returns 
    */
    export const displayMaxCharErrMsg = (fieldName:string, charLimit:number) => {
        return `${fieldName} must be less than ${formatNumberWithCommas(charLimit)} characters`
    }

    /**
     * Error message that is displayed for fields that can have one of many values
     * @param fieldName 
     * @param following 
     */
    export const displayOneOfErrorMsg = (fieldName:string, following:string[]) => {
        return `${fieldName} must be one of the following: ${following.join(", ")}`
    }

    /**
     * Takes in the passed in values and check to see if the form buttons should be disabled.
     * If the form is dirty (has been touched) and is valid then the buttons should not be disabled
     * @param isFormDirty 
     * @param isFormValid 
     * @returns 
     */
    export const disableFormBtn = (isFormDirty:boolean, isFormValid:boolean) => {
        return isFormDirty && isFormValid ? false : true 
    }
