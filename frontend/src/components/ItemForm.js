import React, {useEffect, useState} from 'react';
import axios from 'axios';

const ItemForm = ({item, onSuccess}) =>{
    const[LastName, setLastName] = useState('');
    const[FirstName, setFirstName] = useState('');
    const[MiddleName, setMiddleName] = useState('');
    const[DateOfBirth, setDateOfBirth] = useState('');
    const[PlaceOfBirth, setPlaceOfBirth] = useState('');
    const[Sex, setSex] = useState('');
    const[CivilStatus, setCivilStatus] = useState ('');
    const[Citizenship, setCitizenship] = useState('');
    const[Height, setHeight] = useState ('');
    const[Weight, setWeight] = useState ('');
    const[BloodType, setBloodType] = useState ('');
    const[ContactNumber, setContactNumber] = useState ('');
    const[Address, setAddress] = useState ('');
    const[Email, setEmail] = useState ('');
    const[MotherLastName, setMotherLastName] = useState ('');
    const[MotherFirstName, setMotherFirstName] = useState ('');
    const[MotherMiddleName, setMotherMiddleName] = useState ('');
    const[FatherLastName, setFatherLastName] = useState ('');
    const[FatherFirstName, setFatherFirstName] = useState ('');
    const[FatherMiddleName, setFatherMiddleName] = useState ('');

    useEffect(() => {
        if (item) {
            setLastName(item.last_name || '');
            setFirstName(item.first_name || '');
            setMiddleName(item.middle_name || '');
            setDateOfBirth(item.date_of_birth || '');
            setPlaceOfBirth(item.place_of_birth || '');
            setSex(item.sex || '');
            setCivilStatus(item.civil_status || '');
            setCitizenship(item.citizenship || '');
            setHeight(item.height || '');
            setWeight(item.weight || '');
            setBloodType(item.blood_type || '');
            setContactNumber(item.contact_number || '');
            setAddress(item.address || '');
            setEmail(item.email || '');
            setMotherLastName(item.mother_last_name || '');
            setMotherFirstName(item.mother_first_name || '');
            setMotherMiddleName(item.mother_middle_name || '');
            setFatherLastName(item.father_last_name || '');
            setFatherFirstName(item.father_first_name || '');
            setFatherMiddleName(item.father_middle_name || '');
        }
    }, [item]);
    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = {
            last_name: LastName,
            first_name: FirstName,
            middle_name: MiddleName,
            date_of_birth: DateOfBirth,
            place_of_birth: PlaceOfBirth,
            sex: Sex,
            civil_status: CivilStatus,
            citizenship: Citizenship,
            height: Height,
            weight: Weight,
            blood_type: BloodType,
            contact_number: ContactNumber,
            address: Address,
            email: Email,
            mother_last_name: MotherLastName,
            mother_first_name: MotherFirstName,
            mother_middle_name: MotherMiddleName,
            father_last_name: FatherLastName,
            father_first_name: FatherFirstName,
            father_middle_name: FatherMiddleName,
        };

        try {
            if (item){
                await
                axios.put(`http://localhost:8000/api/items/${item.id}/`, data);
            } else {
                axios.post('http://localhost:8000/api/items/', data);
            }
            onSuccess();
        } catch (error) {
            console.error('There was an error submitting the form!', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Last Name:</label>
                <input type='text' value={LastName} onChange={(e) => setLastName(e.target.value)}/>
            </div>
            <div>
                <label>First Name:</label>
                <input type='text' value={FirstName} onChange={(e) => setFirstName(e.target.value)}/>
            </div>
            <div>
                <label>Middle Name:</label>
                <input type='text' value={MiddleName} onChange={(e) => setMiddleName(e.target.value)}/>
            </div>
            <div>
                <label>Date Of Birth:</label>
                <input type='text' value={DateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)}/>
            </div>
            <div>
                <label>Place Of Birth:</label>
                <input type='text' value={PlaceOfBirth} onChange={(e) => setPlaceOfBirth(e.target.value)}/>
            </div>
            <div>
                <label>Sex:</label>
                <input type='text' value={Sex} onChange={(e) => setSex(e.target.value)}/>
            </div>
            <div>
                <label>Civil Status:</label>
                <input type='text' value={CivilStatus} onChange={(e) => setCivilStatus(e.target.value)}/>
            </div>
            <div>
                <label>Citizenship:</label>
                <input type='text' value={Citizenship} onChange={(e) => setCitizenship(e.target.value)}/>
            </div>
            <div>
                <label>Height:</label>
                <input type='text' value={Height} onChange={(e) => setHeight(e.target.value)}/>
            </div>
            <div>
                <label>Weight:</label>
                <input type='text' value={Weight} onChange={(e) => setWeight(e.target.value)}/>
            </div>
            <div>
                <label>Blood Type:</label>
                <input type='text' value={BloodType} onChange={(e) => setBloodType(e.target.value)}/>
            </div>
            <div>
                <label>Contact Number:</label>
                <input type='text' value={ContactNumber} onChange={(e) => setContactNumber(e.target.value)}/>
            </div>
            <div>
                <label>Address:</label>
                <input type='text' value={Address} onChange={(e) => setAddress(e.target.value)}/>
            </div>
            <div>
                <label>Email:</label>
                <input type='text' value={Email} onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div>
                <label>Mother's Last Name:</label>
                <input type='text' value={MotherLastName} onChange={(e) => setMotherLastName(e.target.value)}/>
            </div>
            <div>
                <label>Mother's First Name:</label>
                <input type='text' value={MotherFirstName} onChange={(e) => setMotherFirstName(e.target.value)}/>
            </div>
            <div>
                <label>Mother's MiddleName:</label>
                <input type='text' value={MotherMiddleName} onChange={(e) => setMotherMiddleName(e.target.value)}/>
            </div>
            <div>
                <label>Father's Last Name:</label>
                <input type='text' value={FatherLastName} onChange={(e) => setFatherLastName(e.target.value)}/>
            </div>
            <div>
                <label>Father's First Name:</label>
                <input type='text' value={FatherFirstName} onChange={(e) => setFatherFirstName(e.target.value)}/>
            </div>
            <div>
                <label>Father's Middle Name:</label>
                <input type='text' value={FatherMiddleName} onChange={(e) => setFatherMiddleName(e.target.value)}/>
            </div>

            <button type='submit'>Submit</button>
        </form>
    );

}

export default ItemForm;