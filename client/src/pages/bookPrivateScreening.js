import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

//import { screens, movies, dates, times } from //;

// Get the necessary HTML elements
const screenSelect = document.getElementById('screen-select');
const movieSelect = document.getElementById('movie-select');
const dateSelect = document.getElementById('date-select');
const timeSelect = document.getElementById('time-select');

// Populate the screen options
screens.forEach(screen => {
  const option = document.createElement('option');
  option.value = screen.id;
  option.textContent = screen.name;
  screenSelect.appendChild(option);
});

// Populate the movie options
movies.forEach(movie => {
  const option = document.createElement('option');
  option.value = movie.id;
  option.textContent = movie.name;
  movieSelect.appendChild(option);
});

// Populate the date options
dates.forEach(date => {
  const option = document.createElement('option');
  option.value = date;
  option.textContent = date;
  dateSelect.appendChild(option);
});

// Populate the time options
times.forEach(time => {
  const option = document.createElement('option');
  option.value = time;
  option.textContent = time;
  timeSelect.appendChild(option);
});

// Add event listener for the form submission
const form = document.getElementById('booking-form');
form.addEventListener('submit', event => {
  event.preventDefault();

  // Get the selected values
  const screenId = screenSelect.value;
  const movieId = movieSelect.value;
  const selectedDate = dateSelect.value;
  const selectedTime = timeSelect.value;

  // Do something with the selected values, e.g. book the screening
  bookScreening(screenId, movieId, selectedDate, selectedTime);
});

function bookScreening(screenId, movieId, selectedDate, selectedTime) {
  // Here you can add your logic for booking the screening
  console.log(`Booking screening for Screen ${screenId}, Movie ${movieId}, on ${selectedDate} at ${selectedTime}`);
}

