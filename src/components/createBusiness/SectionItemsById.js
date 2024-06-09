import React, { useState, useEffect } from "react";
import axios from "axios";
import { getAuthUser } from "../../helper/Storage";

const SectionItemsById = ({ sectionId }) => {
  const auth = getAuthUser();
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (sectionId) {
      axios
        .get(
          `http://localhost:4000/menuer/business/dashboard/menuManger/sections/${sectionId}/items`,
          {
            headers: {
              Authorization: `Bearer ${auth.data.token}`,
            },
          }
        )
        .then((response) => {
          setItems(response.data.items); // Assuming the response structure contains items
          console.log(response.data.items);
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
              <th>Item ID</th>
              <th>Item Name</th>
              
            </tr>
          </thead>
          <tbody >
            {items.map((item) => (
              <tr key={item._id} >
                <td>{item._id}</td>
                <td>{item.item_display_name}</td>
                
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
