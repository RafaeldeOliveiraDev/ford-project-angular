const express = require('express');
const path = require('path');
const cors = require('cors')

const app = express();

app.use(cors({
    origin: '*', 
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post('/login', (req, res) => {
    try {
        const { userName, password } = req.body

        if (!userName || !password) {
            return res.status(400).json({
                message: 'O campo de usuário ou senha não foi preenchido!'
            });
        }

        if (userName !== 'admin' || password !== '123456') {
            return res.status(404).json({
                message: 'O nome de usuário ou senha está incorreto ou não foi cadastrado!'
            });
        }

        return res.status(200).json({
            id: 1,
            success: true,
            nome: 'admin',
            email: 'admin@email.com',
        });

    } catch (error) {
        return res.status(500).json({
            message: 'Falha na comunicação com o servidor!'
        });
    }
});

app.get('/vehicle', (req, res) => {
    try {
        const vehicles = [
            {
                id: 1,
                model: 'Ranger',
                sales: 4158,
                connected: 700,
                updated: 1550,
                img: "http://localhost:3001/ranger.png"
            },
            {
                id: 2,
                model: 'Mustang',
                sales: 1500,
                connected: 500,
                updated: 750,
                img: "http://localhost:3001/mustang.png"
            },
            {
                id: 3,
                model: 'Territory',
                sales: 4560,
                connected: 1200,
                updated: 3050,
                img: "http://localhost:3001/territory.png"  
            },
            {
                id: 4,
                model: 'Bronco Sport',
                sales: 2791,
                connected: 900,
                updated: 2140,
                img: "http://localhost:3001/broncoSport.png"
            }
        ];

        const { vehicleModel } = req.body;

        if (!vehicleModel) {
            return res.status(200).json(vehicles);
        }

        const vehicle = vehicles.find((v) => 
            v.model.toLowerCase() === vehicleModel.toLowerCase()
        );

        if (!vehicle) {
            return res.status(404).json({
                message: 'Veículo não encontrado!'
            });
        }

        return res.status(200).json([vehicle]);

    } catch (error) {
        return res.status(500).json({
            message: 'Falha na comunicação com o servidor!'
        });
    }
});

app.get('/vehicleData', (req, res) => {
    try {
        const { vin } = req.body;

        switch (vin) {
            case '2FRHDUYS2Y63NHD22454':
                return res.status(200).json({
                    id: 1,
                    odometro: 50000,
                    nivelCombustivel: 90,
                    status: 'on',
                    lat: -12.2322,
                    long: -35.2314
                });
            
                case "2RFAASOYS4E4HDU34875":
                    return res.status(200).json({
                        id: 2,
                        odometro: 10000,
                        nivelCombustivel: 60,
                        status: "on",
                        lat: 14.2321,
                        long: -12.5344
                    });

                    case "1GKFK16K0RJ736886":
                        return res.status(200).json({
                            id: 3,
                            odometro: 80000,
                            nivelCombustivel: 45,
                            status: "off",
                            lat: 44.2321,
                            long: 22.5344
                        });

                        case "JH4DA9350PS016433":
                            return res.status(200).json({
                                id: 4,
                                odometro: 120000,
                                nivelCombustivel: 30,
                                status: "off",
                                lat: -10.2321,
                                long: 63.5344
                            });            
        
            default:
                return res.status(404).json({
                    message: 'Código VIN utilizado não foi encontrado!'
                });
        }


    } catch (error) {
        return res.status(500).json({
            message: 'Falha na comunicação com o servidor!'
        });
    }
})

app.listen(3001, () => {
    console.log('http://localhost:3001/');
});