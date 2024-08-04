import { ButtonHTMLAttributes, PropsWithChildren } from "react";
import './Button.css'
import { buttonStyles } from "./styles";

type ButtonProps = PropsWithChildren & ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: string,
    size?: 'sm' | 'md' | 'lg'
};


const Button:React.FC<ButtonProps> = ({children, variant='regular', size='md', ...props}) => {
    const styles = buttonStyles(variant, size);

    return <button className="button outlined" style={styles} {...props}>
       {children} 
    </button>
}

export default Button;
