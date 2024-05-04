import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="landing-page">
      <section className="intro">
        <p>
          Welcome to Squirrel Sphere: Your Gateway to Central Park's Squirrel
          Kingdom! Dive into the bustling world of Central Park's squirrels with
          our innovative web app, combining advanced mapping technology and
          insightful demographic charts. Explore the elusive black squirrels,
          the rarest gem in the park, through our curated data on behavior,
          distribution, and population trends. Whether you're a seasoned
          wildlife enthusiast or a curious urban explorer, Squirrel Sphere
          invites you to uncover the mysteries of Central Park's squirrel
          kingdom. Start your adventure today and navigate the wonders of
          nature, one squirrel at a time!
        </p>
        <Link to={"/map"}>
          <button>Let's find some squirrels!!</button>
        </Link>
      </section>
      <section className="images">
        <img
          src="https://images.unsplash.com/photo-1533651180995-3b8dcd33e834?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3F1aXJyZWx8ZW58MHx8MHx8fDA%3D"
          alt="Squirrel standing upright on branch"
        />
        <img
          src="https://images.unsplash.com/photo-1618794810603-4b384ce62737?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHNxdWlycmVsfGVufDB8fDB8fHww"
          alt="Squirrel laying along branch"
        />
        <img
          src="https://images.unsplash.com/photo-1614740569711-3434bbc357ff?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fHNxdWlycmVsfGVufDB8fDB8fHww"
          alt="Close-up of squirrel with snow"
        />
        <img
          src="https://images.unsplash.com/photo-1610653123505-6480cc9b37f3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fHNxdWlycmVsfGVufDB8fDB8fHww"
          alt="Squirrel on bench"
        />
        <img
          src="https://images.unsplash.com/photo-1579695876236-e8ce73e1f498?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTV8fHNxdWlycmVsfGVufDB8fDB8fHww"
          alt="Albino squirrel"
        />
        <section>
          <img
            src="https://media.istockphoto.com/id/1493474312/photo/a-black-squirrel-poses-by-the-birdhouse.webp?b=1&s=170667a&w=0&k=20&c=q3pKO65TuifaSnawYdoTL5U4T0lYETTdrAk4zpZQt1U="
            alt="Black squirrel on bench"
          />
          <img
            src="https://media.istockphoto.com/id/1338274606/photo/black-squirrel-with-walnut-fruit.webp?b=1&s=170667a&w=0&k=20&c=ZbYDY5kaO49qhQ6sHVJuj1uTWotSWoVgnOELk16DPT8="
            alt="Black squirrel carrying an acorn"
          />
        </section>
      </section>
    </div>
  );
};

export default Home;
