import * as fs from "fs";

export default function handler(req,res) {
    fs.readFile(`../../userData.json`,'utf-8', (error,data) => {
        console.log(req.query.slug);
        res.status(200).json(JSON.parse(data) )
    })
}