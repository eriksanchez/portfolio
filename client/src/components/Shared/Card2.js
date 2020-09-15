import React from "react";
import "./Card2.css";
function Card2({ Title, Detail1, Detail2, Detail3, Detail4 }) {
  return (
    <div class="Card2_container">
      <div class="Card2_card">
        <div class="Card2_circle">
          <h2>{Title}</h2>
        </div>
        <div class="Card2_content">
          <h5>{Detail1}</h5>
          <h5>{Detail2}</h5>
          <h5>{Detail3}</h5>
          <h5>{Detail4}</h5>
          <a href="#">DEMO</a>
        </div>
      </div>
    </div>
  );
}
export default Card2;
