import { useQuery } from "@tanstack/react-query";
import UseAxiosPublic from "../../hooks/useAxiosPublic";
import TolistCard from "./TolistCard";

const Tolist = () => {
    const axiosPublic = UseAxiosPublic()
    const { data: alltask = [],refetch } = useQuery({
        queryKey: ['alltask'],
        queryFn: async () => {
            const res = await axiosPublic.get('/task')
            return res.data
        }
    })
    const tolist= alltask.filter(card => card.status=="todo")
    return (
        <div className="bg-green-400 min-h-screen">
            <div>
                <h2 className="text-center text-white text-2xl font-bold mt-4">TO DO LIST</h2>
            </div>
            <div className="pb-4">
                {
                    tolist.map(item => <TolistCard key={item._id} refetch={refetch} item={item}></TolistCard>)
                }
            </div>
        </div>
    );
};

export default Tolist;