import axios from 'axios'

const Posts = async (req,res) => {
    const respon = await axios.get('https://jsonplaceholder.typicode.com/todos/')
    const posts = respon.data
    return (posts)
}

export default Posts