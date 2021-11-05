const request = require('supertest');
const app = require('./app').app;
const build = require('./app').productBuilder;

describe('GET requests', () => {
    
    test('GET product/read endpoint, expect 200', async () => {
        const res = await request(app).get('/product/read')
        expect(res.statusCode).toBe(200);
    });

    test('GET bad endpoint, expect 404', async () => {
      const res = await request(app).get('/badEndPoint')
      expect(res.statusCode).toBe(404);
    });

});

describe('CREATE request', () => {
    
    test('CREATE product test', async () => {
        const res = await request(app)
                            .post('/product/create')
                            .send({
                                name : "test name", 
                                description : "test desc",
                                price : 0
                            });
        expect(res.statusCode).toBe(201);
        expect(res.body.name).toBe("test name")
        expect(res.body.description).toBe("test desc")
        expect(res.body.price).toBe(0)
        // console.log(`res: ${JSON.stringify(res)}`);
    });

});

describe('UPDATED request', () => {
    
    test('CREATE product test and UPDATE', async () => {
        const res = await request(app)
                            .post('/product/create')
                            .send({
                                name : "banana", 
                                description : "yellow tasty fruit",
                                price : 0.20
                            });
                            
        const res2 = await request(app)
        .put(`/product/update/${JSON.parse(res.text)._id}`)
        .send({
            name : "green banana", 
            description : "green fruit",
            price : 0.10
        });
        
        expect(res2.statusCode).toBe(202);
        expect(res2.body.name).toBe("green banana")
        expect(res2.body.description).toBe("green fruit")
        expect(res2.body.price).toBe(0.10)
    });

});

describe('Unit Tests', () => {

    test('product object builder', () => {
        expect(build('a name', 'a description', 42)).toMatchObject({'name' : 'a name', 'description' : 'a description', price : 42});
    });

});