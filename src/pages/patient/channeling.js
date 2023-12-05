import React, { useState, useEffect } from "react";
import { View, Text, FlatList, StyleSheet, Button, Alert } from "react-native";
import axios from "axios";

const DoctorList = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    fetchDoctors();
  }, []);

  const fetchDoctors = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/Employee/getAllEmployee"
      );
      if (response.status === 200) {
        setDoctors(response.data);
      } else {
        console.log("Failed to fetch doctors");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const renderDoctorItem = ({ item }) => (
    <View style={styles.doctorItem}>
      <Text style={styles.doctorName}>{item.employeeName}</Text>
      <Button
        title="Book Doctor"
        onPress={() => handleBookDoctor(item)}
      />
    </View>
  );

  const handleBookDoctor = (doctor) => {
    // Perform the booking logic here
    // For example, you can show an alert after booking:
    Alert.alert(
      "Booking Successful",
      `You have successfully booked Dr. ${doctor.employeeName}`,
      [{ text: "OK", onPress: () => console.log("OK Pressed") }]
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Available Doctors</Text>
      <FlatList
        data={doctors}
        renderItem={renderDoctorItem}
        keyExtractor={(item) => item.employeeId.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  doctorItem: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    padding: 10,
    marginBottom: 10,
  },
  doctorName: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default DoctorList;
