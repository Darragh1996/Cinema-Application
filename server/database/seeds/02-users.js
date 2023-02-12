let seed = (knex) => {
  return knex("users")
    .del()
    .then(() => {
      return knex("users").insert([
        {
          name: "Darragh",
          email: "darragh@email.com",
          phoneNo: "123 456 7890",
        },
        {
          name: "Joseph",
          email: "joseph@email.com",
          phoneNo: "123 456 7890",
        },
        {
          name: "Tegan",
          email: "tegan@email.com",
          phoneNo: "123 456 7890",
        },
        {
          name: "Jason",
          email: "jason@email.com",
          phoneNo: "123 456 7890",
        },
      ]);
    });
};

export { seed };
