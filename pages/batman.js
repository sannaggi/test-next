import Layout from '../comps/Layout'
import fetch from 'isomorphic-unfetch'
import Link from 'next/link'

const Index = props => (
    <Layout>
        <h1>Batman TV Shows</h1>
        <ul>
            {
                props.shows.map(show => (
                    <li key={show.id}>
                        <Link href="/b/[id]" as={ `/b/${show.id}` }>
                            <a>{show.name}</a>
                        </Link>
                    </li>
                ))
            }
        </ul>
    </Layout>
)

Index.getInitialProps = async function() {
    const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
    const data = await res.json()

    console.log(`Count: ${data.length}`)

    return {
        shows: data.map(entry => entry.show)
    }
}

export default Index