"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var bp = __importStar(require("body-parser"));
var App = /** @class */ (function () {
    function App() {
        this.app = express_1.default();
        this.config();
        this.routes();
    }
    App.prototype.config = function () {
        this.app.use(bp.json());
        this.app.use(bp.urlencoded({ extended: false }));
    };
    App.prototype.routes = function () {
        var router = express_1.default.Router();
        router.get('/', function (req, res) {
            res.status(200).send({
                message: 'Hello World!'
            });
        });
        router.post('/', function (req, res) {
            var data = req.body;
            res.status(200).send(data);
        });
        this.app.use('/', router);
    };
    return App;
}());
exports.default = new App().app;
//# sourceMappingURL=app.js.map