import { useState } from "react";
import { Tabs, Button, Flex, Card } from "antd";
import AddMovieForm from "../../components/AddMovieForm";
import AddTheatreForm from "../../components/AddTheatreForm";
import { useGetAllMoviesQuery } from "../../services/movieServices";

function AdminProfilePage() {
  const { data } = useGetAllMoviesQuery();
  const [addMovieForm, openAddMovieForm] = useState(false);
  const [addTheatreForm, openTheatreForm] = useState(false);

  const items = [
    {
      key: "admin-movies",
      label: "Movies",
      children: (
        <Flex vertical gap={20}>
          <Flex justify="end">
            <Button onClick={() => openAddMovieForm(true)} type="primary">
              Add Movie
            </Button>
          </Flex>
          <Flex vertical gap={10}>
            {data?.map((movie) => (
              <Card key={movie._id} title={movie.title}>
                <p>{movie.description}</p>
                <Button onClick={() => deleteMovie({ movieId: movie._id })}>
                  Delete
                </Button>
              </Card>
            ))}
          </Flex>
          <AddMovieForm open={addMovieForm} onClose={openAddMovieForm} />
        </Flex>
      ),
    },
    {
      key: "admin-theatres",
      label: "Theatres",
      children: (
        <Flex vertical gap={10}>
          <Flex justify="end">
            <Button onClick={() => openTheatreForm(true)} type="primary">
              Add Theatre
            </Button>
          </Flex>
          <Card title="Default size card">
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
          <Card title="Default size card">
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
          <AddTheatreForm open={addTheatreForm} onClose={openTheatreForm} />
        </Flex>
      ),
    },
  ];
  return <Tabs centered size="large" defaultActiveKey="1" items={items} />;
}

export default AdminProfilePage;
