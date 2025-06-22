// /netlify/functions/create-donation.js
exports.handler = async function (event, context) {
    if (event.httpMethod !== "POST") {
      return {
        statusCode: 405,
        body: JSON.stringify({ error: "Method Not Allowed" }),
      };
    }
  
    try {
      const { name, email, amount, donationType } = JSON.parse(event.body);
  
      // Simulate processing or create a PayPal order here
      const fakePayPalUrl = `https://www.paypal.com/donate?amount=${amount}&name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}&type=${donationType}`;
  
      return {
        statusCode: 200,
        body: JSON.stringify({
          message: "Donation request received",
          redirectUrl: fakePayPalUrl, // Replace with actual PayPal redirect if needed
        }),
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: "Internal Server Error" }),
      };
    }
  };
  