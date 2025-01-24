import React from 'react';

const Pricing = () => {
    return (
        <div className="pricing">
            <h1>Pricing Plans</h1>
            <div className="pricing-plan">
                <h2>Free Plan</h2>
                <p>$0 / month</p>
                <ul>
                    <li>Basic Task Management</li>
                    <li>Up to 5 Projects</li>
                    <li>Community Support</li>
                </ul>
            </div>
            <div className="pricing-plan">
                <h2>Pro Plan</h2>
                <p>$9.99 / month</p>
                <ul>
                    <li>Advanced Task Management</li>
                    <li>Unlimited Projects</li>
                    <li>Priority Support</li>
                </ul>
            </div>
            <div className="pricing-plan">
                <h2>Enterprise Plan</h2>
                <p>Contact us for pricing</p>
                <ul>
                    <li>All Pro Features</li>
                    <li>Custom Integrations</li>
                    <li>Dedicated Support</li>
                </ul>
            </div>
        </div>
    );
};

export default Pricing;