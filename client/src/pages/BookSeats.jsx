import { useState } from "react";
import { Flex } from "antd";
function BookSeatsPage() {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const seats = 120;

  const onSeatClickHandler = (seatNo) => {
    if ([...selectedSeats].includes(seatNo + 1)) {
      setSelectedSeats([...selectedSeats].filter((el) => el !== seatNo + 1));
      return false;
    }
    setSelectedSeats([...selectedSeats, seatNo + 1]);
  };
  return (
    <>
      <h3>Booking for : Dunki</h3>
      <div className="screen"></div>
      <Flex justify="center">
        <div className="theatre-seats">
          {Array.from(Array(seats).keys()).map((seat) => (
            <div
              onClick={() => onSeatClickHandler(seat)}
              key={`seat-${seat + 1}`}
              className={`seat ${
                selectedSeats.includes(seat + 1) ? "selected" : ""
              }`}
            >
              {seat + 1}
            </div>
          ))}
        </div>
      </Flex>
    </>
  );
}

export default BookSeatsPage;
