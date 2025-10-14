import { css } from "lit";

export default css`
  .buscard-header {
    display: flex;
    gap: 5px;
    align-items: center;
  }

  .dest-icon path {
    fill: var(--state-icon-color);
  }

  .buscard-time {
    display: flex;
    align-items: center;
    height: 40px;
  }

  .route {
    display: flex;
    gap: 5px;
  }

  .route-time {
    font-weight: bolder;
    text-align: right;
  }

  .route-time-delay {
    text-decoration: line-through;
    color: red;
  }

  .route-station {
    flex-grow: 1;
  }

  .bus-title {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    flex-grow: 1;
  }

  .live-icon {
    margin-left: -3px;
  }

  .bus-timer {
    color: #2fbd95;
    white-space: nowrap;
  }

  .live-icon g {
    fill: #2fbd95;
  }

  .bus-number {
    background-color: var(--state-icon-color);
    padding: 1px 6px;
    font-size: smaller;
    font-weight: bolder;
  }

  .buscard {
    padding: 10px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
`;
