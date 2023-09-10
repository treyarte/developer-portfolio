import { formatNumberWithCommas } from "@/app/helpers/NumberHelper";

export type CharacterLimitProps = {
    maxCharLimit:number;
    characters:string;
}

/**
 * Display the current character count out of the set max character limit
 * @param props 
 * @returns 
 */
export default function CharacterLimit(props:CharacterLimitProps) {
    const {
        maxCharLimit,
        characters
    } = props;

    //Check if the passed in characters are over the character count
    const CheckMaxLimit = () => {
        return characters.length > maxCharLimit;
    }

    //Display the error class when characters are over the maxCharLimit
    const displayErrorClass = () => {
        if(CheckMaxLimit()) {
            return "text-red";
        }

        return "";
    }

    return (
        <span className={displayErrorClass()}>{formatNumberWithCommas(characters.length)}/{formatNumberWithCommas(maxCharLimit)}</span>
    )
}