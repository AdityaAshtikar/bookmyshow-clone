import { useState } from "react";
import { useParams } from "react-router-dom";
import { Flex, Space, Button } from "antd";
import { useGetSingleShowQuery } from "../services/showServices";
import { useMakePaymentMutation } from "../services/showServices";
function BookSeatsPage() {
  const { showId } = useParams();
  const { data: showDetails, isLoading } = useGetSingleShowQuery(showId);
  const [makePayment] = useMakePaymentMutation();
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [totalTicketPrice, setTotalTicketPrice] = useState(0);

  const onSeatClickHandler = (seat) => {
    const selected = [...selectedSeats];
    if (selected.includes(seat._id)) {
      setSelectedSeats(selected.filter((el) => el !== seat._id));
      setTotalTicketPrice((prev) => prev - showDetails.ticketPrice);
      return false;
    }
    selected.push(seat._id);
    setTotalTicketPrice((prev) => prev + showDetails.ticketPrice);
    setSelectedSeats(selected);
  };

  const onConfirmPaymentHandler = () => {
    alert("Paid!");
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <>
      <Flex justify="space-between">
        <Space direction="vertical">
          <h3>
            Booking for : {showDetails.movie.title} - {showDetails.name}{" "}
          </h3>
          <h4>Booking Time : {showDetails.time}</h4>
        </Space>
        <Space direction="vertical">
          <h3>Ticket Price : Rs {showDetails.ticketPrice}</h3>
          {/* <h4>Total Seats Available : {showDetails.totalSeats.length}</h4> */}
          <h3>Total Price : Rs.{totalTicketPrice}</h3>

          <Button
            onClick={onConfirmPaymentHandler}
            disabled={totalTicketPrice === 0}
            type="primary"
          >
            Confirm Booking
          </Button>
        </Space>
      </Flex>
      <div className="screen"></div>
      <Flex justify="center">
        <div className="theatre-seats">
          {showDetails.totalSeats.map((seat) => (
            <div
              onClick={() => onSeatClickHandler(seat)}
              key={seat._id}
              className={`seat ${
                selectedSeats.includes(seat._id) ? "selected" : ""
              }`}
            >
              {seat.seatNumber + 1}
            </div>
          ))}
        </div>
      </Flex>
    </>
  );
}

export default BookSeatsPage;
