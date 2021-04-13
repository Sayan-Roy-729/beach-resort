import RoomsFilter from './RoomsFilter';
import RoomList from './RoomList';
import { withRoomConsumer } from '../context';
import Loading from './Loading';

const RoomContainer = (props) => {
    const {loading, sortedRooms, rooms} = props.context;

    if (loading) return <Loading />;

    return (
        <>
            <RoomsFilter rooms = {rooms}/>
            <RoomList rooms = {sortedRooms}/>
        </>
    );
}

export default withRoomConsumer(RoomContainer);

// const RoomsContainer = (props) => {
//     return (
//         <RoomConsumer>
//             {(value) => {
//                 const {loading, sortedRooms, rooms} = value;

                // if (loading) return <Loading />;

                // return (
                //     <div>
                //         Hello from Rooms Container
                //         <RoomsFilter rooms = {rooms}/>
                //         <RoomList rooms = {sortedRooms}/>
                //     </div>
                // );
//             }}
//         </RoomConsumer>
//     );
// };

// export default RoomsContainer;
