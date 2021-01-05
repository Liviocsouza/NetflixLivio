const API_KEY = "4b4e60f8416af911e9d56590e3c5249e";
const API_BASE = "https://api.themoviedb.org/3";
const idiomaApiKey = `language=pt-BR&api_key=${API_KEY}`;
 
const basicFetch = async (endPoint) => {
    const req = await fetch(`${API_BASE}${endPoint}`);
    const json = req.json();
    return json;

}

export default {
    getHomeList: async () =>{
        return [
            {
                slug:'originals',
                title:'Originais do netflix',
                items: await basicFetch(`/discover/tv?with_network=213&${idiomaApiKey}`) 
            },
            {
                slug: 'trending',
                title: 'Recomendados para Você',
                items: await basicFetch(`/trending/all/week?${idiomaApiKey}`)
            },
            {
                slug: 'toprated',
                title: 'Em alta',
                items: await basicFetch(`/movie/top_rated?${idiomaApiKey}`)
            },
            {
                slug: 'action',
                title: 'Ação',
                items: await basicFetch(`/discover/movie?with_genres=28&${idiomaApiKey}`)
            },
            {
                slug: 'comedy',
                title: 'Comedia',
                items: await basicFetch(`/discover/movie?with_genres=35&${idiomaApiKey}`)
            },
            {
                slug: 'horror',
                title: 'Terror',
                items: await basicFetch(`/discover/movie?with_genres=27&${idiomaApiKey}`)
            },
            {
                slug: 'romance',
                title: 'Romance',
                items: await basicFetch(`/discover/movie?with_genres=10749&${idiomaApiKey}`)
            },
            {
                slug: 'documentary',
                title: 'Documentários',
                items: await basicFetch(`/discover/movie?with_genres=99&${idiomaApiKey}`)
            },

        ];
    },
    getMovieInfo: async(movieId, type) => {
        let info = {};
        if(movieId){
            switch(type){
                case 'movie':
                    info = await basicFetch(`/movie/${movieId}?${idiomaApiKey}`);
                break;
                case 'tv':
                    info = await basicFetch(`/tv/${movieId}?${idiomaApiKey}`);
                break;
            }
        }
        return info;
    }

}