import { PropsWithChildren } from "react";
import './Box.css'
import { boxStyles } from "./boxStyles";

type BoxProps = PropsWithChildren & {
    radius?: number
};

const Box:React.FC<BoxProps> = ({children, radius=0}) => {
    const styles = boxStyles(radius);

    return <div className="box" style={styles}>
        {children}
    </div>
}

export default Box;
