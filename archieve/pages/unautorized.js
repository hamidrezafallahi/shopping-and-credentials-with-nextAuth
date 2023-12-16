import Layout from "../components/Layout"
export default function Unautorized(){
    return(<>
    <Layout title='Access Denied'>
    <h2 className="text-red-300">access denied</h2>
    </Layout>
    </>)
}