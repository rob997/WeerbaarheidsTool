export default async function getvals() {
  try {
    const response = await fetch("https://192.168.1.210:300/userCount", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    const responseData = await response.json();
    console.log(responseData);
    return responseData;
  } catch (error) {
    return console.warn(error);
  }
}

getvals().then((response) => console.log(response));
