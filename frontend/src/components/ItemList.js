import React, {useEffect, useState} from 'react';
import axios from 'axios';


const ItemList = ({onEdit, onDelete}) => {
    const [items, setItems] = useState ([]);
    useEffect( () => {
        fetchItems();
    }, []);

    const fetchItems = async () => {
        try {
            const response = await
            axios.get(`http://localhost:8000/api/items/`);
            setItems(response.data);
        } catch (error) {
            console.error('There was an error fetching the items!', error)
        }
    };

    return (
        <div>
            <h1>Items</h1>
            <ul>
                {items.map(item => (
                    <li key={item.id}>
                        {item.last_name} : {item.first_name} : {item.middle_name} : {item.date_of_birth} : {item.place_of_birth} : {item.sex} :
                        {item.civil_status} : {item.citizenship} : {item.height} : {item.weight} : {item.blood_type} : {item.contact_number} :
                        {item.address} : {item.email} : {item.mother_last_name} : {item.mother_first_name} : 
                        {item.mother_middle_name} : {item.father_last_name} : {item.father_first_name} : {item.father_middle_name} 
                        <button onClick={() => onEdit(item)}>Edit</button>
                        <button onClick={() => onDelete(item.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );

};

export default ItemList;