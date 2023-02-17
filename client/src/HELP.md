I've created a few folders for everyone to use:
    - pages -> this is where all pages will go (home, viewMovies, etc.)
    - components -> the components file is for reusable chunks of code that can be used
        in more than one place or used multiple times.
    - router -> this is where we set up things so that the browser knows what page to display
        for each url
    - utils -> all I have in here right now is the set up for axios which is what we'll be using
        to make requests to the backend. You don't need to worry about it too much, just import
        and use.
    - state -> there's nothing in here right now and I'm not sure if I'll do anything with it but
        if things in the code start to get a bit complex I'll probably split things up and put it
        into here to make things simpler/easier.

Making a page:

There's nothing too difficult about it. In the pages folder, create a javascript file. You can
use either the home.js (simple) or the example.js (slightly less simple) to get you started. It
might look a bit weird the mix of javascript and 'html' but just picture it as a function that
returns a chunk of html.

In the home.js file I have a link component, imported from the components file. All it does is
redirect to '/example'. Example.js is only slightly more complex in that it has an axios 
request to the backend to get all movies. The useEffect() function (or hook) is called when 
the page is loaded, and React will automatically update the necessary parts of the page
when needed. In this case, when the movie data is actually retrieved it will populate the 'ul' 
with 'li' elements. The useState() hook is just a way for controlling the state of React 
components.

Hopefully I've explained things well enough and the example files should be enough to get you
started. But if not, just message me.