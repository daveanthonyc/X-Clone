import { PropsWithChildren } from "react";
import './Button.css'
import { buttonStyles } from "./styles";

type ButtonProps = PropsWithChildren & {
    type?: string;
};

const Button:React.FC<ButtonProps> = ({children, type='regular'}) => {
    const styles = buttonStyles(type);

    return <button className="button outlined" style={styles}>
       {children} 
    </button>
}

export default Button;
