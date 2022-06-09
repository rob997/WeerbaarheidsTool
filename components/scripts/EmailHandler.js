export default function EmailHandler(email) {
  // don't remember from where i copied this code, but this works.
  let reg =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (reg.test(email)) {
    alert("Valid email address!");
    return true;
  } else {
    alert("Invalid email address!");
    return false;
  }
}
