import express, { Request, Response } from "express";

const getAll=(async (req:Request,res:Response)=>{
    res.send([]);
});

const getUsers= ( async(req:Request,res:Response)=>{
    res.send({});
});

export{getAll, getUsers}