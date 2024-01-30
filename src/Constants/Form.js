import React, { useState } from "react";
import axios from "axios";
import Select from "react-select";

const apiKey = "EAANARNFNq1gBO2W1kwCQOFw1ctKWXZCH8VR3wWvwXx2ogD2mlyqZA6vHksM73UT6XgppjW8womSeF6HOlXowmkHFB2lYKp53xE1ztEQgGH7KcYMdZC2O36vlDK9Hm1oadiwr7BNqzZAbdFzfxoGJqTvQL4kRZC9kmMZCKBYAf9ZCBdtD0sU5xkOZBAq1ojkcWA9zY9dOIZCUXZAfZB9CJJkCG0i7NwYam8vOOBPpAZDZD"; 

export default function Form() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [countries] = useState([
    { value: "+1", label: "US (+1)" },
    { value: "+44", label: "UK (+44)" },
    { value: "+234", label: "NIG (+234)" },
  ]);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedCountry) {
      setError("Please select a country code.");
      return;
    }

    try {
      // Save data to the Firebase Realtime Database
      const dbResponse = await fetch(
        "https://yiieldy-web-default-rtdb.firebaseio.com/yiieldy_wait_lists_users.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            Number: `${selectedCountry.value}${phoneNumber}`,
          }),
        }
      );

      // Check if data saved successfully to the database
      if (!dbResponse.ok) {
        throw new Error("Error saving data to the database.");
      }

      // Make API request to Facebook Graph API
      const response = await axios.post(
        "https://graph.facebook.com/v18.0/203864902816928/messages",
        {
          messaging_product: "whatsapp",
          to: `whatsapp.${selectedCountry.value}${phoneNumber}`,
          type: "template",
          template: {
            name: "yiieldy_wait_lists_users",
            language: {
              code: "en",
            },
          },
        },
        {
          headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json",
          },
        }
      );

      // Check if the Facebook API request was successful
      // if (
      //   response.status === 200 &&
      //   response.data &&
      //   response.data.messages[0].status === "sent"
      // ) {
      //   setSuccess("Message sent successfully!");
      //   setError(null); // Clear any previous error messages
      // } else {
      //   setError("Error sending message. Please try again.");
      //   setSuccess(null); // Clear any previous success messages
      //   console.error("Facebook API error:", response.data);
      // }

      setPhoneNumber(""); // Clear the phone number input
    } catch (error) {
      // Handle other errors
      setError("An unexpected error occurred. Please try again.");
      setSuccess(null); // Clear any previous success messages
      console.error(error);
    }
  };

  return (
    <div>
      <div className="text-center">
        {error && <div className="text-red-500">{error}</div>}
        {success && <div className="text-green">{success}</div>}

        <form
          className="flex flex-col items-center w-full mb-4 md:flex-row"
          onSubmit={handleSubmit}
          method="POST"
        >
          <div className="bg-white border border-gray-300 flex justify-between shadow-m items-center w-full h-12 px-2 gap-10 rounded">
            <Select
              options={countries}
              value={selectedCountry}
              onChange={(selectedOption) => setSelectedCountry(selectedOption)}
              placeholder="NIG (+234)"
              className="outline-none"
            />
            <input
              placeholder="WhatsApp Phone Number"
              required=""
              type="text"
              value={phoneNumber}
              name="Number"
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="outline-none"
            />
          </div>
          <button
            type="submit"
            className="inline-flex items-center justify-center lg:w-80 w-full h-12 px-0 font-bold tracking-wide text-white transition duration-200 rounded shadow-md bg-green lg:ml-2 lg:mt-0 mt-2"
          >
            Join Waitlist
          </button>
        </form>
      </div>
    </div>
  );
}
