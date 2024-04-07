import { memo } from "react"
import './EditTodoForm.scss'

const EditTodoForm = () => {
    const [value, setValue] = useState(" ");

    const handleSubmit = e => {
        e.preventDefault();
    }
    return (
        <form action="input" onSubmit={handleSubmit}>
            <input type="text" value={value} placeholder="Update task......" onChange={(e) => setValue(e.target.value)} />
            <button onClick={addTodos}>Update Task</button>
        </form>
    )
}
export default memo(EditTodoForm)