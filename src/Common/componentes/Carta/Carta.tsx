import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

interface pokemonsProps {
  name: string;
  image: string;
  urlDetalle: string;
}

export const Carta = (pokemones: pokemonsProps) => {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={pokemones.image} />
        <Card.Body>
          <Card.Title>{pokemones.name}</Card.Title>
          <Card.Text></Card.Text>
          <Button variant="primary"></Button>
        </Card.Body>
      </Card>
    </div>
  );
};
