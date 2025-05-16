import "../donation-form/donation-form.scss";
import { useEffect, useState } from "react";

export default function Form() {
    const [placeholder, setPlaceholder] = useState("");
    const [amount, setAmount] = useState("");
    const [errors, setErrors] = useState({});
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [companyName, setCompanyName] = useState("");
    const [supportType, setSupportType] = useState("");
    const [successMessage, setSuccessMessage] = useState(""); // State for success message


    useEffect(() => {
        localStorage.setItem("PhoneNumber", setPhoneNumber);
        localStorage.setItem("amount", setAmount);
        localStorage.setItem("Email", setEmail);
        localStorage.setItem("Address", setAddress);
        localStorage.setItem("CompanyName", setCompanyName);
        localStorage.setItem("SupportType", setSupportType);
    }, [setPhoneNumber, setEmail, setAddress, setCompanyName, setSupportType])

    const handlePhoneChange = (event) => {
        const phoneValue = event.target.value;

        // Allow only numbers
        if (/^\d*$/.test(phoneValue)) {
            setPhoneNumber(phoneValue);
        }
    };
    const handleEmailChange = (event) => {
        const emailValue = event.target.value;
        setEmail(emailValue);
    };

    const handleAddressChange = (event) => {
        const addressValue = event.target.value;
        setAddress(addressValue);
    };
    const handleCompanyChange = (event) => {
        const companyValue = event.target.value;
        setCompanyName(companyValue);
    };
    const handleAmountChange = (event) => {
        setAmount(event.target.value);
    };


    const handleSelectChange = (event) => {
        const selectedValue = event.target.value;
        const selectedText = event.target.options[event.target.selectedIndex].text; // Get the text of the selected option

        setSupportType(selectedText);

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
    // Define a base class for the component
    const BASE_CLASS = "donation-form"


    const handleSubmit = (event) => {
        event.preventDefault();
        const newErrors = {};

        // Validate required fields
        if (!supportType || supportType === "Vælg en Støttetype") {
            newErrors.supportType = "Du skal vælge en støttetype";
        }
        if (!companyName) {
            newErrors.name = "Firmanavn er påkrævet";
        }
        if (!address) {
            newErrors.address = "Adresse er påkrævet";
        }
        if (!phoneNumber) {
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
            const sponsorData = {
                supportType,
                companyName,
                address,
                phoneNumber,
                email,
                amount,
            };

            // Save the sponsor data to localStorage
            const existingSponsors = JSON.parse(localStorage.getItem("sponsors")) || [];
            existingSponsors.push(sponsorData);
            localStorage.setItem("sponsors", JSON.stringify(existingSponsors));

            // Set success message
            setSuccessMessage("Tak for din donation! Din støtte betyder meget for os.");

            setSupportType("");
            setCompanyName("");
            setAddress("");
            setPhoneNumber("");
            setEmail("");
            setAmount("");
            setPlaceholder(""); // Reset placeholder if needed
        } else {
            // Clear success message if there are errors
            setSuccessMessage("");
        }

    };

    return (
        <>
            <form className={BASE_CLASS} onSubmit={handleSubmit}>
                <div className={`${BASE_CLASS}__select`}>
                    <label htmlFor="supportType" className={`${BASE_CLASS}__input-titles`}>Støttetype</label>
                    <select name="supportType" id="supportType" onChange={handleSelectChange}>
                        <option>Vælg en Støttetype</option>
                        <option value="1">Børnesponsorat</option>
                        <option value="2">Lejrsponsorat</option>
                        <option value="3">Støtte til foreningen</option>
                    </select>
                    <div className="error-container">
                        {errors.supportType && <div className="error">{errors.supportType}</div>}
                    </div>
                </div>
                <div className={`${BASE_CLASS}__select`}>
                    <label htmlFor="name" className={`${BASE_CLASS}__input-titles`}>Firmanavn*</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Indtast firmanavn"
                        onChange={handleCompanyChange}
                    />
                    <div className="error-container">
                        {errors.name && <div className="error">{errors.name}</div>}
                    </div>
                </div>
                <div className={`${BASE_CLASS}__select`}>
                    <label htmlFor="email" className={`${BASE_CLASS}__input-titles`}>Mail*</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Indtast mailadresse"
                        onChange={handleEmailChange}
                        required />
                    <div className="error-container">
                        {errors.email && <div className="error">{errors.email}</div>}
                    </div>
                </div>
                <div className={`${BASE_CLASS}__select`}>
                    <label htmlFor="address" className={`${BASE_CLASS}__input-titles`}>Adresse*</label>
                    <input
                        type="text"
                        id="address"
                        name="address"
                        placeholder="Indtast adresse"
                        onChange={handleAddressChange}
                    />
                    <div className="error-container">
                        {errors.address && <div className="error">{errors.address}</div>}
                    </div>
                </div>
                <div className={`${BASE_CLASS}__select`}>
                    <label htmlFor="phone" className={`${BASE_CLASS}__input-titles`}>Telefon</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="Indtast telefonnummer"
                        onChange={handlePhoneChange}
                        value={phoneNumber}
                        pattern="[0-9]{8}" // Accept only 8 digits
                        maxLength="8" // Limit the length to 8 characters


                    />
                    <div className="error-container">
                        {errors.phoneNumber && <div className="error">{errors.phone}</div>}
                    </div>
                </div>
                <div className={`${BASE_CLASS}__select`}>
                    <label htmlFor="amount" className={`${BASE_CLASS}__input-titles`}>Beløb*</label>
                    <input
                        type="number"
                        id="amount"
                        name="amount"
                        placeholder={placeholder}
                        value={amount}
                        onChange={handleAmountChange}
                    />
                    <div className="error-container">
                        {errors.amount && <div className="error">{errors.amount}</div>}
                    </div>
                </div>
                <button className={`${BASE_CLASS}__button`} type="submit">donér</button>
            </form>
        </>
    )
}
