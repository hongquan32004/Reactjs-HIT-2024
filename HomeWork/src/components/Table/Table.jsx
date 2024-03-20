import './Table.css'
import data from '../../data/post.json'
const Table = () => {
    return (
        <div className="post-table">
            <table className="table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Tittle</th>
                        <th>Body</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td>{item.id}</td>
                            <td>{item.title}</td>
                            <td>{item.body}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
export default Table;