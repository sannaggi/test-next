import Link from 'next/link'

const Navbar = () => (
    <div>
        <ul>
            <li><Link href="/"><a title="Home">Home</a></Link></li>
            <li><Link href="/about"><a title="About">About</a></Link></li>
        </ul>
    </div>
)

export default Navbar