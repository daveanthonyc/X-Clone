export function buttonStyles(type?: string) {
    switch(type) {
        case 'outlined':
            return ({
                backgroundColor: 'none',
                border: '1px solid rgba(255,255,255,0.5)',
                color: '#1DA1F2'
            })
        case 'regular':
            return ({
                backgroundColor: '#1DA1F2'
            })
        case 'accent':
            break;
        default:
            return (
                {
                    border: '2px solid red'
                }
        )
    }
}
