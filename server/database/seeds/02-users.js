let seed = (knex) => {
  return knex("users")
    .del()
    .then(() => {
      return knex("users").insert([
        {
          name: "Darragh",
          email: "darragh@email.com",
          password:
            "$2b$10$WPvD2W5kQK0J2gBL9Hm00uGSgtzUnbAbObH8.2eXbrHGpKk.UaF9S",
          phoneNo: "123 456 7890",
        },
        {
          name: "Joseph",
          email: "joseph@email.com",
          password:
            "$2b$10$WPvD2W5kQK0J2gBL9Hm00uGSgtzUnbAbObH8.2eXbrHGpKk.UaF9S",
          phoneNo: "123 456 7890",
        },
        {
          name: "Tegan",
          email: "tegan@email.com",
          password:
            "$2b$10$WPvD2W5kQK0J2gBL9Hm00uGSgtzUnbAbObH8.2eXbrHGpKk.UaF9S",
          phoneNo: "123 456 7890",
        },
        {
          name: "Jason",
          email: "jason@email.com",
          password:
            "$2b$10$WPvD2W5kQK0J2gBL9Hm00uGSgtzUnbAbObH8.2eXbrHGpKk.UaF9S",
          phoneNo: "123 456 7890",
        },
      ]);
    });
};

export { seed };
