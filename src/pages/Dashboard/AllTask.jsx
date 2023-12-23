import CompleteList from "./CompleteList";
import OnGoinlist from "./OnGoinlist";
import Tolist from "./Tolist";





const AllTask = () => {
    
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
            <Tolist></Tolist>
            <OnGoinlist></OnGoinlist>
            <CompleteList></CompleteList>
        </div>
    );
};

export default AllTask;