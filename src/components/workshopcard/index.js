import { Card, Button } from "semantic-ui-react";
const WorkshopCard = (props) => {
  const { id, name, removeWorkshop } = props;

  const onRemove = () => {
    removeWorkshop(id);
  };

  return (
    <Card>
      <Card.Header>{name}</Card.Header>
      <Card.Content extra>
        <Button color={"red"} onClick={onRemove}>
          Usuń
        </Button>
      </Card.Content>
    </Card>
  );
};

export default WorkshopCard;
