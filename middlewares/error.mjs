import express from "express";

function errorHandler(err, _req, res, next)
{
    res.status(500).json({
        message: "Something is wrong with the server!",
        error: err.message
    })
}

export default errorHandler;