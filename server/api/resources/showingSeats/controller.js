import db from "../../../database/dbConfig.js";

import * as ShowingSeats from "./model.js";
import * as Booking from "../bookings/model.js";
import * as Showings from "../showings/model.js";

import nodemailer from "nodemailer";
import fs from "fs/promises";
import handlebars from "handlebars";

import * as dotenv from "dotenv";

dotenv.config();

let getAllShowingSeats = async (req, res) => {
  try {
    let showingSeats = await ShowingSeats.getAll();
    await res.status(200).json({ data: showingSeats });
  } catch (error) {
    res
      .status(500)
      .json({ message: `Error getting showing seats: ${error.message}` });
  }
};

let getShowingSeatsByID = async (req, res) => {
  let { id } = req.params;
  try {
    let showingSeats = await ShowingSeats.getByID(id);
    res.status(200).json({ showingSeats });
  } catch (error) {
    res
      .status(500)
      .json({ message: `Error getting showing seats: ${error.message}` });
  }
};

let addShowingSeats = async (req, res) => {
  try {
    let { seatID, showingID, occupied } = req.body;

    let showingSeatCreated = await ShowingSeats.add({
      seatID,
      showingID,
      occupied,
    });

    res.status(201).json({
      message: "Showing Seat added successfully",
      data: { showingSeat: showingSeatCreated },
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to add showing seat", error: error.message });
  }
};

// let bookShowingSeat = async (req, res) => {
//   try {
//     let { ids, showingID } = req.body;
//     let userID = req.decodedToken.subject;

//     for (let i = 0; i < ids.length; i++) {
//       let updatedShowingSeat = await ShowingSeats.update({
//         id: ids[i],
//         occupied: true,
//       });
//       await Booking.add({
//         userID,
//         showingID,
//         showingSeatID: updatedShowingSeat.id,
//       });
//     }

//     let transporter = nodemailer.createTransport({
//       host: "sandbox.smtp.mailtrap.io",
//       port: 2525,
//       auth: {
//         user: process.env.EMAIL,
//         pass: process.env.EMAIL_PASSWORD,
//       },
//     });

//     // Read the Handlebars template file
//     const templateFile = await fs.readFile("./utils/emailTemplate.hbs", "utf8");

//     // Compile the template
//     const template = handlebars.compile(templateFile);

//     const { name, datetime } = await Showings.getByID(showingID);

//     const html = template({
//       username: req.decodedToken.name,
//       seatCount: ids.length,
//       movieName: name,
//       datetime: datetime,
//     });

//     let message = {
//       from: "donotreply@reeldreams.com",
//       to: "to-example@email.com",
//       subject: "Reel Dreams Cinema Booking",
//       html: html,
//     };

//     transporter.sendMail(message, (err, info) => {
//       if (err) {
//         console.log(err);
//       }
//     });

//     res.status(200).json({
//       message: "Showing Seats booked successfully",
//     });
//   } catch (error) {
//     res
//       .status(500)
//       .json({ message: "Failed to book showing seat", error: error.message });
//   }
// };

let bookShowingSeat = async (req, res) => {
  try {
    let { ids, showingID } = req.body;
    let userID = req.decodedToken.subject;

    // Start the transaction
    await db.transaction(async (trx) => {
      for (let i = 0; i < ids.length; i++) {
        // Lock the row for update
        const showingSeat = await trx("showingSeats")
          .where({ id: ids[i] })
          .forUpdate()
          .first();

        // Check if the seat is already occupied
        if (showingSeat.occupied) {
          throw new Error("Seat is already occupied.");
        }

        let updatedShowingSeat = await ShowingSeats.update(
          {
            id: ids[i],
            occupied: true,
          },
          trx // Pass the transaction
        );

        await Booking.add(
          {
            userID,
            showingID,
            showingSeatID: updatedShowingSeat.id,
          },
          trx // Pass the transaction
        );
      }

      // Commit the transaction
      await trx.commit();
    });

    let transporter = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Read the Handlebars template file
    const templateFile = await fs.readFile("./utils/emailTemplate.hbs", "utf8");

    // Compile the template
    const template = handlebars.compile(templateFile);

    const { name, datetime } = await Showings.getByID(showingID);

    const html = template({
      username: req.decodedToken.name,
      seatCount: ids.length,
      movieName: name,
      datetime: datetime,
    });

    let message = {
      from: "donotreply@reeldreams.com",
      to: "to-example@email.com",
      subject: "Reel Dreams Cinema Booking",
      html: html,
    };

    transporter.sendMail(message, (err, info) => {
      if (err) {
        console.log(err);
      }
    });

    res.status(200).json({
      message: "Showing Seats booked successfully",
    });
  } catch (error) {
    // If there's an error, the transaction will automatically be rolled back
    res
      .status(500)
      .json({ message: "Failed to book showing seat", error: error.message });
  }
};

let cancelShowingSeat = async (req, res) => {
  try {
    // let { id } = req.params;
    let { ids } = req.body;

    for (let i = 0; i < ids.length; i++) {
      await ShowingSeats.update({
        id: ids[i],
        occupied: false,
      });
    }

    res.status(200).json({
      message: "Showing Seats canceled successfully",
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to cancel showing seat", error: error.message });
  }
};

let deleteShowingSeats = async (req, res) => {
  let { id } = req.params;

  try {
    await ShowingSeats.del(id);
    res.status(200).json({ message: "Showing seats successfully deleted" });
  } catch (error) {
    res.status(500).json({
      message: "Failed to delete showing seats",
      error: error.message,
    });
  }
};

export {
  getAllShowingSeats,
  getShowingSeatsByID,
  addShowingSeats,
  bookShowingSeat,
  cancelShowingSeat,
  deleteShowingSeats,
};
