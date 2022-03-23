# Favorites Feature

I implemented a favorites feature which helps add any albums you like to a favorites array and easily remove them from it.

The functionality is based on the React Context API, which in my opinion is quite suitable for it as it requires less boilerplate code and basically is quicker to set up. I created a custom hook with a useState hook for a favorites state as well as two functions: the former immutably adds an item to a favorites array, the latter filters the array, finds the item based on its id and filters it out of the array.

I also added a localStorage support to conveniently store favorites in your client.

I invoked my useFavorites custom hook and provided all its contents as the context value in App component so that all its child components will be able to access it.

I used the useContext hook and accessed all the necessary functions and array to map through the array displaying its contents on a separate page and add to/remove from it with the help of react icons.
