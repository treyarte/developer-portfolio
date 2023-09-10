//Helper methods for numbers

/**
 * Format a number to include commas
 * @param {number} value 
 * @returns 
 */
export const formatNumberWithCommas = (value:number) => {
        
    return value.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}

/**
 * Formats a percent for displaying
 * @param {number|string} value 
 * @param {number} precision 
 * @returns 
 */
export const formatPercent = (value:number|string, precision:number) => {
    let percent = "";

    if(typeof value === "string") {
        percent = Number.parseFloat(value).toFixed(precision);
    } else {
        percent = value.toFixed(precision);
    }

    return percent;
}