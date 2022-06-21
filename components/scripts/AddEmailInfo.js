export default function AddEmailInfo(id, hits) {
  const requestOptions = {
    method: "POST",
    headers: { Accept: "application.json", "Content-Type": "application/json" },
    body: JSON.stringify({ id: id, hits: hits }),
  };

  const sendPost = async () => {
    try {
      await fetch("http://192.168.1.210:3000/addEmail", requestOptions).then(
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
    "Tried to run AddEmailInfo with id: " + id + " and hits: " + hits
  );
  sendPost();
}
