import { useNavigate } from "react-router-dom";
import "../../index.css";

export function FormsContainer() {
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;

        if (form.checkValidity()) {
            // Navigate to the homepage if the form is valid
            navigate("/homePage");
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
                        <label for="sleep-hours" className="block font-bold mb-2 text-xl">Sleep Hours (per night):</label>
                        <input type="number" id="sleep-hours" name="sleep-hours" min="0" max="24" className="bg-white text-black w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 text-lg" required/>
                    </div>

                    <div className="mb-6">
                        <label for="physical-activity" className="block font-bold mb-2 text-xl">Do you regularly engage in physical activity?</label>
                        <select id="physical-activity" name="physical-activity" className="bg-white text-black w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 text-lg" required>
                            <option className="text-black" value="">Select an option</option>
                            <option className="text-black" value="yes">Yes</option>
                            <option className="text-black" value="no">No</option>
                        </select>
                    </div>

                    <div className="mb-6">
                        <label for="diseases" className="block font-bold mb-2 text-xl">Do you have any chronic diseases?</label>
                        <input type="text" id="diseases" name="diseases" placeholder="E.g.: Diabetes, Hypertension, etc." class="bg-white text-black w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 text-lg"/>
                    </div>

                    <div className="mb-6">
                        <label for="stress-level" className="block font-bold mb-2 text-xl">Stress Level (1-10):</label>
                        <input type="number" id="stress-level" name="stress-level" min="1" max="10" className="bg-white text-black w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" required/>
                    </div>

                    <div className="mb-6">
                        <label for="diet" className="block font-bold mb-2 text-xl">Do you follow any specific diet?</label>
                        <input type="text" id="diet" name="diet" placeholder="E.g.: Vegetarian, Vegan, etc." className="bg-white text-black w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 text-lg"/>
                    </div>

                    <div className="mb-6">
                        <label for="additional-info" className="block font-bold mb-2 text-xl">Additional Information:</label>
                        <textarea id="additional-info" name="additional-info" rows="5" className="bg-white text-black w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 text-lg" placeholder="Enter any other relevant information..."></textarea>
                    </div>

                    <div className="flex justify-center">
                        <button type="submit" className="w-[48%] py-4 mt-3 bg-[#C94545] mb-10 text-white font-medium text-2xl rounded-md hover:bg-[#C94545]/90 hover:text-white transition duration-300">Submit</button>
                    </div>
                </form>
            </div>
        </section>
    );
}
