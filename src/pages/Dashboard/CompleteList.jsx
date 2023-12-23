import { useQuery } from "@tanstack/react-query";
import UseAxiosPublic from "../../hooks/useAxiosPublic";
import CompleteListCard from "./CompleteListCard";


const CompleteList = () => {
    const axiosPublic = UseAxiosPublic()
    const { data: alltask = [], refetch } = useQuery({
        queryKey: ['alltask'],
        queryFn: async () => {
            const res = await axiosPublic.get('/task')
            return res.data
        }
    })
    const completelist = alltask.filter(card => card.status == "complete")
    return (
        <div className="bg-red-400 min-h-screen ">
            <div>
                <h2 className="text-center text-white text-2xl font-bold mt-4">COMPLETE LIST</h2>
            </div>
            <div className="pb-4">
                {
                    completelist.map(item => <CompleteListCard key={item._id} refetch={refetch} item={item}></CompleteListCard>)
                }
            </div>
        </div>
    );
};

export default CompleteList;