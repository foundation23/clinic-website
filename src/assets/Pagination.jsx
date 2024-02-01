import {Swiper} from "swiper/react";

const pagination = new Swiper('.swiper', {

    renderFraction: function (currentClass, totalClass) {
        return '<span class="' + currentClass + '"></span>' +
            ' of ' +
            '<span class="' + totalClass + '"></span>';
    }
});

export default pagination;