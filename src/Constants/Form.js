import React, { useState } from "react";
import axios from "axios";
import Select from "react-select";

const apiKey = "de386972d6a8a54e2657a6b2b5840212-ac903747-87eb-400a-93f5-6e03f297a0a2";

export default function Form() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedCountry, setSelectedCountry] = useState({ value: "+234", label: "NIG (+234)" });
  const [countries] = useState([
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

      if (!dbResponse.ok) {
        throw new Error("Error saving data to the database.");
      }

      // const response = await axios.post(
      //   "https://pp4eym.api.infobip.com/sms/2/text/advanced",
      //   {
      //     messages: [{
      //       destinations: [{ to: `${selectedCountry.value}${phoneNumber}` }],
      //       from: "ServiceSMS",
      //       text: "Yiieldy Fiidz App\nWe appreciate your interest in the Yiieldy Fiidz app. We will send you a download link once it is available on the app store.\nYiieldy.com",
      //     }],
      //   },
      //   {
      //     headers: {
      //       Authorization: `App ${apiKey}`,
      //       "Content-Type": "application/json",
      //     },
      //   }
      // );

      // if (
      //   response.status === 200 &&
      //   response.data &&
      //   response.data.messages[0].status === "sent"
      // ) {
      //   setSuccess("Message sent successfully!");
      //   setError(null);
      // } else {
      //   setError("Error sending message. Please try again.");
      //   setSuccess(null);
      //   console.error("Infobip API error:", response.data);
      // }

      setPhoneNumber("");
    } catch (error) {
      setError("An unexpected error occurred. Please try again.");
      setSuccess(null);
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
          <div className="bg-white border border-gray-300 flex shadow-m items-center w-full h-12 px-1 gap-1 rounded">
            <Select
              options={countries}
              value={selectedCountry}
              onChange={(selectedOption) => setSelectedCountry(selectedOption)}
              className="outline-non w-60 px-0"
            />
            <input
              placeholder="Phone Number"
              required=""
              type="text"
              value={phoneNumber}
              name="Number"
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="outline-none w-full"
            />
          </div>
          <button
            type="submit"
            className="inline-flex items-center justify-center lg:w-80 w-full h-12 px-0 font-bold tracking-wide text-white transition duration-200 rounded shadow-md bg-green md:ml-2 lg:ml-2 lg:mt-0 mt-2 md:mt-0"
          >
            Join Waitlist
          </button>
        </form>
      </div>
    </div>
  );
}
