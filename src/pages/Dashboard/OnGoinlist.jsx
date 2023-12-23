import { useQuery } from "@tanstack/react-query";
import UseAxiosPublic from "../../hooks/useAxiosPublic";
import OnGoinglistcard from "./OnGoinglistcard";


const OnGoinlist = () => {
    const axiosPublic = UseAxiosPublic()
    const { data: alltask = [],refetch } = useQuery({
        queryKey: ['alltask'],
        queryFn: async () => {
            const res = await axiosPublic.get('/task')
            return res.data
        }
    })
    const ongoinglist= alltask.filter(card => card.status=="ongoing")
    return (
        <div className="bg-yellow-400 min-h-screen">
            <div className="">
                <div>
                    <h2 className="text-center text-white text-2xl font-bold mt-4">ON GOING LIST</h2>
                </div>
                <div className="pb-4">
                    {
                        ongoinglist.map(item => <OnGoinglistcard key={item._id} refetch={refetch} item={item}></OnGoinglistcard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default OnGoinlist;