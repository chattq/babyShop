import React, { useState } from "react";
import { Modal, Table } from "antd";
import { dataSize } from "../../dataSize";

export default function ModalSize({ children }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const [size, seSize] = useState(dataSize);
  const columns = [
    {
      title: "Height",
      dataIndex: "height",
      align: "center",
    },
    {
      title: "Weight",
      className: "column-money",
      dataIndex: "weight",
      align: "center",
    },
    {
      title: "Age",
      dataIndex: "age",
      align: "center",
    },
    {
      title: "Size",
      dataIndex: "size",
      align: "center",
    },
  ];
  const data = [
    {
      key: "1",
      height: size.map((h) => h.height[0]),
      weight: size.map((h) => h.weight[0]),
      age: size.map((h) => h.age[0]),
      size: size.map((h) => h.size[0]),
    },
    {
      key: "2",
      height: size.map((h) => h.height[1]),
      weight: size.map((h) => h.weight[1]),
      age: size.map((h) => h.age[1]),
      size: size.map((h) => h.size[1]),
    },
    {
      key: "3",
      height: size.map((h) => h.height[3]),
      weight: size.map((h) => h.weight[3]),
      age: size.map((h) => h.age[3]),
      size: size.map((h) => h.size[3]),
    },
  ];
  return (
    <>
      <span className="cursor-pointer" onClick={showModal}>
        {children}
      </span>
      <Modal
        open={isModalOpen}
        onCancel={handleCancel}
        cancelButtonProps={{ style: { display: "none" } }}
        okButtonProps={{ style: { display: "none" } }}>
        <h1 className="text-center text-[24px] font-bold mb-3">Sizes chart</h1>
        <Table
          columns={columns}
          dataSource={data}
          bordered
          pagination={false}
        />
      </Modal>
    </>
  );
}
