export async function createAirtableRecord(fullName: string, email: string, useCase: string) {
  const airtableUrl = process.env.NEXT_PUBLIC_AIRTABLE_URL;
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;
  
  if (!airtableUrl || !apiKey) {
    throw new Error("Airtable API URL or API Key is not defined in environment variables.");
  }

  const data = {
    fields: {
      "Full Name": fullName,
      "Email Address": email,
      "Use-Case": useCase,
    },
  };

  try {
    const response = await fetch(airtableUrl, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Error creating Airtable record:", errorData);
      throw new Error(errorData.error?.message || "Failed to create Airtable record.");
    }

    const responseData = await response.json();
    console.log("Airtable record created successfully:", responseData);
    return responseData;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}