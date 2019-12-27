import React from 'react'
import Link from 'next/link'
import Button from '@material-ui/core/Button'

const LinkMUI = ({href, title, as, style, variant, color}) => {
    return(
    <Link href={href} as={as} >
        <Button variant={variant} style={style} color={color} >{title}</Button>
    </Link>
    )
}

export default LinkMUI