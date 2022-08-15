const pool = require('../utils/db');

class Signup {

    constructor(email, password, verify_code) {
        this.email = email;
        this.password = password;
        this.verify_code = verify_code; 
    }

    async create() {
        try {
            const query = "INSERT INTO ?? SET ?";
            const params = [process.env.DB_T_USERS, this];
            const result = await pool.query(query, params);
        
            return result;
            
        } catch (error) {
            throw error;
        }
 
    } 
    
    async read(){

    }

}

module.exports = Signup;