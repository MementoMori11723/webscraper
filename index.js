const axios = require('axios')
const cheerio = require('cheerio')
const { response } = require('express')
const url = 'https://www.theguardian.com/uk'
axios(url).then(response => {
        const html = response.data
        const $ = cheerio.load(html)
        const artical = []
        $('.fc-item__title',html).each(function(){
            const title = $(this).text()
            const Url = $(this).find('a').attr('href')
            artical.push({
                title,
                Url
            })
        })
        console.log(artical)
    }).catch(err => console.log(err))