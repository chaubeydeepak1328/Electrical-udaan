import React from 'react';

const servicesData = [
    {
        id: 1,
        title: "Consultation",
        description: "Get professional advice from our team of experts to help you make informed decisions.",
        icon: "💼", // You can replace this with an actual icon from an icon library
    },
    {
        id: 2,
        title: "Installation",
        description: "Our team provides high-quality installation services tailored to your needs.",
        icon: "⚙️",
    },
    {
        id: 3,
        title: "Maintenance",
        description: "We offer ongoing maintenance services to ensure your systems are running smoothly.",
        icon: "🔧",
    },
    {
        id: 4,
        title: "Training",
        description: "Comprehensive training programs to upskill your team and ensure maximum efficiency.",
        icon: "🎓",
    },
];

const Services = () => {
    return (
        <div className="services-container">
            <h1 className="services-title">Our Services</h1>
            <div className="services-grid">
                {servicesData.map((service) => (
                    <div className="service-card" key={service.id}>
                        <div className="service-icon">{service.icon}</div>
                        <h2 className="service-title">{service.title}</h2>
                        <p className="service-description">{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;
