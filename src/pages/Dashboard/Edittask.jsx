import { useQuery } from "@tanstack/react-query";
import UseAxiosPublic from "../../hooks/useAxiosPublic";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviers";
import Edittaskcard from "./Edittaskcard";



const Edittask = () => {
    const { user } = useContext(AuthContext)
    const email = user?.email || ""
    const axiosPublic = UseAxiosPublic()
    const { data: alltask = [] } = useQuery({
        queryKey: ['alltask'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/task`)
            return res.data
        }
    })
    const mytask = alltask.filter(item=> item.email == email)
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {
                mytask.map(item=> <Edittaskcard key={item._id} item={item}></Edittaskcard>)
            }
        </div>
    );
};

export default Edittask;