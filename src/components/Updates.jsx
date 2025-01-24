import React from 'react';

const Updates = () => {
    const updates = [
        "Added new task filtering options.",
        "Improved performance for large task lists.",
        "Fixed bug with task due date not saving.",
        "Updated user interface for better accessibility.",
        "Added support for recurring tasks.",
    ];

    return (
        <div>
            <h2>Latest Updates</h2>
            <ul>
                {updates.map((update, index) => (
                    <li key={index}>{update}</li>
                ))}
            </ul>
        </div>
    );
};

export default Updates;