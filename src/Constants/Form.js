import React, { useState } from "react";
import axios from "axios";

export default function Form() {
 const [phoneNumber, setPhoneNumber] = useState("");
 const [error, setError] = useState(null);
 const [success, setSuccess] = useState(null);

 const handleSubmit = async (e) => {
   e.preventDefault();

   try {
     const encodedPhoneNumber = encodeURIComponent(phoneNumber);

     // Check if the phone number is already in the database
     const checkResponse = await fetch(
       `https://yiieldy-web-default-rtdb.firebaseio.com/yiieldy_wait_lists_users.json?orderBy="Number"&equalTo="${encodedPhoneNumber}"`,
       {
         method: "GET",
       }
     );

     if (!checkResponse.ok) {
       throw new Error("Error checking the database.");
     }

     const checkData = await checkResponse.json();

     if (Object.keys(checkData).length > 0) {
       setError("This phone number is already registered.");
       setSuccess(null);
       return;
     }

     // Save data to the Firebase Realtime Database
     const dbResponse = await fetch(
       "https://yiieldy-web-default-rtdb.firebaseio.com/yiieldy_wait_lists_users.json",
       {
         method: "POST",
         headers: {
           "Content-Type": "application/json",
         },
         body: JSON.stringify({ Number: phoneNumber }),
       }
     );

     if (!dbResponse.ok) {
       throw new Error("Error saving data to the database.");
     }


        // Make API request to Facebook Graph API
        const response = await axios.post(
          "https://graph.facebook.com/v18.0/203864902816928/messages",
          {
            messaging_product: "whatsapp",
            to: `whatsapp.${phoneNumber}`,
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
              Authorization: "Bearer EAANARNFNq1gBOyzvSsGHg7ej3ZAkZBwdcqSZAt1tt2duazEcFX0I411JLce0ZCSCKwcuiLA1H1k8BdbW4jfrOEKQppooZBd4xfVQnhWBeZAqhmH35ZC6rxKzn9nYKBQW0EEtl6apfZBdwUzAD66dKsfVM05nF5vq2zETkePQgFyb158KXmKR9ZBeZC2SFM0CjlTYlNWoKQ3vLsmOqpZCrebuF1lrIz7gzpyYGzX",
              "Content-Type": "application/json",
            },
          }
        );

        // Check if the Facebook API request was successful
        if (
          response.status === 200 &&
          response.data &&
          response.data.messages[0].status === "sent"
        ) {
          setSuccess("Message sent successfully!");
          setError(null);
        } else {
          setError("Error sending message. Please try again.");
          setSuccess(null);
          console.error("Facebook API error:", response.data);
        }

        setPhoneNumber(""); // Clear the phone number input
      } catch (error) {
       setError("An unexpected error occurred. Please try again.");
       setSuccess(null);
       console.error(error);
     }
   };

  return (
    <div>
      <div className="text-center">
        {error && <div className="text-red-800 text-left">{error}</div>}
        {success && <div className="text-green text-left">{success}</div>}

        <form
          className="flex flex-col items-center w-full mb-4 md:flex-row"
          onSubmit={handleSubmit}
          method="POST"
        >
          <input
            placeholder="Phone Whatsapp Number"
            required=""
            type="text"
            value={phoneNumber}
            name="Number"
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="flex-grow w-full h-12 px-2 mb-3 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none md:mr-2 md:mb-0"
          />
          <button
            type="submit"
            className="inline-flex lg:w-40 w-full items-center justify-center h-12 px-0 font-bold tracking-wide text-white transition duration-200 rounded shadow-md bg-green"
          >
            Join Waitlist
          </button>
        </form>
      </div>
    </div>
  );
}
