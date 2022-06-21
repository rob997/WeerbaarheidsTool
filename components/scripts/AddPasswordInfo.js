export default function AddPasswordInfo(id, strength, recyclesPW) {
  const requestOptions = {
    method: "POST",
    headers: { Accept: "application.json", "Content-Type": "application/json" },
    body: JSON.stringify({
      id: id,
      strength: strength,
      recyclesPW: recyclesPW,
    }),
  };

  const sendPost = async () => {
    try {
      await fetch("http://192.168.1.210:3000/addPassword", requestOptions).then(
        (response) => {
          response.json().then((data) => {
            Alert.alert("Post created at : ", data.createdAt);
            console.log(response);
          });
        }
      );
    } catch (error) {
      console.error(error);
    }
  };

  console.log(
    "Tried to run AddPasswordInfo with id: " +
      id +
      " Strength: " +
      strength +
      " and recycles: " +
      recyclesPW
  );
  sendPost();
}
