//import { application } from "express";
//import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Alert } from "react-native";

export default function AddUser(id, sharesInfo) {
  const requestOptions = {
    method: "POST",
    headers: { Accept: "application.json", "Content-Type": "application/json" },
    body: JSON.stringify({ id: id, sharesInfo: sharesInfo }),
  };

  const sendPost = async () => {
    try {
      await fetch(`${ipadress}/addUser`, requestOptions).then((response) => {
        response.json().then((data) => {
          console.log(data);
          console.log(response);
        });
      });
    } catch (error) {
      console.error(error);
    }
  };

  console.log(
    "Tried to run AddUser with id: " + id + " and sharesInfo: " + sharesInfo
  );
  sendPost();
}
