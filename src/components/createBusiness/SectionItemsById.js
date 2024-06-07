import React, { useState, useEffect } from "react";
import axios from "axios";
import { getAuthUser } from "../../helper/Storage";

const SectionItemsById = ({ sectionId }) => {
  const auth = getAuthUser();
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (sectionId) {
      axios
        .get(`http://localhost:4000/sections/${sectionId}`, {
          headers: {
            Authorization: `Bearer ${auth.data.token}`,
          },
        })
        .then((response) => {
          setItems(response.data.items);
        })
        .catch((error) => {
          console.error("Error fetching section items:", error);
        });
    }
  }, [sectionId, auth.data.token]);

  return (
    <div>
      <h2>Items in Section</h2>
      {items.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Code</th>
              <th>Item Name</th>
              <th>Image</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item._id}>
                <td>{item.code}</td>
                <td>{item.name}</td>
                <td>
                  <img
                    src={item.image}
                    alt={item.name}
                    width="50"
                    height="50"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No items found in this section.</p>
      )}
    </div>
  );
};

export default SectionItemsById;
