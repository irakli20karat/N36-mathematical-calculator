const express = require('express');
const app = express();
const port = 3000;

app.get('/calc/:op/:num1/:num2', (req, res) => {
    try {
        let op = req.params.op;
        let n1 = +req.params.num1;
        let n2 = +req.params.num2;

        if (op && !isNaN(n1) && !isNaN(n2)) {
            switch (op) {
                case ("add"):
                    res.send(`${n1} + ${n2} = ${n1 + n2}`);
                    break;
                case ("minus"):
                    res.send(`${n1} - ${n2} = ${n1 - n2}`);
                    break;
                case ("multi"):
                    res.send(`${n1} · ${n2} = ${n1 * n2}`);
                    break;
                default:
                    res.send("Unknown operation");
            }
        } else {
            res.send(`Error<br>n1 = ${n1}<br>n2 = ${n2}<br>operation=${op}`);
        }
    } catch (error) {
        res.send(error);
    }
})

app.listen(port, () => {
    console.log("Server is running on port", port);
})