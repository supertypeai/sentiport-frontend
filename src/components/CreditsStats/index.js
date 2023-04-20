import React, { useState, useEffect } from 'react'
import APIService from "../../pages/api/stripeCheckout"

const CreditsStats = () => {
    return (
        <div className="stats bg-blue-400 text-primary-content">

            <div className="stat">
                <div className="stat-title text-black font-bold">Credits balance</div>
                <div className="stat-value text-center">5</div>
                <div className="stat-actions">
                    <button className="btn btn-sm" onClick={() => APIService.checkoutUser()}>Add Credits</button>
                </div>
            </div>

        </div>
    )
}

export default CreditsStats