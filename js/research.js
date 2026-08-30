/* =========================================
   RESEARCH AREAS PAGE
   Research Focus Profile Animation
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* -----------------------------------------
       Research profile animation
    ----------------------------------------- */

    const profileItems =
        document.querySelectorAll(
            ".focus-item, .research-card, .impact-card, .collaboration-card"
        );


    /* Initially prepare elements */

    profileItems.forEach(function (item) {

        item.classList.add("research-hidden");

    });


    /* -----------------------------------------
       Intersection Observer
    ----------------------------------------- */

    const observer =
        new IntersectionObserver(

            function (entries) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "research-visible"
                        );

                        observer.unobserve(
                            entry.target
                        );

                    }

                });

            },

            {
                threshold: 0.12
            }

        );


    /* Observe elements */

    profileItems.forEach(function (item) {

        observer.observe(item);

    });


    /* -----------------------------------------
       Research profile nodes
    ----------------------------------------- */

    const profileNodes =
        document.querySelectorAll(
            ".profile-node"
        );


    profileNodes.forEach(function (node, index) {

        node.style.animationDelay =
            (index * 0.25) + "s";

    });

});