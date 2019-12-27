import React from 'react'
import Link from 'next/link'
import Typography from '@material-ui/core/Typography'

const TypographyLINK = ({href, title, as, style, variant, color}) => {
    return(
    <Link href={href} as={as} >
        <Typography variant={variant} style={style} color={color} >{title}</Typography>
    </Link>
    )
}

export default TypographyLINK