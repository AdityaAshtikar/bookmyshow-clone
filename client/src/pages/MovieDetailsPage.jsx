import { DatePicker, Flex, Image, Space, Card, Button } from "antd";
import { useNavigate } from "react-router-dom";

function MovieDetailsPage() {
  const navigate = useNavigate();
  function onBookingDateSelectHandler(_, dateString) {
    navigate(`/movie/21312312?date=${dateString}`);
  }
  return (
    <>
      <div className="movie-information-grid">
        <Image src="/movie-dummy.jpg" />
        <Space size={20} direction="vertical">
          <h1>Marvels Avenger Endgame</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            aperiam ab enim alias rem cumque officia repudiandae officiis
            impedit similique, voluptatibus blanditiis vitae aliquid maiores
            magnam quaerat, saepe ullam. Delectus nisi reiciendis fuga ullam
            excepturi esse doloremque asperiores culpa nulla dolores ipsum,
            earum error consequatur facilis vitae similique repellat vero?
          </p>
          <h3>Genre : Action</h3>
          <h3>Language : English</h3>
          <h3>Duration : 180 min</h3>
          <h3>Release Date : 05 January 2024</h3>
        </Space>
      </div>
      <Flex gap={10} align="center" justify="end">
        <h4>Select Booking Date</h4>
        <DatePicker onChange={onBookingDateSelectHandler} format="DD/MM/YYYY" />
      </Flex>
      <Flex vertical gap={10}>
        <h2>Theatres</h2>
        <Card
          className="theatre-card"
          bordered={false}
          title="PVR Connaught Palace"
        >
          <Flex gap={10}>
            <Button>08:00 PM</Button>
            <Button>10:00 PM</Button>
          </Flex>
        </Card>
        <Card
          className="theatre-card"
          bordered={false}
          title="PVR Connaught Palace"
        >
          <Flex gap={10}>
            <Button onClick={() => navigate("/book-show/sdjnadnl")}>
              08:00 PM
            </Button>
            <Button>10:00 PM</Button>
          </Flex>
        </Card>
      </Flex>
    </>
  );
}

export default MovieDetailsPage;
