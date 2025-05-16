import "../donation-form/donation-form.scss";
import { useState } from "react";

export default function Form() {
    const [placeholder, setPlaceholder] = useState("");
    const [amount, setAmount] = useState("");
    const [errors, setErrors] = useState({});

    const handleSelectChange = (event) => {
        const selectedValue = event.target.value;

        // Set specific prices as the placeholder based on the selected option
        if (selectedValue === "1") {
            setPlaceholder("Minimum 4000 kr.");
        } else if (selectedValue === "2") {
            setPlaceholder("Minimum 2000 kr.");
        } else if (selectedValue === "3") {
            setPlaceholder("Tilføj et beløb");
        } else {
            setPlaceholder("");
        }
    };

    const BASE_CLASS = "donation-form"

    const handleAmountChange = (event) => {
        setAmount(event.target.value);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        const newErrors = {};
    
        // Validate required fields
        if (!event.target.name.value) {
            newErrors.name = "Firmanavn er påkrævet";
        }
        if (!event.target.address.value) {
            newErrors.address = "Adresse er påkrævet";
        }
        if (!event.target.phone.value) {
            newErrors.phone = "Telefonnummer er påkrævet";
        }
        if (!amount) {
            newErrors.amount = "Beløb er påkrævet";
        }
    
        // Validate amounts minimum requirements
        if (amount < 4000 && event.target.supportType.value === "1") {
            newErrors.amount = "Minimum 4000 kr. for Børnesponsorat";
        } else if (amount < 2000 && event.target.supportType.value === "2") {
            newErrors.amount = "Minimum 2000 kr. for Lejrsponsorat";
        } else if (amount < 1 && event.target.supportType.value === "3") {
            newErrors.amount = "Minimum 1 kr. for Støtte til foreningen";
        }
    
        setErrors(newErrors);
    
        // If no errors, proceed with form submission
        if (Object.keys(newErrors).length === 0) {
            alert("Formularen er sendt!");
        }
    };
    
    return (
        <>
            <form className={BASE_CLASS} onSubmit={handleSubmit}>
                <div className={`${BASE_CLASS}__select`}>
                    <label htmlFor="supportType">Støttetype</label>
                    <select name="supportType" id="supportType" onChange={handleSelectChange}>
                        <option>Vælg en Støttetype</option>
                        <option value="1">Børnesponsorat</option>
                        <option value="2">Lejrsponsorat</option>
                        <option value="3">Støtte til foreningen</option>
                    </select>
                </div>
                <div className={`${BASE_CLASS}__select`}>
                    <label htmlFor="name">Firmanavn*</label>
                    <input type="text" id="name" name="name" placeholder="Indtast firmanavn" />
                    {errors.name && <div className="error">{errors.name}</div>}
                </div>
                <div className={`${BASE_CLASS}__select`}>
                    <label htmlFor="email">Mail*</label>
                    <input type="email" id="email" name="email" placeholder="Indtast mailadresse" required />
                </div>
                <div className={`${BASE_CLASS}__select`}>
                    <label htmlFor="address">Adresse*</label>
                    <input type="text" id="address" name="address" placeholder="Indtast adresse" />
                    {errors.address && <div className="error">{errors.address}</div>}
                </div>
                <div className={`${BASE_CLASS}__select`}>
                    <label htmlFor="phone">Telefon</label>
                    <input type="tel" id="phone" name="phone" placeholder="Indtast telefonnummer" />
                    {errors.phone && <div className="error">{errors.phone}</div>}
                </div>
                <div className={`${BASE_CLASS}__select`}>
                    <label htmlFor="amount">Beløb*</label>
                    <input
                        type="number"
                        id="amount"
                        name="amount"
                        placeholder={placeholder}
                        value={amount}
                        onChange={handleAmountChange}
                    />
                    {errors.amount && <div className="error">{errors.amount}</div>}
                </div>
                <button className={`${BASE_CLASS}__button`}type="submit">donér</button>
            </form>
        </>
    );
}