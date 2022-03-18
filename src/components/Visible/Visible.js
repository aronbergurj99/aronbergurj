import {Section } from '../../styles/GlobalComponents'
import { SelectedTabContext } from "../../Helpers/Context"
import { useContext, useEffect} from "react";
import { useInView } from "react-intersection-observer";

export default function Visible(props) {
    const {selectedTab, setSelectedTab, setSwitching, switching} = useContext(SelectedTabContext);
    const [ref, inView] = useInView({
        threshold: 1,
    });

    useEffect(()=> {
        if (inView && !switching) {

            setSelectedTab(props.label);
        }
        
        if (switching && selectedTab===props.label) {
            setSwitching(false);
        }
    }, [inView])

    return (
        <div
            ref={ref}
        >
            {props.children}
        </div>
    )
}