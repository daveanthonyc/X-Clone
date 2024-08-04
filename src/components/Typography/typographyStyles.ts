type Variant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';

const fontSize = {
    h1: 30,
    h2: 20,
    h3: 10,
    h4: 7,
    h5: 9,
    h6: 6,
    p: 5,
    span: 4
}

function typographyStyles(variant: Variant) {
    switch(variant) {
        case "h1":
            return ({
                fontSize: `${fontSize.h1}px`
            })
        case "h2":
            return ({
                fontSize: `${fontSize.h2}px`
            })
        case "h3":
            return ({
                fontSize: `${fontSize.h3}px`
            })
        case "h4":
            return ({
                fontSize: `${fontSize.h4}px`
            })
        case "h5":
            return ({
                fontSize: `${fontSize.h5}px`
            })
        case "h6":
            return ({
                fontSize: `${fontSize.h6}px`
            })
        case "p":
            return ({
                fontSize: `${fontSize.p}px`
            })
        case "span":
            return ({
                fontSize: `${fontSize.span}px`
            })
    }
}

export default typographyStyles;
