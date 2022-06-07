import { Request, Response } from 'express';
import axios from 'axios';
const API_KEY = '431JQA10Y3W9170I';

export class SearchSymbolByKeywordController {
    async handle(request: Request, response: Response) {
        const keywords = request.body;
        
        const options = {
            method: 'GET',
            url: `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${keywords}&apikey=${API_KEY}`,

        };

        const quotes = await axios.request(options)
        .then(function (response) {
          
            console.log(response.data);

        }).catch(function (error) {
            console.error(error);
        });
        console.log(quotes)
        return response.json(quotes);
    }
}