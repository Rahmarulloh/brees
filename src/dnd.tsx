import React, { useState } from "react";
import "./dnd.css";

const DragAndDropExample = () => {
  const [items, setItems] = useState([
    { id: "1", name: "Item 1" },
    { id: "2", name: "Item 2" },
    { id: "3", name: "Item 3" },
    { id: "4", name: "Item 4" },
    { id: "5", name: "Item 5" },
    { id: "6", name: "Item 6" },
  ]);

  const handleDragStart = (event: DragEvent) => {
    // Store the ID of the item being dragged
    // @ts-ignore
    event.dataTransfer.setData("text/plain", event.target.id);
  };

  const handleDrop = (event: DragEvent) => {
    // Get the ID of the item being dropped
    // @ts-ignore
    const itemId = event.dataTransfer.getData("text/plain");

    // Move the item to the new drop location
    setItems((prevItems) => {
      const newItems = [...prevItems];
      //   @ts-ignore
      const itemIndex = newItems.findIndex((i) => i.id === itemId);
      newItems.splice(itemIndex, 1);
      const droppableIndex = newItems.findIndex(
        // @ts-ignore
        (i) => i.id === event.target.id
      );
      newItems.splice(droppableIndex, 0, newItems[itemIndex]);
      return newItems;
    });
  };

  return (
    <div className="drag-and-drop-example">
      <ul>
        {items.map((item) => (
          <li
            key={item.id}
            draggable={true}
            onDragStart={() => handleDragStart}
            onDrop={() => handleDrop}
            id={item.id}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DragAndDropExample;
