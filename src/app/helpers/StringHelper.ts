    /**
     * checks if a string is null or contains white space
     */
    export const isNullOrWhiteSpace = (str:string|null) => {
        if(!str) return true;

        const trimmedStr = str.trim();

        return trimmedStr.length <= 0;
    }