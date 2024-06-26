import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import "../../index.css";
import { useUserProfile } from "../hooks/useUserProfile";

export function FormsContainer() {
    const navigate = useNavigate();
    const [sleepHours, setSleepHours] = useState('');
    const [physicalActivity, setPhysicalActivity] = useState('');
    const [healthIssues, setHealthIssues] = useState('');
    const [stress, setStress] = useState('');
    const [specificDiet, setSpecificDiet] = useState('');
    const [aditionalInfo, setAditionalInfo] = useState('');
    const { saveUserProfile, error, loading } = useUserProfile();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const form = event.target;
        const userId = JSON.parse(localStorage.getItem('user')).id;
        if (form.checkValidity()) {
            // Navigate to the homepage if the form is valid
            console.log("userId"+userId)
            await saveUserProfile(userId, sleepHours, physicalActivity, healthIssues, stress, specificDiet, aditionalInfo);
            //navigate("/formsInfo");
        } else {
            // Report validity to trigger built-in browser validation UI
            form.reportValidity();
        }
    };

    return (
        <section className="bg-gray-100 flex items-center justify-center ff-main text-[#0F345F]">
            <div className="bg-white p-12 rounded-lg shadow-lg w-full max-w-2xl">
                <h2 className="text-4xl font-bold text-center mb-8">Anonymous Information Form</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-6">
                        <label htmlFor="sleep-hours" className="block font-bold mb-2 text-xl">Sleep Hours (per night):</label>
                        <input type="number" id="sleep-hours" value={sleepHours} onChange={(e) => setSleepHours(e.target.value)} name="sleep-hours" min="0" max="24" className="bg-white text-black w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 text-lg" required/>
                    </div>

                    <div className="mb-6">
                        <label htmlFor="physical-activity" className="block font-bold mb-2 text-xl">Do you regularly engage in physical activity?</label>
                        <select id="physical-activity" name="physical-activity" value={physicalActivity} onChange={(e) => setPhysicalActivity(e.target.value)} className="bg-white text-black w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 text-lg" required>
                            <option className="text-black" value="">Select an option</option>
                            <option className="text-black" value="yes">Yes</option>
                            <option className="text-black" value="no">No</option>
                        </select>
                    </div>

                    <div className="mb-6">
                        <label htmlFor="diseases" className="block font-bold mb-2 text-xl">Do you have any chronic diseases?</label>
                        <input type="text" id="diseases" name="diseases" value={healthIssues} onChange={(e) => setHealthIssues(e.target.value)} placeholder="E.g.: Diabetes, Hypertension, etc." className="bg-white text-black w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 text-lg"/>
                    </div>

                    <div className="mb-6">
                        <label htmlFor="stress-level" className="block font-bold mb-2 text-xl">Stress Level (1-10):</label>
                        <input type="number" id="stress-level" name="stress-level" value={stress} onChange={(e) => setStress(e.target.value)} min="1" max="10" className="bg-white text-black w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" required/>
                    </div>

                    <div className="mb-6">
                        <label htmlFor="diet" className="block font-bold mb-2 text-xl">Do you follow any specific diet?</label>
                        <input type="text" id="diet" name="diet" value={specificDiet} onChange={(e) => setSpecificDiet(e.target.value)} placeholder="E.g.: Vegetarian, Vegan, etc." className="bg-white text-black w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 text-lg"/>
                    </div>

                    <div className="mb-6">
                        <label htmlFor="additional-info" className="block font-bold mb-2 text-xl">Additional Information:</label>
                        <textarea id="additional-info" name="additional-info" value={aditionalInfo} onChange={(e) => setAditionalInfo(e.target.value)} rows="5" className="bg-white text-black w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 text-lg" placeholder="Enter any other relevant information..."></textarea>
                    </div>

                    <div className="flex justify-center">
                        <button type="submit" disabled={loading} className="w-[48%] py-4 mt-3 bg-[#C94545] mb-10 text-white font-medium text-2xl rounded-md hover:bg-[#C94545]/90 hover:text-white transition duration-300">Submit</button>
                    </div>
                </form>
                {error && <p>Error: {error}</p>}
                {console.log(error)}
            </div>
        </section>
    );
}
