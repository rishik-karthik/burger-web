import { useState, useEffect } from "react";
import { menuItems } from "../services/api";
import MultiActionAreaCard from "../components/MultiActionAreaCard";
import "./menu.css";

export default function Menu() {
    const [loading, setLoading] = useState(true);
    const [burgers, setBurgers] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await menuItems();
                if (!data || data.length === 0) {
                    setError("No burgers found.");
                    setBurgers([]);
                } else {
                    setBurgers(data);
                    setError(null);
                }
            } catch (err) {
                setError("Failed to load menu. Please try again.");
                setBurgers([]);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    if (loading) return <p>Loading...</p>;

    if (error) return <p style={{ color: 'red' }}>{error}</p>;

    return (
        <div className="menu">
            <div className="menu-grid">
                {burgers.map((burger) => (
                    <MultiActionAreaCard burger={burger} key={burger.id} />
                ))}
            </div>
        </div>
    );
}
