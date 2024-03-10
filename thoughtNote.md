# Thought Note : Garmentize #

All the files for the pages are arranged their directories as such

    - CapstoneProject_1

        - assests -> Contains all the images
        - components -> Similar to a components directory in react
            - header -> The header component for navigation
            - footer -> The footer component for all the links & copyright info
        - pages -> All the pages apart from home page
            - allProducts -> Lists all the products in a grid format
            - cart -> Cart page
            - contact -> Contact us page
            - kids -> Garments for kids
            - women -> Garments for women
                - allProducts
                - dresses
                - pants
                - sarees
            - men -> Garments for men
                - addProducts
                - shirts
                - t-shirts
                - trousers
            - login -> Login page
        - scripts -> JS Code that is required globally
            - loaders -> Inject the header & footer into the header & footer tag using jQuery
        - styling -> Global styling
            - pageTemplate.css -> Gives a grid layout for the pages to follow

The project uses jquery to inject the header & footer dynamically at runtime, as such it requires liveserver to be used properly.


I've used the same images everywhere, to save time, as they will be loaded from an API anyways at runtime.

Garmentize logo has been made on adobe logos.

You can also find this code on github at the link : https://github.com/ahdantale/garmentize
        

