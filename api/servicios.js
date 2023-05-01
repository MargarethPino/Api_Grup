import axios from "axios";
 //RUTAS DEL API 
const API_URL = "https://api-colombia.com/api/v1"

//Obtner info Colombia
export const GetColombiaInfo = async () => {
    const response = await axios.get(`${API_URL}/Country/Colombia`);
     return response.data;
}
// Obetner info de las Regiones 
export const GetRegionesColombia  = async () => {
    const response = await axios.get(`${API_URL}/Region`);
     return response.data;
}
//Obtener info de la region de colombia
export const GetRegionColombia = async  id  => {
    const response = await axios.get(`${API_URL}/Region/${id}`);
     return response.data;
}
export const GetCategoryNaturalArea = async  ()  => {
    const response = await axios.get(`${API_URL}/CategoryNaturalArea`);
     return response.data;
}
export const GetNaturalArea = async  id  => {
    const response = await axios.get(`${API_URL}/NaturalArea`);
     return response.data;
}