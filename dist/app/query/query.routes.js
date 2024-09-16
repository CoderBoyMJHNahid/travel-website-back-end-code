"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryRoutes = void 0;
const express_1 = require("express");
const query_controller_1 = require("./query.controller");
const app = (0, express_1.Router)();
exports.QueryRoutes = app;
app.post("/flight/save", query_controller_1.FlightQuerySave);
app.get("/flight/list", query_controller_1.getFlightQueries);
app.put("/flight/confirm/:id", query_controller_1.FlightQueryConfirmed);
app.get('/', query_controller_1.getAllQueries);
app.post('/hotel/save', query_controller_1.HotelQuery);
app.get('/hotel/list', query_controller_1.getHotelQueries);
app.get('/:id', query_controller_1.findQueryByID);
app.put('/hotel/confirm/:id', query_controller_1.HotelQueryConfirmed);
app.put('/hotel/dup/', query_controller_1.HotelQueryDup);
app.post('/cab/save', query_controller_1.cabQuerySave);
app.get("/cab/list", query_controller_1.getCabQueries);
app.put("/cab/confirm/:id", query_controller_1.CabQueryConfirmed);
// Compare this snippet from server/src/app/query/query.model.ts:`
