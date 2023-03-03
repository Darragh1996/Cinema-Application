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
          director: "Jon Favreau",
          runtime: 126,
          genre: "Action",
          details: "Tony Stark becomes Iron man again",
          trailer_url: "https://www.youtube.com/embed/qsRZghNciIo",
          img_poster_url:
            "https://drive.google.com/uc?export=view&id=1J_NooYoTQYY7wdSSNy5IEdTs2KVRsQBm",
          img_landscape_url:
            "https://drive.google.com/uc?export=view&id=12kI0Rg1N967jFVI0gsuv5wbUsT8Uj3An",
        },
        {
          name: "Iron Man 3",
          rating: "12A",
          director: "Shane Black",
          runtime: 130,
          genre: "Action",
          details: "Tony Stark takes on the Mandarin",
          trailer_url: "https://www.youtube.com/embed/Ke1Y3P9D0Bc",
          img_poster_url:
            "https://drive.google.com/uc?export=view&id=1fcpIC-eUmzcgmqwiIoM3xwdyZhjDkCyF",
          img_landscape_url:
            "https://drive.google.com/uc?export=view&id=1HWc1hpVEm7QIbieypxiXBCNavQg1R9qG",
        },
      ]);
    });
};

export { seed };
