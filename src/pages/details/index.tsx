import { Col, Row } from "antd";
import React from "react";
import "./styles.css";

type Props = {};

const Details = (props: Props) => {
  return (
    <div className="details">
      <Row gutter={12}>
        <Col span={12}>
          <div>Hoàng Minh</div>
        </Col>
        <Col span={12}>
          <div>Hoàng Minh</div>
        </Col>
      </Row>
    </div>
  );
};

export default Details;
