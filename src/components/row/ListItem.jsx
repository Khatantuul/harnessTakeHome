import React from "react";
import Tag from "../tag/Tag";
import "./listItemStyles.css";
import { timeAgo } from "../../utils/calcUpdated";

function ListItem({
  repo: { identifier, description, updated, num_pulls, is_public },
}) {
  return (
    <li className="list-item">
      <div className="list-item__content">
        <div className="list-item__content-box">
          <p className="list-item__content-title">{identifier}</p>
          <Tag
            label={is_public ? "Public" : "Private"}
            type={is_public ? "public" : "private"}
          />
        </div>
        <p className="list-item__content-desc">{description}</p>
      </div>
      <div className="list-item__meta">
        <label className="list-item__meta-timeline">
          <span className="list-item__meta-timeline-updated">Updated</span>
          <span className="list-item__meta-timeline-time">
            {timeAgo(updated)}
          </span>
        </label>
        <div className="list-item__meta-stats">
          <label className="list-item__meta-stats-star">
            <svg
              width="24px"
              height="24px"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              //   fill="none"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              color="#000000"
            >
              <path
                d="M8.58737 8.23597L11.1849 3.00376C11.5183 2.33208 12.4817 2.33208 12.8151 3.00376L15.4126 8.23597L21.2215 9.08017C21.9668 9.18848 22.2638 10.0994 21.7243 10.6219L17.5217 14.6918L18.5135 20.4414C18.6409 21.1798 17.8614 21.7428 17.1945 21.3941L12 18.678L6.80547 21.3941C6.1386 21.7428 5.35909 21.1798 5.48645 20.4414L6.47825 14.6918L2.27575 10.6219C1.73617 10.0994 2.03322 9.18848 2.77852 9.08017L8.58737 8.23597Z"
                stroke="#000000"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
            1
          </label>
          <label className="list-item__meta-stats-forks">
            <svg
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
              stroke-width="2"
            //   fill="none"
            fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              color="#000000"
            >
              <path
                d="M18 21C19.1046 21 20 20.1046 20 19C20 17.8954 19.1046 17 18 17C16.8954 17 16 17.8954 16 19C16 20.1046 16.8954 21 18 21Z"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M6 7C7.10457 7 8 6.10457 8 5C8 3.89543 7.10457 3 6 3C4.89543 3 4 3.89543 4 5C4 6.10457 4.89543 7 6 7Z"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M6 21C7.10457 21 8 20.1046 8 19C8 17.8954 7.10457 17 6 17C4.89543 17 4 17.8954 4 19C4 20.1046 4.89543 21 6 21Z"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M6 7V17"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M18 17V7C18 7 18 5 16 5H13"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M15.0005 7.50012L12.5005 5.00012L15.0005 2.50012"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
            {num_pulls}
          </label>
        </div>
      </div>
    </li>
  );
}

export default ListItem;
