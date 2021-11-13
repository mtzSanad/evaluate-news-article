const request = require('supertest');
const express = require('express');
import 'babel-polyfill'

const app = require('../index')

describe('POST /sentiment', function () {
    it('responds with json', async () => {
        const respone = await request(app)
            .post('/sentiment')
            .send({ data: 'https://www.nytimes.com/2021/11/13/insider/dixie-fire-weather-3-d.html' })
        expect(respone.statusCode).toEqual(200)
        // .expect(function (res) {
        //     res.body.text = 'Sections';
        // })
    });
});