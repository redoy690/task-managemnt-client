import Swal from "sweetalert2";
import UseAxiosPublic from "../../hooks/useAxiosPublic";


const CompleteListCard = ({ item, refetch }) => {
    const axiosPublic = UseAxiosPublic()
    const handletodo = (id) => {
        const status = "todo"
        const newstatus = { status }
        axiosPublic.put(`/task/${id}`, newstatus)
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    Swal.fire({
                        position: "top-center",
                        icon: "success",
                        title: "Sucessfully Move to todo List",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    refetch()
                }
            })
    }
    const handleongoing = (id) => {
        const status = "ongoing"
        const newstatus = { status }
        axiosPublic.put(`/task/${id}`, newstatus)
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    Swal.fire({
                        position: "top-center",
                        icon: "success",
                        title: "Sucessfully Move to Ongoing List",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    refetch()
                }
            })
    }
    return (
        <div>
            <div>
                <div>
                    <div className="card bg-base-100 shadow-xl m-4 h-[310px]">
                        <div className="card-body">
                            <h2 className="card-title">Title: {item.title}</h2>
                            <h2 className="text-xl">Category: {item.category}</h2>
                            <h2 className="text-xl">DeadLine: {item.deadline.slice(8, 10)}-{item.deadline.slice(5, 7)}-{item.deadline.slice(0, 4)}</h2>
                            <p>Description: {item.description.slice(0, 85)}</p>
                            <div className="card-actions mt-4">
                                <button onClick={() => handletodo(item._id)} className="btn btn-primary w-[48%]">Todo List</button>
                                <button onClick={() => handleongoing(item._id)} className="btn btn-primary w-[48%]">Ongoing List</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CompleteListCard;