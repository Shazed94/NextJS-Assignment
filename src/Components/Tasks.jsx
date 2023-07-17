/* eslint-disable react/prop-types */


const Tasks = ({ tasks, removeTask }) => {
    return (
        <div className="">
            {tasks.map((task, index) => (
                <li key={index} className="list-unstyled text-start d-flex justify-content-center align-items-center mb-3">
                    <div className="form-check">
                        <input className="form-check-input p-1" type="checkbox" value="" id="flexCheckDefault" />
                    </div>
                    <p className="mb-0 mx-3">{task}</p>
                    <button className="btn btn-danger" onClick={() => removeTask(index)}>Remove</button>
                </li>
            ))}</div>
    )
}

export default Tasks