let seed = (knex) => {
  return knex("movies")
    .del()
    .then(() => {
      return knex("movies").insert([
        {
          name: "Iron Man",
          rating: "12A",
          director: "Jon Favreau",
          runtime: 126,
          genre: "Action",
          details: "Tony Stark becomes Iron man",
          trailer_url: "https://www.youtube.com/embed/KAE5ymVLmZg",
          img_poster_url:
            "https://drive.google.com/uc?export=view&id=1s9SFXESMdz8zP5sB4V9M7yIvcwf-tn-D",
          img_landscape_url:
            "https://drive.google.com/uc?export=view&id=1LKaJoQLdjMQK528EYm0rCm7Xdm2o-CIM",
        },
        {
          name: "Iron Man 2",
          rating: "12A",
          director: "CJon Favreau",
          runtime: 152,
          genre: "Action",
          details: "Iron Man beats up fathers enemy",
          trailer_url: "https://www.youtube.com/embed/qsRZghNciIo",
          img_poster_url:
            "https://drive.google.com/uc?export=view&id=1J_NooYoTQYY7wdSSNy5IEdTs2KVRsQBm",
          img_landscape_url:
            "https://drive.google.com/uc?export=view&id=12kI0Rg1N967jFVI0gsuv5wbUsT8Uj3An",
        },
      ]);
    });
};

export { seed };
