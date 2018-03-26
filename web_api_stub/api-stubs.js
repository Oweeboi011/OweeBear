var httpProxy = require('http-proxy');
var bodyParser = require('body-parser');
var multiparty = require('multiparty');

module.exports = function configureRoutes(app, middleware) {
    /* 
    Usage: Create a rule to the end point here. Only 1 endpoint per rule.

    if you want a delay place the return value inside a setTimeout() to implement the delay.
    for Posts, vary the result by the input parameters sent by the client. Data can be read using req.body.

    get the
    e.g.
    app.post('/api/login', middleware, (req, res) => {
        var userId = req.body.userId;
        switch(userId)
            return different result depending on id. 
        //get mockdata
        var mockData = require('./responseStubs.json');
        //send specific data to send
        res.send(mockdata.login.success)
    });

    
    */
    var apiProxy = httpProxy.createProxyServer();
    var aspnetMVC = 'http://localhost:5000';

    app.use(bodyParser.json());
    //mocking controller data
    app.get('/Home/GetData', middleware, (req, res) => {
        var mockData = require('./responseStubs.json');


        //send specific data to send
        res.send(mockData.GetData);
    });


    app.get("/Account/Login", function (req, res) {
        console.log('redirecting to Server2');
        apiProxy.web(req, res, { target: aspnetMVC });
    });

    app.post("/Account/ExternalLogin", function (req, res) {
        console.log("test " + __dirname);
        res.sendFile(__dirname + '/ExternalLogin.html');
    });

    app.get("/cms/navigation", function (req, res) {
        var mockData = require('./responseStubs.json');


        //send specific data to send
        res.send(mockData.GetNavigation);
    });

    app.get("/api/product/:id", function (req, res) {
        var mockData = require('./responseStubs.json');
        var id = req.params.id;

        var retVal = mockData.GetProduct[id];
        if (!retVal)
            retVal = mockData.GetProduct[1]

        //send specific data to send
        setTimeout(function () {
            res.send(retVal);
        }, 1000);

    });
    var cart = [];
    app.post("/api/cart", function (req, res) {
        var mockData = require('./responseStubs.json');
        console.log(req.body);
        var cartItem = req.body;
        if (cartItem.variantId == 1) {
            cart.push({ variantId: 2, quantity: cartItem.quantity, price: 2250 });
        }

        if (cartItem.variantId == 3) {
            cart.push({ variantId: 3, quantity: cartItem.quantity, price: 2250 });
        }

        console.log(cart);
        var retVal = { total: 0, numberOfItems: 0 };
        cart.forEach(function (value) {
            retVal.total += value.quantity * value.price;
            retVal.numberOfItems++;
        })
        //send specific data to send

        setTimeout(function () {
            res.send(mockData.cart)
        }, 10000);
    });

    app.post("/api/product/variant/subscribe", function (req, res) {

        res.send(true);
    });

    app.post("/api/address", function (req, res) {

        res.status(200).send('27');
    });

    app.post("/api/checkout", function (req, res) {
        res.send(500);
        //res.send('QWERTY');
    });

    app.get("/api/product/category/:category", function (req, res) {
        var mockData = require('./responseStubs.json');
        var category = req.params.category;


        //send specific data to send
        setTimeout(function () {
            res.send(mockData.ProductList[category])
        }, 2000);
    });

    app.get("/api/cart", function (req, res) {
        var mockData = require('./responseStubs.json');

        //send specific data to send
        res.send(mockData.cart);
    });

    app.get("/api/my-orders", function (req, res) {
        var mockData = require('./responseStubs.json');

        //send specific data to send
        setTimeout(function () {
            res.send(mockData.myorders)
        }, 2000);

    });

    app.get("/api/provinces", function (req, res) {
        var mockData = require('./responseStubs.json');

        //send specific data to send
        res.send(mockData.provinces);
    });

    app.post("/api/payment-image", function (req, res) {
        var form = new multiparty.Form();

        form.parse(req, function (err, fields, files) {
            res.send("bytes Received:" + JSON.parse(form.bytesReceived));
        });

    });

    app.get("/api/orders/:status", function (req, res) {
        var mockData = require('./responseStubs.json');

        //send specific data to send
        res.send(mockData.orders);

    });

    app.get("/api/orders/:status/:shippingType", function (req, res) {
        var mockData = require('./responseStubs.json');

        //send specific data to send
        res.send(mockData.orders);

    });

    app.get("/api/orders", function (req, res) {
        var mockData = require('./responseStubs.json');
        var id = req.query.orderId;
        //send specific data to send
        res.send(mockData.order[id]);

    });

    app.get("/api/user/addresses", function (req, res) {
        var mockData = require('./responseStubs.json');
        
        //send specific data to send
        res.send(mockData.addresses);

    });

    app.get("/api/shipping/philippines/:region", function (req, res) {
        var region = req.params.region;

        if (region == "Metro Manila") {
            res.send("60.00");
        }
        else {
            res.send("120.00");
        }
    });

    app.get("/api/page/:title", function (req, res) {
        var title = req.params.title;
        var mockData = require('./responseStubs.json');
        
        //send specific data to send
        res.send(mockData.pages[title]);
    });

    app.get("/api/page/:title", function (req, res) {
        var title = req.params.title;
        var mockData = require('./responseStubs.json');
        
        //send specific data to send
        res.send(mockData.pages[title]);
    });

    app.post("/api/verify-coinph-payment", function (req, res) {
        
        setTimeout(function() {
            res.send("true");
        }, 1000);
    });

    app.post("/api/preorder", function (req, res) {
        
        setTimeout(function() {
            res.send("true");
        }, 1000);
    });






}