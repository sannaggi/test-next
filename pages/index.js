import Layout from '../comps/Layout'
import Link from 'next/link'

const PostLink = props => (
    <li>
        <Link href="/[id]" as={`/${props.id}`}>
            <a>{props.id}</a>
        </Link>
    </li>
)

const Index = () => (
    <Layout>
        <h1>Hahah</h1>
        <ul>
            <PostLink id="sad"/>
            <PostLink id="dudu"/>
        </ul>
    </Layout>
)

export default Index