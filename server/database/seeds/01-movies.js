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
            "https://drive.google.com/uc?export=view&id=1sqMf-WyuA-sFgjHrFghvEPiuaq9CLX7r",
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
            "https://drive.google.com/uc?export=view&id=1CBIzNaAGb57yn7RxZ-JBumwT7EmjWFW6",
          img_landscape_url:
            "https://drive.google.com/uc?export=view&id=1J_NooYoTQYY7wdSSNy5IEdTs2KVRsQBm",
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
            "https://drive.google.com/uc?export=view&id=1AzlhL8SsMeZ7Rt4XK3eBeOICnQsiqJ0d",
        },
        {
          name: "Frozen 2",
          rating: "PG",
          director: "Jennifer Lee",
          runtime: 103,
          genre: "Family",
          details: "Elsa follows a Mystical Voice",
          trailer_url: "https://www.youtube.com/embed/Zi4LMpSDccc",
          img_poster_url:
            "https://drive.google.com/uc?export=view&id=1u3wGd6AFeekafkYuzknrI37QMGB4Zdum",
          img_landscape_url:
            "https://drive.google.com/uc?export=view&id=1Np4WQx7MhxqBKFYSXFnsOc8V6vveBA1S",
        },
        {
          name: "Just Go With It",
          rating: "12A",
          director: "Dennis Dugan",
          runtime: 117,
          genre: "Comedy",
          details: "Adam Sandler in a movie",
          trailer_url: "https://www.youtube.com/embed/fpj7i2CPt8M",
          img_poster_url:
            "https://drive.google.com/uc?export=view&id=15MFuDSP9zUtOaWKMwGz_z4EcTE2h8w2k",
          img_landscape_url:
            "https://drive.google.com/uc?export=view&id=1SQ-nk3vdWEYFXGGiUTfxkPn71rmGGE6v",
        },
        {
          name: "Free Guy",
          rating: "12A",
          director: "Shawn Levy",
          runtime: 115,
          genre: "Science Fiction",
          details: "Guy in a video game",
          trailer_url: "https://www.youtube.com/embed/fpj7i2CPt8M",
          img_poster_url:
            "https://drive.google.com/uc?export=view&id=1glF8huE1EnOID-f6_wWi-xH-aprzYgzP",
          img_landscape_url:
            "https://drive.google.com/uc?export=view&id=1cAeWXGudZSCc6Lz8PAgqMNfeWCKPrSZM",
        },
        {
          name: "Star Wars III",
          rating: "12A",
          director: "George Lucas",
          runtime: 140,
          genre: "Science Fiction",
          details: "Anikin is a bad boy",
          trailer_url: "https://www.youtube.com/embed/5UnjrG_N8hU",
          img_poster_url:
            "https://drive.google.com/uc?export=view&id=1MqfkPMPn62Fnr_RDy2tWO1cOJ27aftm9",
          img_landscape_url:
            "https://drive.google.com/uc?export=view&id=1FO57TmGYE9gexlkd0p8J9_7OeIi2N9Q4",
        },
        {
          name: "Get Out",
          rating: "15A",
          director: "Jordan Peele",
          runtime: 104,
          genre: "Horror",
          details: "Free deeky movie",
          trailer_url: "https://www.youtube.com/embed/DzfpyUB60YY",
          img_poster_url:
            "https://drive.google.com/uc?export=view&id=1zC27bgNt1E5kIFI05QXDUfXanMGLS0Yy",
          img_landscape_url:
            "https://drive.google.com/uc?export=view&id=1FJvPrlgOGGnOxXFn-8rD4qYV435fT7EV",
        },
        {
          name: "Knives Out",
          rating: "12A",
          director: "Rian Johnson",
          runtime: 130,
          genre: "Mystery",
          details: "Mystery movie",
          trailer_url: "https://www.youtube.com/embed/qGqiHJTsRkQ",
          img_poster_url:
            "https://drive.google.com/uc?export=view&id=17F_lEyf_ZP6RMvBThK6xuWC7aDEpM6dj",
          img_landscape_url:
            "https://drive.google.com/uc?export=view&id=1FryQVDY3xmGiwROh2NFny0QYTnW_zFd1",
        },
        {
          name: "Peter Rabbit",
          rating: "PG",
          director: "Will Gluck",
          runtime: 195,
          genre: "Family",
          details: "A movie about a rabbit called Peter",
          trailer_url: "https://www.youtube.com/embed/7Pa_Weidt08",
          img_poster_url:
            "https://drive.google.com/uc?export=view&id=1X0EeWXOmoaJz_jYftOM5N-QwNZsxGJB4",
          img_landscape_url:
            "https://drive.google.com/uc?export=view&id=1MlQlhlvPqjJaa1BaGI6KK55rZZC771EE",
        },
        {
          name: "Mad Max: Fury Road",
          rating: "12A",
          director: "George Miller",
          runtime: 120,
          genre: "Action",
          details: "Max goes mad on a furious road",
          trailer_url: "https://www.youtube.com/embed/hEJnMQG9ev8",
          img_poster_url:
            "https://drive.google.com/uc?export=view&id=1aPqs6E0sQdxWae_JmYQvzE-4zZ4riTew",
          img_landscape_url:
            "https://drive.google.com/uc?export=view&id=1IwSzsJRD_kG2avREe-viJD5Qg1_2rOpE",
        },
        {
          name: "The Nice Guys",
          rating: "15A",
          director: "Shane Black",
          runtime: 116,
          genre: "Comedy",
          details: "1977 LA, Unlikely Partners disappear",
          trailer_url: "https://www.youtube.com/embed/GQR5zsLHbYw",
          img_poster_url:
            "https://drive.google.com/uc?export=view&id=1hp1vvvn9QIQQqwtRJjuJXgfTR3rQdEJ1",
          img_landscape_url:
            "https://drive.google.com/uc?export=view&id=1zBXHadAFLXyiBXr08a9_DgqtMrG6kOM0",
        },
      ]);
    });
};

export { seed };
