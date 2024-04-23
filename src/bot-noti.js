import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { TwitterApi } from "twitter-api-v2";

const client = new TwitterApi({
    appKey: "cYtq9nQZ85ZTi1QrS7QntuMpm",
    appSecret: "AguoXuUy0W2oBvkZrm7wfxVj1j7PZ8PhM4vLkwXw5BmjkQGRBc",
    accessToken: "1780001616545935360-BarSu2mNMWTx9mAy2bicBakiFtNyjD",
    accessSecret: "9y3GloaKg8EkRLEaClgU77RefbhUSAn0eJVa1j9nxEtdf",
    bearerToken: "AAAAAAAAAAAAAAAAAAAAAKhatQEAAAAAYIjuMjxGsIV2KKnlvVM8XZ8coBo%3D5EMm0SvZg4k5blaFYefyDJoVnoSTyqbQ6PhZg0ifqHGEUGcnA1",
});

export const TweetConNoticia = () => {
    const [noticia, setNoticia] = useState(null);

    useEffect(() => {
        const obtenerYMostrarNoticia = async () => {
            try {
                const apiUrl = 'https://newsdata.io/api/1/news';
                const params = {
                    apikey: 'pub_422224e378f27631462c468a88bcbba60c83f',
                    country: 'ar',
                    language: 'es',
                };
                const response = await axios.get(apiUrl, { params });
                if (response.status === 200) {
                    const primeraNoticia = response.data.results[0];
                    setNoticia(primeraNoticia);
                } else {
                    throw new Error('Error al obtener la noticia');
                }
            } catch (error) {
                console.error("Error al obtener la noticia: ", error.message);
            }
        };

        obtenerYMostrarNoticia();
    }, []);

    useEffect(() => {
        const publicarTweetConNoticia = async () => {
            try {
                if (noticia) {
                    const tweet = `📰 ${noticia.title}\n\n${noticia.link}\n\nPor: ${noticia.source_id}`;
                    await client.v2.tweet(tweet);
                    console.log("Tweet con la noticia publicado con éxito.");
                }
            } catch (error) {
                console.error("Error al publicar el tweet con la noticia: ", error.message);
            }
        };

        const intervalId = setInterval(publicarTweetConNoticia, 2 * 60 * 1000); // 2 minutos en milisegundos

        return () => clearInterval(intervalId);
    }, [noticia]);

    return (
        <div>
            {noticia && (
                <div>
                    <h2>{noticia.title}</h2>
                    <p>{noticia.link}</p>
                    <p>Por: {noticia.source_id}</p>
                </div>
            )}
        </div>
    );
};

