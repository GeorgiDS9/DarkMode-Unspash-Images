## Setup

- npm install
- npm run dev

## App Development Steps

- Set dark theme
- Add search form/feature
- Create context
- Sign Up for Unsplash Account (Developer)
- Install and Setup React Query (in Gallery Component)
- Install and Setup React Query Dev Tools
- Setup ENV Variables in VITE
- Test, test, test...
- Deploy to Netlify

## Info

### React Query Info

By default, useQuery caches the results of the API request for a certain amount of time. This can improve the performance of your application by reducing the number of requests made to the API.

When you specify the queryKey array in the options object for useQuery, you are telling the hook how to identify the data being fetched. If the queryKey array doesn't change between renders of the component, then useQuery will return the cached data instead of re-fetching it from the API.

The queryKey array is used by useQuery to identify which data the query is fetching. When the queryKey array changes, useQuery assumes that the data being fetched has changed, and it re-runs the queryFn to fetch the updated data.

In this case, searchTerm is the user's search input, and it is used to modify the API request URL. By including searchTerm in the queryKey array, you are telling useQuery to re-run the queryFn whenever the user's search input changes, in order to fetch updated data based on the new search term.

Therefore, without including searchTerm in the queryKey array, the useQuery hook would not re-fetch data when the user performs a new search.

### Vite ENV Vars

- .env : must be added in the root and included in .gitignore
