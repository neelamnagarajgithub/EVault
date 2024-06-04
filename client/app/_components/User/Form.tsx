import { useState, useContext } from "react";

const Form = () => {
    const [form, setForm] = useState({
        campaignTitle: "",
        story: "",
        requiredAmount: "",
        category: "education",
    });

    const [loading, setLoading] = useState(false);
