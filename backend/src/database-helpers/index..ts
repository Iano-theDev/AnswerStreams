import { request } from 'express'
import mssql from 'mssql'
import { sqlConfig } from '../config/config'

class DatabaseConnection {
    public pool: Promise<mssql.ConnectionPool>

    constructor(){
        this.pool = mssql.connect(sqlConfig)
    }

    createRequest(request: mssql.Request, inputParams: { [x:string]: string|number }){
        let keys = Object.keys(inputParams)
    
        keys.map(keyName => request.input(keyName, inputParams[keyName]))
    
        return request
    }

    async exec(sp: string, data: {[x:string]: string }={}) {
        let emptyRequest = await (await this.pool).request()
        //remember to remove
        console.log("data", data);

        let request = this.createRequest(emptyRequest, data)
        let result = await(await request.execute(sp)).recordset
        // remember to remove
        console.log("result: ", result);
        
        return result
    }

    checkConnection(){
        return this.pool.then(()=>{
            return true
        }).catch(()=>{
            return false
        })
    }
}

let db = new DatabaseConnection()

export default db

