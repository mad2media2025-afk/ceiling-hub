import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaWhatsapp, FaPhone, FaEnvelope, FaTools } from "react-icons/fa";

export default function Support() {

    const [openFAQ, setOpenFAQ] = useState(null);

    const toggleFAQ = (index) => {
        setOpenFAQ(openFAQ === index ? null : index);
    };

    const faqs = [
        {
            q: "Do you provide installation guidance?",
            a: "Yes. Our team can guide contractors and builders regarding installation best practices."
        },
        {
            q: "Do you supply materials outside Delhi NCR?",
            a: "Yes. Bulk orders can be supplied across multiple regions depending on logistics."
        },
        {
            q: "Can I get technical specifications before purchasing?",
            a: "Absolutely. Our team can provide detailed technical specifications and product sheets."
        },
        {
            q: "Do you provide bulk project pricing?",
            a: "Yes. For large commercial or construction projects we provide special pricing."
        }
    ];

    return (
        <>
            <Navbar />

            <section className="pt-32 pb-20 px-6 bg-gray-50 min-h-screen">

                <div className="max-w-6xl mx-auto">

                    {/* Page Title */}
                    <div className="text-center mb-16">
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">
                            Customer Support
                        </h1>

                        <p className="text-gray-600 text-lg">
                            Need help with products, technical advice or complaints?
                            Our support team is here to assist you.
                        </p>
                    </div>

                    {/* Support Options */}
                    <div className="grid md:grid-cols-3 gap-8 mb-20">

                        <div className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition">
                            <FaPhone className="text-3xl text-blue-600 mb-4" />
                            <h3 className="font-semibold text-xl mb-2">Call Support</h3>
                            <p className="text-gray-600 mb-3">
                                Speak directly with our support team.
                            </p>
                            <p className="font-semibold">+91 96786 54408</p>
                        </div>

                        <div className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition">
                            <FaEnvelope className="text-3xl text-blue-600 mb-4" />
                            <h3 className="font-semibold text-xl mb-2">Email Support</h3>
                            <p className="text-gray-600 mb-3">
                                Send detailed queries or complaints.
                            </p>
                            <a
                                href="mailto:ceilinghubpvtltd@gmail.com"
                                className="font-semibold text-blue-600 hover:underline"
                            >
                                ceilinghubpvtltd@gmail.com
                            </a>
                        </div>

                        <div className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition">
                            <FaTools className="text-3xl text-blue-600 mb-4" />
                            <h3 className="font-semibold text-xl mb-2">Technical Help</h3>
                            <p className="text-gray-600">
                                Guidance for installation, materials and project planning.
                            </p>
                        </div>

                    </div>

                    {/* Support Form */}
                    <div className="bg-white rounded-xl shadow p-10 mb-20">

                        <h2 className="text-2xl font-semibold mb-6">
                            Submit a Support Request
                        </h2>

                        <form className="grid md:grid-cols-2 gap-6">

                            <input
                                type="text"
                                placeholder="Your Name"
                                className="p-3 border rounded-md"
                            />

                            <input
                                type="email"
                                placeholder="Email Address"
                                className="p-3 border rounded-md"
                            />

                            <input
                                type="text"
                                placeholder="Phone Number"
                                className="p-3 border rounded-md"
                            />

                            <select className="p-3 border rounded-md">
                                <option>Support Category</option>
                                <option>Product Inquiry</option>
                                <option>Technical Help</option>
                                <option>Complaint</option>
                                <option>Other</option>
                            </select>

                            <textarea
                                placeholder="Describe your issue"
                                rows="5"
                                className="p-3 border rounded-md md:col-span-2"
                            />

                            <button
                                className="bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700 transition md:col-span-2"
                            >
                                Submit Support Request
                            </button>

                        </form>

                    </div>

                    {/* FAQ Section */}
                    <div className="mb-16">

                        <h2 className="text-3xl font-bold mb-8 text-center">
                            Frequently Asked Questions
                        </h2>

                        <div className="space-y-4">

                            {faqs.map((faq, index) => (

                                <div
                                    key={index}
                                    className="bg-white rounded-lg shadow p-5 cursor-pointer"
                                    onClick={() => toggleFAQ(index)}
                                >

                                    <div className="flex justify-between items-center">
                                        <h3 className="font-semibold">{faq.q}</h3>
                                        <span>{openFAQ === index ? "-" : "+"}</span>
                                    </div>

                                    {openFAQ === index && (
                                        <p className="text-gray-600 mt-3">
                                            {faq.a}
                                        </p>
                                    )}

                                </div>

                            ))}

                        </div>

                    </div>

                </div>

            </section>

            {/* WhatsApp Floating Button */}
            <a
                href="https://wa.me/919678654408"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-xl hover:bg-green-600 transition"
            >
                <FaWhatsapp size={26} />
            </a>

            <Footer />
        </>
    );
}