import { Card, Col, Row, Button, Text } from "@nextui-org/react";
import { useRouter } from "next/router";

function Card1(props) {
  const router = useRouter();
  return (
    <Card
      css={{ w: "100%", h: "400px" }}
      isPressable
      onClick={() => router.push("/event/" + props.link)}
      className="transition hover:scale-110 "
    >
      <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
        <Col>
          <Text color="white" className="text-4xl font-pixel">
            {props.name}
          </Text>
          <Text
            size={18}
            weight="bold"
            transform="uppercase"
            color="#9E9E9E"
            className="font-pixel"
          >
            {props.date}
          </Text>
        </Col>
      </Card.Header>
      <Card.Body css={{ p: 0 }}>
        <Card.Image
          src={props.img}
          objectFit="cover"
          width="100%"
          height="100%"
          alt="Relaxing app background"
        />
      </Card.Body>
      <Card.Footer
        isBlurred
        css={{
          position: "absolute",
          bgBlur: "#0f111466",
          borderTop: "$borderWeights$light solid $gray800",
          bottom: 0,
          zIndex: 1,
        }}
      >
        <Row>
          <Col>
            <Col>
              <Text color="#d1d1d1" size={18} className="break-all font-pixel">
                {props.des}
              </Text>
            </Col>
          </Col>
        </Row>
      </Card.Footer>
    </Card>
  );
}
export default Card1;
