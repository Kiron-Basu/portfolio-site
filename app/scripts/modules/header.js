import $ from 'jquery';
import waypoints from '../../../node_modules/waypoints/lib/noframework.waypoints';
import smoothScroll from 'jquery-smooth-scroll';

class Header {
    constructor() {
        this.siteHeader = $('.nav');
        this.headerTriggerElement = $('.primary-heading');
        this.createHeaderWaypoint();
        this.pageSections = $('.section');
        this.headerLinks = $('.smoothScroll');
        this.createPageSectionWaypoints();
        this.addSmoothScrolling();
    }

    addSmoothScrolling() {
        this.headerLinks.smoothScroll();
    }

    createHeaderWaypoint() {
        var that = this;
        new Waypoint({
            element: this.headerTriggerElement[0], //first item in a jquery like object is a pointer to native DOM element
            handler: function(direction) {
                if (direction == "down") {
                    that.siteHeader.addClass("nav--dark");
                } else {
                    that.siteHeader.removeClass("nav--dark");
                }
            }
        });
    }

    createPageSectionWaypoints() {
        var that = this;
        this.pageSections.each(function() {
            var currentPageSection = this;
            new Waypoint({
                element: currentPageSection,
                handler: function(direction) {

                    if (direction == "down") {
                        var matchingHeaderLink = currentPageSection.getAttribute("data-matching-link");
                    that.headerLinks.removeClass("is-current-link");
                    $(matchingHeaderLink).addClass("is-current-link");
                    }   
                },
                offset: "18%"
            });

            new Waypoint({
                element: currentPageSection,
                handler: function(direction) {

                    if (direction == "up") {
                        var matchingHeaderLink = currentPageSection.getAttribute("data-matching-link");
                    that.headerLinks.removeClass("is-current-link");
                    $(matchingHeaderLink).addClass("is-current-link");
                    }   
                },
                offset: "-40%"
        
            });
        });
    }
}

export default Header