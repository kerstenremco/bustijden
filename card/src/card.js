import { html, LitElement, nothing } from "lit";
import { styles, liveIcon } from "./card.styles";

export class ToggleCardLit extends LitElement {
  // private property
  _hass;

  // internal reactive states
  static get properties() {
    return {
      _entity: { state: true },
      _state: { state: true },
    };
  }

  // lifecycle interface
  setConfig(config) {
    this._entity = config.entity;
    // call set hass() to immediately adjust to a changed entity
    // while editing the entity in the card editor
    if (this._hass) {
      this.hass = this._hass;
    }
  }

  getStops() {
    return this._state?.attributes?.stops || [];
  }

  set hass(hass) {
    this._hass = hass;
    this._state = hass.states[this._entity];
  }

  static styles = styles;

  convertArrivalTime(arrivalTime) {
    return arrivalTime.split(":").splice(0, 2).join(":");
  }

  // Show arrival time. If delayed or canceled, show original time with strikethrough.
  getArrivalTime(bus) {
    let text = "";
    let className = "";
    if (bus.delayInSeconds > 0) {
      text = this.convertArrivalTime(bus.arrivalTime);
    } else if (bus.canceled) {
      text = this.convertArrivalTime(bus.arrivalTime);
      className += " route-time-delay";
    } else {
      text = this.convertArrivalTime(bus.calculatedArrivalTime);
    }
    return html`<span class="${className}">${text}</span>`;
  }

  // If delay, show new time. If canceled, show "GEANNULEERD".
  getExtraTimeInfo(bus) {
    let text = "";
    let className = "";
    if (bus.canceled) {
      text = "GEANNULEERD";
      className += " route-extra-time-canceled";
    } else if (bus.delayInSeconds > 0) {
      text = this.convertArrivalTime(bus.calculatedArrivalTime);
    }
    return html`<span class="${className}">${text}</span>`;
  }

  getMinutesUntil(bus) {
    let className = "";
    if (bus.canceled) {
      className = "bus-timer-canceled";
    } else {
      className = "bus-timer";
    }
    return html`<span class="${className}">${bus.minutesUntil} min</span>`;
  }

  getBusCards() {
    const cards = [];
    const stops = this.getStops();
    stops.forEach((bus) => {
      cards.push(html`
        <div class="buscard">
          <div class="buscard-header">
            <span class="bus-number">${bus.routeShortName}</span>
            <span class="bus-title">${bus.stopHeadsign}</span>
            ${this.getMinutesUntil(bus)} ${this.liveIcon}
          </div>
          <div class="buscard-time">
            <div class="buscard-time-details">
              <div class="route">
                <div class="route-time">
                  ${this.getArrivalTime(bus)} ${this.getExtraTimeInfo(bus)}
                </div>
                <div class="route-station">${bus.routeLongName}</div>
              </div>
            </div>
          </div>
        </div>
      `);
    });
    return cards;
  }

  render() {
    return html`
      <ha-card>
        <div class="card-content">${this.getBusCards()}</div>
      </ha-card>
    `;
  }
}
