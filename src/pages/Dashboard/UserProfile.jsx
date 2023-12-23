import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviers";
import UseAxiosPublic from "../../hooks/useAxiosPublic";
import moment from "moment";


const UserProfile = () => {
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
    const date = moment().format('D/MMM/YYYY')
    const mytask = alltask.filter(item => item.email == email)
    const mytodotask = alltask.filter(item => item.email == email && item.status == "todo")
    const myongoingtask = alltask.filter(item => item.email == email && item.status == "ongoing")
    const mycompletetask = alltask.filter(item => item.email == email && item.status == "complete")
    const mytodolength = mytodotask.length
    const myongoinglength = myongoingtask.length
    const mycompletelength = mycompletetask.length
    const mytasklength = mytask.length
    const todopercent = (mytodolength / mytasklength) * 100
    const todopercents = parseInt(todopercent)
    const ongoingpercent = (myongoinglength / mytasklength) * 100
    const ongoingpercents = parseInt(ongoingpercent)
    const completepercent = (mycompletelength / mytasklength) * 100
    const completepercents = parseInt(completepercent)

    return (
        <div>

            <div className="flex items-center justify-center bg-gray-800 p-4 md:h-40">
                <div className="flex flex-col md:flex-row">
                    <div className="bg-gray-700 flex items-start h-28 md:w-40 w-60 justify-center px-4 mx-0.5 my-0.5">
                        <div className="flex-col">
                            <div className="text-sm font-medium text-gray-400 my-2">Todo Task</div>
                            <div className="className flex items-center">
                                <div className="text-3xl font-bold text-gray-200">{mytodolength}</div>
                                <div className={`flex items-center justify-between mx-2 px-0.5 py-0.5 rounded-xl text-red-500 font-medium `}>
                                    <div>{todopercents}%</div>
                                </div>
                            </div>
                            <div className="w-full h-0.5 bg-gray-400">
                                <div className={`w-[30%] h-0.5 bg-red-500`}></div>
                            </div>
                            <div className="text-sm font-medium text-gray-400 ">{date}</div>
                        </div>
                    </div>
                    <div className="bg-gray-700 flex items-start h-28 md:w-40 w-60 justify-center px-4 mx-0.5 my-0.5">
                        <div className="flex-col">
                            <div className="text-sm font-medium text-gray-400 my-2">Ongoing Tasks</div>
                            <div className="className flex items-center">
                                <div className="text-3xl font-bold text-gray-200">{myongoinglength}</div>
                                <div className="flex items-center justify-between mx-2 px-0.5 py-0.5 rounded-xl text-green-500 font-medium ">
                                    <div>{ongoingpercents}%</div>
                                </div>
                            </div>
                            <div className="w-full h-0.5 bg-gray-400">
                                <div className="w-[85%] h-0.5 bg-green-500"></div>
                            </div>
                            <div className="text-sm font-medium text-gray-400 ">{date}</div>
                        </div>
                    </div>
                    <div className="bg-gray-700 flex items-start h-28 md:w-40 w-60 justify-center px-4 mx-0.5 my-0.5">
                        <div className="flex-col">
                            <div className="text-sm font-medium text-gray-400 my-2">Complete Tasks</div>
                            <div className="className flex items-center">
                                <div className="text-3xl font-bold text-gray-200">{mycompletelength}</div>
                                <div className="flex items-center justify-between mx-2 px-0.5 py-0.5 rounded-xl text-red-500 font-medium ">
                                    <div>{completepercents }%</div>
                                </div>
                            </div>
                            <div className="w-full h-0.5 bg-gray-400">
                                <div className="w-[40%] h-0.5 bg-red-500"></div>
                            </div>
                            <div className="text-sm font-medium text-gray-400 ">{date}</div>
                        </div>
                    </div>
                    <div className="bg-gray-700 flex items-start h-28 md:w-40 w-60 justify-center px-4 mx-0.5 my-0.5">
                        <div className="flex-col">
                            <div className="text-sm font-medium text-gray-400 my-2">Total Tasks</div>
                            <div className="className flex items-center">
                                <div className="text-3xl font-bold text-gray-200">{mytasklength}</div>
                                <div className="flex items-center justify-between mx-2 px-0.5 py-0.5 rounded-xl text-green-500 font-medium ">
                                    <div>100%</div>
                                </div>
                            </div>
                            <div className="w-full h-0.5 bg-gray-400">
                                <div className="w-[100%] h-0.5 bg-green-500"></div>
                            </div>
                            <div className="text-sm font-medium text-gray-400 ">{date}</div>
                        </div>
                    </div>

                </div>
            </div>


        </div>
    );
};

export default UserProfile;