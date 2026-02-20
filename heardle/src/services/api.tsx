const apiURL = "http://localhost:9000";

export const getArtists = () => {
    fetch(apiURL + "/artists").then((response) => {
        return response;
    });
}