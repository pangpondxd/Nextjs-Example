import {useRouter} from 'next/router'


const movie = () => { 
    const router = useRouter()
    const {id} = router.query
    return (
        <div className="container">
            <h1>
                Movie with id: {id}
            </h1>
        </div>
    )
}
export default movie