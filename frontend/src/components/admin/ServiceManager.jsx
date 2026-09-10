import { useEffect, useState } from "react";
import API from "../../services/api";

function ServiceManager({ title, api }) {
    const [services, setServices] = useState([]);
    const [editingId, setEditingId] = useState(null);
    const [search, setSearch] = useState("");

    const [formData, setFormData] = useState({
        title: "",
        location: "",
        days: "",
        price: "",
        image: "",
        description: "",
    });

    useEffect(() => {
        fetchServices();
    }, [api]);

    const fetchServices = async () => {
        try {
            const res = await API.get(api);
            setServices(res.data.data || []);
        } catch (err) {
            console.log(err);
        }
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const clearForm = () => {
        setEditingId(null);

        setFormData({
            title: "",
            location: "",
            days: "",
            price: "",
            image: "",
            description: "",
        });
    };
    const saveService = async () => {
        try {
            if (editingId) {
                await API.put(`${api}/${editingId}`, formData);
            } else {
                await API.post(api, formData);
            }

            clearForm();
            fetchServices();

        } catch (err) {
            console.log(err);
            alert(`${editingId ? "Update" : "Add"} failed`);
        }
    };

    const editService = (service) => {
        setEditingId(service._id);

        setFormData({
            title: service.title || "",
            location: service.location || "",
            days: service.days || "",
            price: service.price || "",
            image: service.image || "",
            description: service.description || "",
        });
    };

    const deleteService = async (id) => {

        if (!window.confirm("Delete this service?")) return;

        try {

            await API.delete(`${api}/${id}`);

            fetchServices();

        } catch (err) {
            console.log(err);
            alert("Delete failed");
        }
    };

    const filteredServices = services.filter((service) =>
        service.title
            ?.toLowerCase()
            .includes(search.toLowerCase())
    );
    return (
        <div>

            <h1>{title} Manager</h1>

            <div
                style={{
                    display: "flex",
                    gap: "10px",
                    marginBottom: "20px",
                    flexWrap: "wrap",
                }}
            >

                <input
                    type="text"
                    placeholder={`Search ${title}`}
                    value={search}
                    onChange={(e) =>
                        setSearch(e.target.value)
                    }
                />

                <input
                    name="title"
                    placeholder="Title"
                    value={formData.title}
                    onChange={handleChange}
                />

                <input
                    name="location"
                    placeholder="Location"
                    value={formData.location}
                    onChange={handleChange}
                />

                <input
                    name="days"
                    placeholder="Days"
                    value={formData.days}
                    onChange={handleChange}
                />

                <input
                    name="price"
                    placeholder="Price"
                    value={formData.price}
                    onChange={handleChange}
                />

                <input
                    name="image"
                    placeholder="Paste Image URL"
                    value={formData.image}
                    onChange={handleChange}
                />

                {formData.image && (
                    <div
                        style={{
                            marginTop: "15px",
                        }}
                    >
                        <img
                            src={formData.image}
                            alt="Preview"
                            style={{
                                width: "220px",
                                height: "140px",
                                objectFit: "cover",
                                borderRadius: "10px",
                                border: "2px solid #ddd",
                            }}
                        />
                    </div>
                )}
                <textarea
                    rows="3"
                    name="description"
                    placeholder="Description"
                    value={formData.description}
                    onChange={handleChange}
                />

                <button onClick={saveService}>
                    {editingId ? "Update" : "Add"} {title}
                </button>

                {editingId && (
                    <button onClick={clearForm}>
                        Cancel
                    </button>
                )}

            </div>

            <div className="tour-grid">
                {filteredServices.map((service) => (

                    <div
                        className="tour-card"
                        key={service._id}
                    >

                        <img
                            src={service.image}
                            alt={service.title}
                        />

                        <h3>{service.title}</h3>

                        <p>{service.location}</p>

                        <p>{service.days} Days</p>

                        <p>₹ {service.price}</p>

                        <div
                            style={{
                                display: "flex",
                                gap: "10px",
                                marginTop: "15px",
                            }}
                        >
                            <button
                                onClick={() =>
                                    editService(service)
                                }
                            >
                                ✏ Edit
                            </button>

                            <button
                                style={{
                                    background: "#ef4444",
                                    color: "#fff",
                                }}
                                onClick={() =>
                                    deleteService(service._id)
                                }
                            >
                                🗑 Delete
                            </button>
                        </div>

                    </div>

                ))}

            </div>

        </div>
    );
}

export default ServiceManager;