import chai, { expect } from "chai";
import { bookShowingSeat } from "../api/resources/showingSeats/controller.js";
import db from "../database/dbConfig.js";

describe("Booking Controller", () => {
  before(async () => {
    // Set the seat as unoccupied before running the test
    const seatID = 1;
    await db("showingSeats").where({ id: seatID }).update({ occupied: false });

    // Add debug output
    const updatedSeat = await db("showingSeats").where({ id: seatID }).first();
    console.log("Updated seat state:", updatedSeat);
  });

  it("should not allow two users to book the same seat at the same time", async () => {
    const user1 = { id: 1, name: "User1", email: "user1@example.com" };
    const user2 = { id: 2, name: "User2", email: "user2@example.com" };
    const showingID = 1;
    const seatID = 1;

    // Check the initial state of the seat in the database
    const initialSeatState = await db("showingSeats")
      .where({ id: seatID })
      .first();
    console.log("Initial seat state:", initialSeatState);

    const attemptBooking = async (user, showingID, seatID) => {
      const req = {
        body: {
          ids: [seatID],
          showingID,
        },
        decodedToken: {
          subject: user.id,
          name: user.name,
        },
      };
      const res = {
        status: function () {
          return this;
        },
        json: function () {},
      };

      try {
        await bookShowingSeat(req, res);
        console.log(`${user.name} booked seat ${seatID}`);
        return { success: true };
      } catch (error) {
        console.log(
          `${user.name} failed to book seat ${seatID}:`,
          error.message
        );
        return { success: false, error: error.message };
      }
    };

    const bookingPromises = [
      attemptBooking(user1, showingID, seatID),
      attemptBooking(user2, showingID, seatID),
    ];

    const bookingResults = await Promise.allSettled(bookingPromises);

    // Check the final state of the seat in the database
    const finalSeatState = await db("showingSeats")
      .where({ id: seatID })
      .first();
    console.log("Final seat state:", finalSeatState);

    const successfulBookings = bookingResults.filter(
      (result) => result.value && result.value.success === true
    );
    const failedBookings = bookingResults.filter(
      (result) => result.value && result.value.success === false
    );

    console.log("Booking results:", bookingResults);
    expect(successfulBookings.length).to.equal(1);
    expect(failedBookings.length).to.equal(1);
    expect(failedBookings[0].value.error).to.include(
      "Seat is already occupied"
    );
  });
});

after(() => {
  // Close the database connection
  db.destroy();
});
