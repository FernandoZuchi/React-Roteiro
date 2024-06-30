import { useEffect, useState } from "react";
import axios from "axios";

function GihtubUser(props) {
    const [user, setUser] = useState(null); // Estado e função para atualizar estado
    useEffect(() => {
        async function fetchUser() { // Consumindo a API com o uso do axios
            const response = await axios.get(`https://api.github.com/users/${props.userName}`);
            const data = response.data; // Guardando o consumo na variável data
            setUser(data)
        }
        fetchUser(); // Chamando a função para requisitar o consumo da API
    }, []);


    if (!user) return <p>Loading...</p>;
    return (
        <div>
            <h2>{user.name}</h2>
            <p>{user.bio}</p>
            <img src={user.avatar_url} alt={user.name} width="100" />
        </div>
    );
}
export default GihtubUser

