import {ReactComponent as NetcentricIcon} from "../../../assets/svgs/ic-netcentric.svg";
import {ReactComponent as TalkdeskIcon} from "../../../assets/svgs/ic-talkdesk.svg";
import {ReactComponent as ISTIcon} from "../../../assets/svgs/ic-ist.svg";
import {ReactComponent as AaltoIcon} from "../../../assets/svgs/ic-aalto.svg";
import {ReactComponent as ISCTEIcon} from "../../../assets/svgs/ic-iscte.svg";
import {ReactComponent as TeslaIcon} from "../../../assets/svgs/ic-tesla.svg";

export const mapSVG = (logo: string) =>{
    switch(logo){
        case "ic-netcentric":
            return <NetcentricIcon/>
        case "ic-talkdesk":
            return <TalkdeskIcon/>
        case "ic-ist":
            return <ISTIcon/>
        case "ic-aalto":
            return <AaltoIcon/>
        case "ic-iscte":
            return <ISCTEIcon/>
        case "ic-tesla":
            return <TeslaIcon/>
        default:
            return <TalkdeskIcon fill="transparent"/>
    }
}

export const isPresentDate = (time: string) => {
    if (time === 'Present')
        return 'contrast'
    else return ''
}

export const isGradeSet = (value: string) => {
    if (value === 'N/A')
        return 'low-contrast'
    else return 'contrast'
}
