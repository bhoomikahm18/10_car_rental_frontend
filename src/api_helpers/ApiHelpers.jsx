import axios from "axios"

export async function getAllCars() {
    const res = await axios.get("/api/cars/getAllCars")
        .catch((err) => console.log(err));

    if (res.status !== 200) {
        return console.log("No Data");
    }

    let data = null;
    if (res) {
        data = await res.data;
    }
    return data;
}