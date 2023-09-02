import Heading from "../ui/Heading";
import Row from "../ui/Row";
import BookinTable from "../features/bookings/BookingTable";
import BookinTableOperations from "../features/bookings/BookingTableOperations";

function Bookings() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All bookings</Heading>
        <BookinTableOperations />
      </Row>
      <BookinTable />
    </>
  );
}

export default Bookings;
