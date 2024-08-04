export function buttonStyles(type: string, size: string) {
    const typeStyles = buttonTypeStyles(type);
    const sizeStyles = buttonSizeStyles(size);

    return {...typeStyles, ...sizeStyles};
}

function buttonTypeStyles(type: string) {
    switch(type) {
        case 'outlined':
            return ({
                background: 'none',
                border: '1px solid rgba(255,255,255,0.5)',
                color: '#1DA1F2'
            })
        case 'regular':
            return ({
                backgroundColor: '#1DA1F2'
            })
        case 'accent':
            return ({
                backgroundColor: 'none',
            })
        default:
            return (
                {
                    border: '2px solid red'
                }
        )
    }
}

function buttonSizeStyles(size: string) {
    switch(size) {
        case 'sm':
            return ({
                padding: '5px',
                fontSize: '13px',
                fontWeight: '700',
            })
        case 'md':
            return ({
                padding: '10px',
                fontSize: '15px',
                fontWeight: '700',
            })
        case 'lg':
            return ({
                padding: '13px',
                fontSize: '18px',
                fontWeight: '700',
            })
        default:
            return (
                {
                    border: '2px solid red'
                }
        )
    }
}
