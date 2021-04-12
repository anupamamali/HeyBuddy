import Adventure from "./images/adventure.png";
import Cause from "./images/cause.png";
import Sport from "./images/sport.png";
import Dance from "./images/dance.png";
import Learning from "./images/learning.png";
import Party from "./images/party.png";
import Shoping from "./images/shoping.png";
import Tour from "./images/tour.png";

export const EVENT_TYPE = {
    ADVENTURE: "Adventure",
    SPORT: "Sport",
    CAUSE: "Cause",
    DANCE: "Dance",
    LEARNING: "Learning",
    PARTY: "Party",
    SHOPING: "Shoping",
    TOUR: "Tour"

}

export const imageMapper = (type) => {
    switch (type) {
        case EVENT_TYPE.ADVENTURE :
            return Adventure;
        case EVENT_TYPE.CAUSE :
            return Cause;
        case EVENT_TYPE.SPORT :
            return Sport;
        case EVENT_TYPE.DANCE:
            return Dance;
        case EVENT_TYPE.LEARNING:
            return Learning;
        case EVENT_TYPE.PARTY:
            return Party;
        case EVENT_TYPE.SHOPING:
            return Shoping;
        case EVENT_TYPE.TOUR:
            return Tour;
    }
}