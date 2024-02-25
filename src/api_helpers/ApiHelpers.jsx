import axios from "axios"
import { alertAction, carsAction } from "../store"

// export function getAllCars() {
//     async dispatch => {
//         dispatch(alertAction.isLoading(true));

//         try {
//             const res = await axios.get('/api/cars/getAllCars')
//             dispatch(carsAction.getAllCars(res.data));
//             dispatch(alertAction.isLoading(false));
//         } catch (err) {
//             console.log(err);
//             dispatch(alertAction.isLoading(false));
//         }
//     }
// }

// export async function getAllCars() {
//     const res = await axios.get("/api/cars/getAllCars")
//         .catch((err) => console.log(err));

//     if (res.status !== 200) {
//         return console.log("No Data");
//     }

//     let data = null;
//     if (res) {
//         data = await res.data;
//     }
//     return data;
// }