import { PropsWithChildren } from "react";
import typographyStyles from "./typographyStyles";

type TypographyProps = PropsWithChildren & {
    variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'
}

const Typography: React.FC<TypographyProps> = ({children, variant='h1'}) => {
    const styles = typographyStyles(variant);

    switch(variant) {
        case "h1":
            return (
                <h1 style={styles}>{children}</h1>
            )
        case "h2":
            return (
                <h2 style={styles}>{children}</h2>
            )
        case "h3":
            return (
                <h3 style={styles}>{children}</h3>
            )
        case "h4":
            return (
                <h4 style={styles}>{children}</h4>
            )
        case "h5":
            return (
                <h5 style={styles}>{children}</h5>
            )
        case "h6":
            return (
                <h6 style={styles}>{children}</h6>
            )
        case "p":
            return (
                <p style={styles}>{children}</p>
            )
        case "span":
            return (
                <span style={styles}>{children}</span>
            )
    }
}

export default Typography;
