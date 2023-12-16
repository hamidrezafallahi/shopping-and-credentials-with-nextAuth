import Link from 'next/link'

export default function Dropdown({href,children,...rest}){
return(
    <Link legacyBehavior href={href}>
        <a {...rest}>{children}</a>
    </Link>
)
}